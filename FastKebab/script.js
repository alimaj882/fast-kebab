const WHATSAPP_NUMBER = "37378102090";

let language = "ro";
let selectedCategory = null;
let cart = [];

const categories = [
  { id: "kebab", ro: "KEBAB", ru: "КЕБАБ", image: 37 },
  { id: "shawerma", ro: "SHAWERMA", ru: "ШАУРМА", image: 32 },
  { id: "pita", ro: "PITA", ru: "ПИТА", image: 53 },
  { id: "burger", ro: "BURGER", ru: "БУРГЕРЫ", image: 50 },
  { id: "baggett", ro: "BAGGETT", ru: "БАГЕТТЫ", image: 46 },
  { id: "snacks", ro: "GUSTĂRI", ru: "ЗАКУСКИ", image: 44 },
  { id: "menus", ro: "MENIURI", ru: "КОМБО", image: 20 },
  { id: "dessert", ro: "DESERT", ru: "ДЕСЕРТЫ", image: 43 },
  { id: "extras", ro: "ADAOSURI", ru: "ДОБАВКИ", image: 26 }
];

const addons = [
  { ro: "Carne de pui", ru: "Куриное мясо", price: 20 },
  { ro: "Carne de vită", ru: "Говядина", price: 30 },
  { ro: "Cașcaval", ru: "Сыр", price: 20 },
  { ro: "Lavaș", ru: "Лаваш", price: 10 },
  { ro: "Ciuperci", ru: "Грибы", price: 20 },
  { ro: "Măsline", ru: "Оливки", price: 20 },
  { ro: "Sos", ru: "Соус", price: 15 }
];

// В image указаны только фотографии из твоего списка.
// Если image отсутствует, у блюда не будет фотографии.

