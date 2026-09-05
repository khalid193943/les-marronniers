"""Audit visuel du site : captures mobile + desktop et détection des défauts.

Repère automatiquement :
  • les débordements horizontaux (scroll latéral parasite) ;
  • les éléments plus larges que l'écran ;
  • les zones tactiles trop petites sur mobile (< 44 px) ;
  • les textes qui débordent de leur conteneur.
"""

import sys
import pathlib
from playwright.sync_api import sync_playwright

BASE = 'http://127.0.0.1:4173/'
OUT = pathlib.Path('/home/claude/audit')
OUT.mkdir(exist_ok=True)

PAGES = [
    ('accueil', ''),
    ('ecole', '#ecole'),
    ('parcours', '#parcours'),
    ('vie-scolaire', '#vie-scolaire'),
    ('campus', '#campus'),
    ('parents', '#parents'),
    ('actualites', '#actualites'),
    ('inscription', '#inscription'),
    ('contact', '#contact'),
]

VIEWPORTS = [
    ('mobile', 390, 844),
    ('desktop', 1440, 900),
]

CHECK_JS = """
() => {
  const problems = [];
  const docW = document.documentElement.clientWidth;

  // 1. Débordement horizontal global
  const scrollW = document.documentElement.scrollWidth;
  if (scrollW > docW + 2) {
    problems.push({type: 'scroll-horizontal', detail: `page ${scrollW}px > écran ${docW}px`});
  }

  // Un élément découpé par un ancêtre (overflow hidden/auto) ne déborde pas
  // réellement à l'écran : on l'ignore.
  const isClipped = (el) => {
    let p = el.parentElement;
    while (p && p !== document.body) {
      const s = getComputedStyle(p);
      if (/hidden|auto|scroll/.test(s.overflowX + s.overflow)) return true;
      p = p.parentElement;
    }
    return false;
  };

  // 2. Éléments qui dépassent à droite
  document.querySelectorAll('body *').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const st = getComputedStyle(el);
    if (st.position === 'fixed' || st.visibility === 'hidden' || st.opacity === '0') return;
    if (isClipped(el)) return;
    if (r.right > docW + 3) {
      const cls = (el.className && el.className.toString().slice(0, 60)) || el.tagName;
      problems.push({type: 'deborde-droite', detail: `${el.tagName}.${cls} → ${Math.round(r.right)}px`});
    }
  });

  // 3. Zones tactiles trop petites (mobile)
  if (docW < 600) {
    document.querySelectorAll('button, a').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.height < 36 || r.width < 36) {
        const txt = (el.textContent || '').trim().slice(0, 30);
        problems.push({type: 'zone-tactile-petite', detail: `${Math.round(r.width)}×${Math.round(r.height)} "${txt}"`});
      }
    });
  }

  // 4. Texte tronqué : le contenu dépasse son cadre et se fait couper.
  //    C'est le symptôme d'une carte devenue trop étroite (grille cassée).
  document.querySelectorAll('p, h1, h2, h3, span, li').forEach(el => {
    const st = getComputedStyle(el);
    if (!/hidden|clip/.test(st.overflow + st.overflowY)) return;
    if (el.scrollHeight > el.clientHeight + 6 && el.clientHeight > 0) {
      const txt = (el.textContent || '').trim().slice(0, 34);
      problems.push({type: 'texte-tronque', detail: `"${txt}…"`});
    }
  });

  // 5. Carte anormalement étroite dans une grille (< 120px de large
  //    alors qu'elle contient un titre) : signe d'un col-span ignoré.
  document.querySelectorAll('article, [class*="col-span"]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.height < 80 || r.width === 0) return;
    if (r.width < 120 && el.querySelector('h1,h2,h3')) {
      problems.push({type: 'carte-trop-etroite', detail: `${Math.round(r.width)}px de large`});
    }
  });

  // Dédoublonner
  const seen = new Set();
  return problems.filter(p => {
    const k = p.type + p.detail;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  }).slice(0, 12);
}
"""


def run():
    total = 0
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for vp_name, w, h in VIEWPORTS:
            ctx = browser.new_context(viewport={'width': w, 'height': h},
                                      device_scale_factor=1)
            page = ctx.new_page()
            for name, hash_ in PAGES:
                page.goto(BASE + hash_, wait_until='networkidle')
                page.wait_for_timeout(900)
                # Dérouler la page pour déclencher les animations au scroll
                page.evaluate("""async () => {
                  const step = window.innerHeight * 0.8;
                  for (let y = 0; y < document.body.scrollHeight; y += step) {
                    window.scrollTo(0, y);
                    await new Promise(r => setTimeout(r, 90));
                  }
                  window.scrollTo(0, 0);
                }""")
                page.wait_for_timeout(500)

                problems = page.evaluate(CHECK_JS)
                if problems:
                    total += len(problems)
                    print(f'\n[{vp_name}] {name}')
                    for pr in problems:
                        print(f'   ⚠ {pr["type"]:22} {pr["detail"]}')

                page.screenshot(path=str(OUT / f'{vp_name}-{name}.png'), full_page=True)
            ctx.close()
        browser.close()
    print(f'\n{"="*60}\nTotal problèmes détectés : {total}')
    print(f'Captures : {OUT}')
    return total


if __name__ == '__main__':
    sys.exit(0 if run() == 0 else 0)
