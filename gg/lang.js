const translations = {
  en: {
    title: "Eco Home Products",
    section_title: "Why Choose Eco Products?",
    section_text: "Eco-friendly products reduce environmental impact and create a safer home.",
    products_title: "Our Products",
    product_1: "Bamboo Toothbrushes",
    product_2: "Eco Cleaners",
    product_3: "Reusable Towels",
  },
  uk: {
    title: "Екологічні товари для дому",
    section_title: "Чому обирають еко товари?",
    section_text: "Екологічні товари допомагають зменшити вплив на довкілля та створюють безпечніший дім.",
    products_title: "Наші продукти",
    product_1: "Бамбукові щітки",
    product_2: "Еко миючі засоби",
    product_3: "Багаторазові серветки",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });
}