const products = [
  // KEBAB
  { id: 1, category: "kebab", ro: "Kebab Standart pui", ru: "Кебаб стандарт с курицей", price: 70, image: 16 },
  { id: 2, category: "kebab", ro: "Kebab Mare pui", ru: "Большой кебаб с курицей", price: 80, image: 3 },
  { id: 3, category: "kebab", ro: "New Kebab", ru: "Новый кебаб", price: 90 },
  { id: 4, category: "kebab", ro: "Mexicano Kebab", ru: "Мексиканский кебаб", price: 90, image: 51 },
  { id: 5, category: "kebab", ro: "Crispy Kebab", ru: "Кебаб Криспи", price: 90, image: 37 },
  { id: 6, category: "kebab", ro: "Nuggets Kebab", ru: "Кебаб с наггетсами", price: 90 },
  { id: 7, category: "kebab", ro: "Kebab Standart vită", ru: "Кебаб стандарт с говядиной", price: 75, image: 17 },
  { id: 8, category: "kebab", ro: "Kebab Mare vită", ru: "Большой кебаб с говядиной", price: 100, image: 56 },
  { id: 9, category: "kebab", ro: "Kebab fără carne", ru: "Кебаб без мяса", price: 60 },
  { id: 10, category: "kebab", ro: "Vegetarian Kebab", ru: "Вегетарианский кебаб", price: 80, image: 57 },

  // SHAWERMA
  { id: 11, category: "shawerma", ro: "Shawerma Standart pui", ru: "Шаурма стандарт с курицей", price: 75, image: 32 },
  { id: 12, category: "shawerma", ro: "Shawerma Mare pui", ru: "Большая шаурма с курицей", price: 100 },

  // PITA
  { id: 13, category: "pita", ro: "Pita pui", ru: "Пита с курицей", price: 70, image: 53 },
  { id: 14, category: "pita", ro: "Pita vită", ru: "Пита с говядиной", price: 80 },
  { id: 15, category: "pita", ro: "Pita crispy", ru: "Пита Криспи", price: 80, image: 54 },

  // BURGER
  { id: 16, category: "burger", ro: "Burger pui", ru: "Бургер с курицей", price: 80, image: 49 },
  { id: 17, category: "burger", ro: "Burger crispy", ru: "Бургер Криспи", price: 90, image: 48 },
  { id: 18, category: "burger", ro: "Burger vită", ru: "Бургер с говядиной", price: 85, image: 50 },
  { id: 19, category: "burger", ro: "Big Burger vită", ru: "Большой бургер с говядиной", price: 130, image: 27 },

  // BAGGETT
  { id: 20, category: "baggett", ro: "Baggett pui", ru: "Багет с курицей", price: 100, image: 46 },
  { id: 21, category: "baggett", ro: "Baggett vită", ru: "Багет с говядиной", price: 120, image: 47 },
  { id: 22, category: "baggett", ro: "Baggett crispy / nuggets", ru: "Багет Криспи / наггетсы", price: 120, image: 45 },

  // GUSTĂRI
  { id: 23, category: "snacks", ro: "Nuggets", ru: "Наггетсы", price: 85, image: 44 },
  { id: 24, category: "snacks", ro: "Crispy", ru: "Криспи", price: 85, image: 41 },
  { id: 25, category: "snacks", ro: "Cartofi pai 200 g", ru: "Картофель фри 200 г", price: 80, image: 52 },

  // MENIURI
  { id: 26, category: "menus", ro: "Menu Kebab Standart pui", ru: "Комбо: кебаб стандарт с курицей", price: 120 },
  { id: 27, category: "menus", ro: "Menu Kebab Mare pui", ru: "Комбо: большой кебаб с курицей", price: 130, image: 23 },
  { id: 28, category: "menus", ro: "Menu Shawerma Standart pui", ru: "Комбо: шаурма стандарт с курицей", price: 125 },
  { id: 29, category: "menus", ro: "Menu Shawerma Mare pui", ru: "Комбо: большая шаурма с курицей", price: 150 },
  { id: 30, category: "menus", ro: "Menu Kebab Standart vită", ru: "Комбо: кебаб стандарт с говядиной", price: 130, image: 1 },
  { id: 31, category: "menus", ro: "Menu Kebab Mare vită", ru: "Комбо: большой кебаб с говядиной", price: 160, image: 24 },
  { id: 32, category: "menus", ro: "Menu Kebab crispy / nuggets", ru: "Комбо: кебаб Криспи / наггетсы", price: 140, image: 9 },
  { id: 33, category: "menus", ro: "Menu Picant Mexicano / New Kebab", ru: "Комбо: острый Мексикано / Новый кебаб", price: 140 },
  { id: 34, category: "menus", ro: "Menu Fast Kebab", ru: "Комбо Fast Kebab", price: 250, image: 20 },
  { id: 35, category: "menus", ro: "Menu Pita pui", ru: "Комбо: пита с курицей", price: 120, image: 6 },
  { id: 36, category: "menus", ro: "Menu Pita vită / crispy", ru: "Комбо: пита с говядиной / Криспи", price: 130 },
  { id: 37, category: "menus", ro: "Menu Crispy", ru: "Комбо Криспи", price: 130, image: 22 },
  { id: 38, category: "menus", ro: "Menu Nuggets", ru: "Комбо Наггетсы", price: 130, image: 8 },
  { id: 39, category: "menus", ro: "Menu Burger pui", ru: "Комбо: бургер с курицей", price: 130 },
  { id: 40, category: "menus", ro: "Menu Burger vită / crispy", ru: "Комбо: бургер с говядиной / Криспи", price: 140, image: 18 },
  { id: 41, category: "menus", ro: "Menu Baggett pui", ru: "Комбо: багет с курицей", price: 150, image: 5 },
  { id: 42, category: "menus", ro: "Menu Baggett vită / crispy", ru: "Комбо: багет с говядиной / Криспи", price: 170, image: 10 },

  // DESERT
  { id: 43, category: "dessert", ro: "Baklava 100 g", ru: "Пахлава 100 г", price: 60, image: 43 },

  // ADAOSURI
  { id: 44, category: "extras", ro: "Carne de pui", ru: "Куриное мясо", price: 20 },
  { id: 45, category: "extras", ro: "Carne de vită", ru: "Говядина", price: 30, image: 34 },
  { id: 46, category: "extras", ro: "Cașcaval", ru: "Сыр", price: 20, image: 26 },
  { id: 47, category: "extras", ro: "Lavaș", ru: "Лаваш", price: 10, image: 15 },
  { id: 48, category: "extras", ro: "Ciuperci", ru: "Грибы", price: 20 },
  { id: 49, category: "extras", ro: "Măsline", ru: "Оливки", price: 20 },
  { id: 50, category: "extras", ro: "Sos", ru: "Соус", price: 15, image: 55 }
];

const $ = id => document.getElementById(id);

function tr(item) {
  return language === "ro" ? item.ro : item.ru;
}

/* LANGUAGE */

function setLanguage(newLanguage) {
  language = newLanguage;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-ro][data-ru]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  $("languageButton").textContent = language === "ro" ? "RU" : "RO";

  if (selectedCategory) {
    renderProducts();
  } else {
    renderCategories();
  }

  renderCart();
}

$("languageButton").addEventListener("click", () => {
  setLanguage(language === "ro" ? "ru" : "ro");
});

/* CATEGORY VIEW */

