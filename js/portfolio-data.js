/**
 * Complete portfolio catalog — every unique design image used exactly once.
 */
const PORTFOLIO_DESIGNS = [
  { id: "kk-15", title: "KK-15 Mehrab Arches", series: "kk", category: "architectural", size: "9×12", colors: "58, 30, 12", src: "assets/images/kk-series/kk-15-9x12.jpg", featured: true, desc: "Mughal-style arch panels in chocolate brown and terracotta with border bands." },
  { id: "sample-182b", title: "Sample-182B Abstract Puzzle", series: "sample", category: "contemporary", size: "9×12", colors: "58, 35, 6", src: "assets/images/kk-series/sample-182b-9x12.jpg", featured: true, desc: "Interlocking abstract shapes in beige and charcoal." },
  { id: "kt-4", title: "KT-4 Medallion Field", series: "kt", category: "traditional", size: "10×14", colors: "34, 25, 21, 12, 8", src: "assets/images/kt-series/kt-4-10x14.jpg", featured: true, desc: "Kazak-inspired five-medallion layout with Greek-key borders." },
  { id: "kt-5", title: "KT-5 Circular Medallion", series: "kt", category: "traditional", size: "9×12", colors: "45, 18, 15, 12, 9", src: "assets/images/kt-series/kt-5-9x12.jpg", featured: true, desc: "Three circular medallions with layered geometric borders." },
  { id: "zep-3", title: "Zep-3 Border Panels", series: "zep", category: "tribal", size: "10×14", colors: "84, 16", src: "assets/images/zep-series/zep-3-10x14.jpg", featured: true, desc: "Olive field with stacked white geometric border panels." },
  { id: "tun-2307", title: "TUN-2307 Terracotta", series: "tun", category: "ethnic", size: "9×12", colors: "76, 24", src: "assets/images/tun-series/tun-2307-9x12.jpg", featured: true, desc: "Terracotta field with pale pink Kilim-inspired borders." },
  { id: "sample-119", title: "Sample-119 Vertical Bars", series: "sample", category: "contemporary", size: "8×10", colors: "57, 43", src: "assets/images/kk-series/sample-119-8x10.jpg", desc: "Minimalist vertical bars with central ladder motif." },
  { id: "sample-140", title: "Sample-140 Brick Weave", series: "sample", category: "contemporary", size: "8×10", colors: "51, 49", src: "assets/images/kk-series/sample-140-8x10.jpg", desc: "Staggered brick layout with diagonal twill texture." },
  { id: "sample-168d", title: "Sample-168D Dash & Wave", series: "sample", category: "contemporary", size: "8×10", colors: "—", src: "assets/images/kk-series/sample-168d-8x10.jpg", desc: "Vertical dashes with wavy bands on sage green." },
  { id: "sample-179", title: "Sample-179 Geometric Clusters", series: "sample", category: "contemporary", size: "8×10", colors: "93, 7", src: "assets/images/kk-series/sample-179-8x10.jpg", desc: "Floating rectangular clusters on warm taupe." },
  { id: "sample-180c", title: "Sample-180C Minimal Grid", series: "sample", category: "contemporary", size: "8×10", colors: "93, 7", src: "assets/images/kk-series/sample-180c-8x10.jpg", desc: "Clean intersecting lines on mushroom-beige ground." },
  { id: "zep-29", title: "Zep-29 Diamond Stripe", series: "zep", category: "tribal", size: "8×10", colors: "57, 43", src: "assets/images/zep-series/zep-29-8x10.jpg", desc: "Diamond and chevron vertical stripes in tan on white." },
  { id: "zep-31", title: "Zep-31 Nordic Grid", series: "zep", category: "tribal", size: "8×10", colors: "74, 26", src: "assets/images/zep-series/zep-31-8x10.jpg", desc: "Diamond lattice with folk tree motifs on dusty blue." },
  { id: "zep-4", title: "Zep-4 Earth Tribal", series: "zep", category: "tribal", size: "9.9×13", colors: "54, 43", src: "assets/images/zep-series/zep-4-9x13.jpg", desc: "Earth-tone tribal horizontal bands in chocolate and tan." },
  { id: "zep-32", title: "Zep-32 Monochrome Ethnic", series: "zep", category: "tribal", size: "9×12", colors: "62, 38", src: "assets/images/zep-series/zep-32-9x12.jpg", desc: "Charcoal and white symmetric ethnic panel layout." },
  { id: "zep-30", title: "ZEP-30 Blue Geometric", series: "zep", category: "tribal", size: "8×10", colors: "63, 36", src: "assets/images/zep-series/zep-30-8x10.jpg", desc: "Light blue field with cream Southwestern borders." },
  { id: "zep-34", title: "Zep-34 Rust Stripe", series: "zep", category: "tribal", size: "8×10", colors: "57, 43", src: "assets/images/zep-series/zep-34-8x10.jpg", desc: "Mudcloth-inspired vertical stripe in terracotta and cream." },
  { id: "zep-sample-2", title: "Zep Sample-2 Monochrome", series: "zep", category: "tribal", size: "8×10", colors: "53, 47", src: "assets/images/zep-series/zep-sample-2-8x10.jpg", desc: "High-contrast grayscale vertical band pattern." },
  { id: "persian-classical", title: "Classical Persian Arabesque", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-classical-03.jpg", desc: "Scrolling vines and palmettes with teal accents." },
  { id: "persian-pixel", title: "Digital Heritage I", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-pixel-heritage-01.jpg", desc: "Traditional arabesque with pixelated field texture." },
  { id: "persian-arabesque", title: "Arabesque with Teal", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-arabesque-02.jpg", desc: "Cream and tan with vibrant teal ribbon motifs." },
  { id: "persian-teal", title: "Teal Foliate", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-teal-foliate-04.jpg", desc: "Cool teal, navy, and mint foliate composition." },
  { id: "persian-traditional", title: "Traditional Persian", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-traditional-05.jpg", desc: "Muted blue-grey field with olive borders." },
  { id: "persian-green", title: "Green Digital Heritage", series: "persian", category: "heritage", size: "—", colors: "Multi", src: "assets/images/persian-collection/persian-green-glitch-06.jpg", desc: "Monochromatic green with digital field texture." },
  { id: "digital-glitch", title: "Experimental Glitch Study", series: "experimental", category: "experimental", size: "—", colors: "Multi", src: "assets/images/experimental/digital-glitch-study.jpg", desc: "Abstract pixel-art exploration in pink, purple, and teal." }
];

const SERIES_LABELS = {
  all: "All Designs",
  kt: "KT Series",
  zep: "ZEP Series",
  tun: "TUN Series",
  kk: "KK Series",
  sample: "Sample Series",
  persian: "Persian & Heritage",
  experimental: "Experimental"
};
