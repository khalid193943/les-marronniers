"""Vérifie qu'aucun texte n'est coupé lorsqu'on survole une carte.

Les états au survol échappent aux captures classiques : ce contrôle
survole chaque carte interactive puis mesure si son contenu déborde.
"""
from playwright.sync_api import sync_playwright

PAGES = [('accueil',''), ('vie-scolaire','#vie-scolaire'), ('campus','#campus'),
         ('parcours','#parcours'), ('parents','#parents')]

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_context(viewport={'width': 1440, 'height': 900}).new_page()
    total = 0
    for name, h in PAGES:
        pg.goto('http://127.0.0.1:4173/' + h, wait_until='domcontentloaded')
        pg.evaluate("""async()=>{const s=innerHeight*0.7;
          for(let y=0;y<document.body.scrollHeight;y+=s){scrollTo(0,y);
          await new Promise(r=>setTimeout(r,80));}}""")
        pg.wait_for_timeout(1200)
        cards = pg.query_selector_all('article, .group')
        for c in cards[:30]:
            try:
                if not c.is_visible():
                    continue
                c.hover(timeout=1200)
                pg.wait_for_timeout(650)
                bad = c.evaluate("""el => {
                  const out = [];
                  el.querySelectorAll('p, span, h3').forEach(t => {
                    const st = getComputedStyle(t);
                    if (!/hidden|clip/.test(st.overflow + st.overflowY)) return;
                    if (st.opacity === '0') return;
                    if (t.scrollHeight > t.clientHeight + 6 && t.clientHeight > 4) {
                      out.push((t.textContent || '').trim().slice(0, 40));
                    }
                  });
                  return out;
                }""")
                for txt in bad:
                    total += 1
                    print(f'   ⚠ [{name}] texte coupé au survol : "{txt}…"')
            except Exception:
                continue
    print(f'\n{"="*56}\nTextes coupés au survol : {total}')
    b.close()