function renderCategories() {
  const container = $("categoriesContainer");
  container.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-card";
    button.type = "button";

    const image = document.createElement("img");
    image.src = `images/${category.image}.jpg`;
    image.alt = tr(category);
    image.loading = "lazy";

    const shade = document.createElement("span");
    shade.className = "category-shade";

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = tr(category);

    button.append(image, shade, name);

    button.addEventListener("click", () => {
      selectedCategory = category.id;
      $("categoriesView").classList.add("hidden");
      $("productsView").classList.remove("hidden");
      renderProducts();

      $("menu").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    container.appendChild(button);
  });
}

/* PRODUCTS INSIDE SELECTED CATEGORY */

function renderProducts() {
  const container = $("productsContainer");
  container.innerHTML = "";

  const category = categories.find(item => item.id === selectedCategory);
  if (!category) return;

  $("categoryTitle").textContent = tr(category);

  const categoryProducts = products.filter(
    product => product.category === selectedCategory
  );

  categoryProducts.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    if (product.image) {
      const image = document.createElement("img");
      image.className = "product-image";
      image.src = `images/${product.image}.jpg`;
      image.alt = tr(product);
      image.loading = "lazy";
      card.appendChild(image);
    }

    const info = document.createElement("div");
    info.className = "product-info";

    const name = document.createElement("h3");
    name.textContent = tr(product);

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `${product.price} MDL`;

    info.append(name, price);

    if (selectedCategory !== "extras") {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "addons-toggle";
      toggle.textContent = language === "ro"
        ? "Adaugă extra +"
        : "Добавить добавки +";

      const panel = document.createElement("div");
      panel.className = "addons-panel hidden";

      const title = document.createElement("h4");
      title.textContent = language === "ro"
        ? "Alege cantitatea pentru fiecare adaos"
        : "Укажи количество каждой добавки";

      panel.appendChild(title);

      addons.forEach((addon, index) => {
        const row = document.createElement("div");
        row.className = "addon-row";

        const label = document.createElement("span");
        label.textContent = tr(addon);

        const addonPrice = document.createElement("span");
        addonPrice.className = "addon-price";
        addonPrice.textContent = `+${addon.price} MDL`;

        const quantity = document.createElement("input");
        quantity.type = "number";
        quantity.min = "0";
        quantity.max = "999";
        quantity.step = "1";
        quantity.value = "0";
        quantity.dataset.addonIndex = index;
        quantity.setAttribute("aria-label", tr(addon));

        row.append(label, addonPrice, quantity);
        panel.appendChild(row);
      });

      toggle.addEventListener("click", () => {
        panel.classList.toggle("hidden");

        toggle.textContent = panel.classList.contains("hidden")
          ? (language === "ro" ? "Adaugă extra +" : "Добавить добавки +")
          : (language === "ro" ? "Ascunde adaosurile −" : "Скрыть добавки −");
      });

      info.append(toggle, panel);
    }

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-to-cart";
    addButton.textContent = language === "ro"
      ? "Adaugă în coș"
      : "Добавить в корзину";

    addButton.addEventListener("click", () => {
      addToCart(product, info);
    });

    info.appendChild(addButton);
    card.appendChild(info);
    container.appendChild(card);
  });
}

/* BACK TO CATEGORIES */

$("backButton").addEventListener("click", () => {
  selectedCategory = null;
  $("productsView").classList.add("hidden");
  $("categoriesView").classList.remove("hidden");

  $("menu").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* CART LOGIC */

function addToCart(product, productInfo) {
  const selectedAddons = [];

  productInfo.querySelectorAll("[data-addon-index]").forEach(input => {
    const amount = Math.max(
      0,
      Math.min(999, parseInt(input.value, 10) || 0)
    );

    if (amount > 0) {
      const addon = addons[Number(input.dataset.addonIndex)];

      selectedAddons.push({
        ro: addon.ro,
        ru: addon.ru,
        price: addon.price,
        quantity: amount
      });
    }
  });

  const addonKey = selectedAddons
    .map(addon => `${addon.ro}:${addon.quantity}`)
    .join("|");

  const key = `${product.id}-${addonKey}`;
  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      ro: product.ro,
      ru: product.ru,
      price: product.price,
      quantity: 1,
      addons: selectedAddons
    });
  }

  productInfo.querySelectorAll("[data-addon-index]").forEach(input => {
    input.value = "0";
  });

  renderCart();
}

function getItemPrice(item) {
  const extrasPrice = item.addons.reduce((sum, addon) => {
    return sum + addon.price * addon.quantity;
  }, 0);

  return item.price + extrasPrice;
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    return sum + getItemPrice(item) * item.quantity;
  }, 0);
}

