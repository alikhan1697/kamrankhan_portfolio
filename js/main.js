(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxMeta = document.getElementById("lightbox-meta");
  const lightboxClose = document.querySelector(".lightbox__close");
  const filterBar = document.getElementById("filter-bar");
  const catalogGrid = document.getElementById("catalog-grid");
  const featuredGrid = document.getElementById("featured-grid");
  const heroStrip = document.getElementById("hero-strip");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildSpecimenCard(design, index) {
    const seriesLabel = SERIES_LABELS[design.series] || design.series.toUpperCase();
    return `
      <article class="specimen" data-series="${design.series}" data-index="${index}" tabindex="0" role="button" aria-label="View ${escapeHtml(design.title)}">
        <div class="specimen__frame">
          <div class="specimen__mat">
            <img src="${design.src}" alt="${escapeHtml(design.title)}" loading="lazy" />
          </div>
          <div class="specimen__label">
            <span class="specimen__code">${escapeHtml(design.title.split(" ")[0])}</span>
            <span class="specimen__size">${escapeHtml(design.size)}</span>
          </div>
        </div>
        <div class="specimen__info">
          <p class="specimen__series">${escapeHtml(seriesLabel)}</p>
          <h3 class="specimen__title">${escapeHtml(design.title)}</h3>
          <p class="specimen__desc">${escapeHtml(design.desc)}</p>
          <div class="specimen__tags">
            ${design.size !== "—" ? `<span class="specimen__tag">${escapeHtml(design.size)}</span>` : ""}
            ${design.colors !== "—" && design.colors !== "Multi" ? `<span class="specimen__tag">Colors ${escapeHtml(design.colors)}</span>` : ""}
            ${design.colors === "Multi" ? `<span class="specimen__tag">Multi-color</span>` : ""}
          </div>
        </div>
      </article>
    `;
  }

  function buildFeaturedCard(design) {
    return `
      <article class="featured-card" data-src="${design.src}" data-title="${escapeHtml(design.title)}" data-meta="${escapeHtml(design.size + " · " + design.colors)}">
        <div class="featured-card__visual">
          <div class="specimen__mat specimen__mat--large">
            <img src="${design.src}" alt="${escapeHtml(design.title)}" loading="lazy" />
          </div>
        </div>
        <div class="featured-card__body">
          <p class="featured-card__series">${escapeHtml(SERIES_LABELS[design.series])}</p>
          <h3>${escapeHtml(design.title)}</h3>
          <p>${escapeHtml(design.desc)}</p>
          <div class="specimen__tags">
            <span class="specimen__tag">${escapeHtml(design.size)}</span>
            <span class="specimen__tag">Colors ${escapeHtml(design.colors)}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderPortfolio() {
    if (!catalogGrid || typeof PORTFOLIO_DESIGNS === "undefined") return;

    const featured = PORTFOLIO_DESIGNS.filter((d) => d.featured);
    if (featuredGrid) {
      featuredGrid.innerHTML = featured.map(buildFeaturedCard).join("");
    }

    if (heroStrip) {
      heroStrip.innerHTML = PORTFOLIO_DESIGNS.map(
        (d) => `<div class="hero-strip__item"><img src="${d.src}" alt="" loading="lazy" /></div>`
      ).join("");
    }

    catalogGrid.innerHTML = PORTFOLIO_DESIGNS.map(buildSpecimenCard).join("");

    if (filterBar) {
      const series = ["all", ...new Set(PORTFOLIO_DESIGNS.map((d) => d.series))];
      filterBar.innerHTML = series
        .map(
          (s, i) =>
            `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${s}">${SERIES_LABELS[s] || s}</button>`
        )
        .join("");
    }
  }

  function openLightbox(src, title, meta) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxMeta.textContent = meta || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function bindEvents() {
    window.addEventListener("scroll", () => {
      nav?.classList.toggle("nav--scrolled", window.scrollY > 40);
    });

    toggle?.addEventListener("click", () => {
      menu?.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu?.classList.contains("open").toString());
    });

    menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu?.classList.remove("open"));
    });

    filterBar?.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      const filter = btn.dataset.filter;
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      catalogGrid?.querySelectorAll(".specimen").forEach((card) => {
        const show = filter === "all" || card.dataset.series === filter;
        card.style.display = show ? "" : "none";
      });
    });

    catalogGrid?.addEventListener("click", (e) => {
      const card = e.target.closest(".specimen");
      if (!card) return;
      const index = card.dataset.index;
      const design = PORTFOLIO_DESIGNS[index];
      if (design) openLightbox(design.src, design.title, `${design.size} · Colors ${design.colors}`);
    });

    catalogGrid?.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".specimen");
      if (!card) return;
      e.preventDefault();
      card.click();
    });

    featuredGrid?.addEventListener("click", (e) => {
      const card = e.target.closest(".featured-card");
      if (!card) return;
      openLightbox(card.dataset.src, card.dataset.title, card.dataset.meta);
    });

    lightboxClose?.addEventListener("click", closeLightbox);
    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  renderPortfolio();
  bindEvents();
})();
