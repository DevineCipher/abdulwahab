(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "ar") apply(saved);

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.lang === "ar" ? "en" : "ar";
      apply(next);
      localStorage.setItem("lang", next);
    });
  });

  var menu = document.querySelector("[data-menu]");
  var links = document.querySelector("[data-links]");
  if (menu && links) {
    menu.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var form = document.querySelector("[data-wa]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var text = [
        "الاسم: " + (data.get("name") || ""),
        "الجوال: " + (data.get("phone") || ""),
        "الرسالة: " + (data.get("message") || "")
      ].join("\n");
      window.open("https://wa.me/966563779550?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  }

  function apply(lang) {
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.textContent = lang === "ar" ? "EN" : "ع";
    });
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var layer = document.createElement("div");
    layer.className = "petals";
    layer.setAttribute("aria-hidden", "true");
    var colors = ["#c4a574", "#d7b48a", "#e7d3c4", "#8ea37a", "#f3efe6"];
    for (var i = 0; i < 16; i++) {
      var petal = document.createElement("span");
      petal.className = "petal";
      var size = 14 + (i % 5) * 4;
      petal.style.setProperty("--x", (i * 6.2 + 3) + "%");
      petal.style.setProperty("--s", size + "px");
      petal.style.setProperty("--dur", (11 + (i % 7)) + "s");
      petal.style.setProperty("--delay", (-i * 0.8) + "s");
      petal.style.setProperty("--drift", ((i % 2 ? 1 : -1) * (24 + i * 3)) + "px");
      petal.style.setProperty("--spin", (i % 2 ? 280 : -240) + "deg");
      var fill = colors[i % colors.length];
      petal.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="' + fill + '" d="M16 2c2 6 6 9 12 10-6 2-9 6-10 12-2-6-6-9-12-10 6-2 9-6 10-12z"/></svg>';
      layer.appendChild(petal);
    }
    document.body.appendChild(layer);
  }
})();