function renderCart() {
  const container = $("cartItems");
  container.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = language === "ro"
      ? "Coșul este gol."
      : "Корзина пустая.";

    container.appendChild(empty);
  }

  cart.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "cart-item";

    const top = document.createElement("div");
    top.className = "cart-item-top";

    const name = document.createElement("span");
    name.textContent = tr(item);

    const price = document.createElement("span");
    price.textContent = `${getItemPrice(item) * item.quantity} MDL`;

    top.append(name, price);
    wrapper.appendChild(top);

    if (item.addons.length > 0) {
      const details = document.createElement("div");
      details.className = "cart-item-details";
      details.textContent = item.addons.map(addon => {
        return `${language === "ro" ? addon.ro : addon.ru} × ${addon.quantity}`;
      }).join(", ");

      wrapper.appendChild(details);
    }

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.addEventListener("click", () => changeQuantity(item.key, -1));

    const amount = document.createElement("span");
    amount.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.addEventListener("click", () => changeQuantity(item.key, 1));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = language === "ro" ? "Șterge" : "Удалить";
    remove.addEventListener("click", () => removeItem(item.key));

    controls.append(minus, amount, plus, remove);
    wrapper.appendChild(controls);
    container.appendChild(wrapper);
  });

  $("cartTotal").textContent = `${getCartTotal()} MDL`;

  $("cartCount").textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

function changeQuantity(key, change) {
  const item = cart.find(item => item.key === key);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.key !== key);
  }

  renderCart();
}

function removeItem(key) {
  cart = cart.filter(item => item.key !== key);
  renderCart();
}

/* OPEN / CLOSE CART */

function openCart() {
  $("cartPanel").classList.add("active");
  $("cartOverlay").classList.add("active");
}

function closeCart() {
  $("cartPanel").classList.remove("active");
  $("cartOverlay").classList.remove("active");
}

$("cartButton").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartOverlay").addEventListener("click", closeCart);

/* DELIVERY / PICKUP */

function updateDeliveryChoice() {
  const selected = document.querySelector(
    'input[name="deliveryType"]:checked'
  );

  const isDelivery = selected && selected.value === "delivery";

  $("addressField").classList.toggle("hidden", !isDelivery);
  $("customerAddress").required = Boolean(isDelivery);
}

document.querySelectorAll('input[name="deliveryType"]').forEach(input => {
  input.addEventListener("change", updateDeliveryChoice);
});

/* WHATSAPP ORDER */

$("orderForm").addEventListener("submit", event => {
  event.preventDefault();

  if (cart.length === 0) {
    alert(language === "ro" ? "Coșul este gol!" : "Корзина пустая!");
    return;
  }

  const name = $("customerName").value.trim();
  const phone = $("customerPhone").value.trim();
  const comment = $("customerComment").value.trim();

  const delivery = document.querySelector(
    'input[name="deliveryType"]:checked'
  ).value;

  const address = $("customerAddress").value.trim();

  if (!name || !phone) {
    alert(language === "ro"
      ? "Completează numele și telefonul."
      : "Укажи имя и номер телефона.");
    return;
  }

  if (delivery === "delivery" && !address) {
    alert(language === "ro"
      ? "Introdu adresa de livrare."
      : "Укажи адрес доставки.");
    return;
  }

  let message = "FAST KEBAB\n";
  message += "----------------------\n";
  message += `${language === "ro" ? "Comandă nouă" : "Новый заказ"}\n\n`;

  cart.forEach(item => {
    message += `${tr(item)} × ${item.quantity}\n`;

    item.addons.forEach(addon => {
      message += `  + ${language === "ro" ? addon.ro : addon.ru} × ${addon.quantity}\n`;
    });

    message += `  ${getItemPrice(item) * item.quantity} MDL\n\n`;
  });

  message += "----------------------\n";
  message += `${language === "ro" ? "Total" : "Итого"}: ${getCartTotal()} MDL\n\n`;
  message += `${language === "ro" ? "Nume" : "Имя"}: ${name}\n`;
  message += `${language === "ro" ? "Telefon" : "Телефон"}: ${phone}\n`;

  if (delivery === "delivery") {
    message += `${language === "ro" ? "Livrare" : "Доставка"}\n`;
    message += `${language === "ro" ? "Adresa" : "Адрес"}: ${address}\n`;
  } else {
    message += `${language === "ro" ? "Ridicare personală" : "Самовывоз"}\n`;
  }

  if (comment) {
    message += `${language === "ro" ? "Comentariu" : "Комментарий"}: ${comment}\n`;
  }

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

/* START */

renderCategories();
renderCart();
updateDeliveryChoice();