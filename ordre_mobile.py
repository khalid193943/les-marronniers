"""Détecte les sections où, sur mobile, l'image apparaît AVANT son titre."""
from playwright.sync_api import sync_playwright

PAGES = [('accueil',''),('ecole','#ecole'),('parcours','#parcours'),
         ('vie-scolaire','#vie-scolaire'),('campus','#campus'),
         ('parents','#parents'),('actualites','#actualites'),
         ('inscription','#inscription'),('contact','#contact')]

JS = """() => {
  const out = [];
  document.querySelectorAll('main section').forEach(s => {
    const h = s.querySelector('h1,h2,h3');
    if (!h) return;
    // première image "porteuse" (pas une icône ni un doodle)
    const img = [...s.querySelectorAll('img, [role="img"]')]
      .find(i => i.getBoundingClientRect().height > 90);
    if (!img) return;
    const hr = h.getBoundingClientRect();
    const ir = img.getBoundingClientRect();
    if (ir.top < hr.top - 20) {
      out.push({
        titre: (h.textContent||'').trim().slice(0,42),
        ecart: Math.round(hr.top - ir.top)
      });
    }
  });
  return out;
}"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_context(viewport={'width':390,'height':844}).new_page()
    total = 0
    for name, h in PAGES:
        pg.goto('http://127.0.0.1:4173/'+h, wait_until='networkidle')
        pg.evaluate("""async()=>{const s=innerHeight*0.7;
          for(let y=0;y<document.body.scrollHeight;y+=s){scrollTo(0,y);
          await new Promise(r=>setTimeout(r,80));}scrollTo(0,0);}""")
        pg.wait_for_timeout(400)
        bad = pg.evaluate(JS)
        if bad:
            print(f'\n[{name}]')
            for x in bad:
                total += 1
                print(f'   ⚠ image {x["ecart"]}px AVANT le titre — "{x["titre"]}"')
    print(f'\n{"="*58}\nSections à inverser sur mobile : {total}')
    b.close()
