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
})();
