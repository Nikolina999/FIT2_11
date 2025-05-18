# FIT2_11
import streamlit as st

# Заголовок сайту
st.title("Еко Магазин")

# Вибір мови
language = st.selectbox("Виберіть мову:", ["Українська", "English"])

# Переклад тексту
translations = {
    "Українська": {
        "products_title": "Наші товари",
        "product1_name": "Багаторазова соломинка",
        "product1_description": "Екологічна соломинка, яка допоможе зменшити використання пластику.",
        "product2_name": "Бамбукова зубна щітка",
        "product2_description": "Зубна щітка з бамбука, яка є біорозкладною.",
        "product3_name": "Еко пакет",
        "product3_description": "Міцний та багаторазовий пакет для покупок.",
        "admin_title": "Адміністрування",
        "admin_message": "Додайте новий товар:"
    },
    "English": {
        "products_title": "Our Products",
        "product1_name": "Reusable Straw",
        "product1_description": "An eco-friendly straw that helps reduce plastic use.",
        "product2_name": "Bamboo Toothbrush",
        "product2_description": "A biodegradable toothbrush made from bamboo.",
        "product3_name": "Eco Bag",
        "product3_description": "A durable and reusable shopping bag.",
        "admin_title": "Administration",
        "admin_message": "Add a new product:"
    }
}

# Виведення товарів
st.header(translations[language]["products_title"])
products = [
    {
        "name": translations[language]["product1_name"],
        "description": translations[language]["product1_description"]
    },
    {
        "name": translations[language]["product2_name"],
        "description": translations[language]["product2_description"]
    },
    {
        "name": translations[language]["product3_name"],
        "description": translations[language]["product3_description"]
    }
]

for product in products:
    st.subheader(product["name"])
    st.write(product["description"])

# Базове адміністрування
st.header(translations[language]["admin_title"])
new_product_name = st.text_input(translations[language]["admin_message"])
new_product_description = st.text_area("Опис товару:")

if st.button("Додати товар"):
    st.success(f"Товар '{new_product_name}' додано!")
