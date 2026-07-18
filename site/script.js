const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  if (contactForm.getAttribute("action") === "#") {
    event.preventDefault();
    alert(
      "送信先が未設定です。Formspree等のフォーム送信サービスに登録し、\n" +
      "index.html内のcontact-formのaction属性を設定してください。\n" +
      "設定するまでは、下部のメールリンクからお問い合わせください。"
    );
  }
});
