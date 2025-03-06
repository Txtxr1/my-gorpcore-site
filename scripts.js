const categoriesData = [
  {
    "id": 1,
    "name": "Одежда",
    "slug": "odezhda",
    "subcategories": [
      { "id": 11, "name": "Футболки", "slug": "futbolki" },
      { "id": 12, "name": "Брюки", "slug": "bryuki" }
    ]
  },
  {
    "id": 2,
    "name": "Обувь",
    "slug": "obuv",
    "subcategories": [
      { "id": 21, "name": "Кроссовки", "slug": "krossovki" },
      { "id": 22, "name": "Ботинки", "slug": "botinki" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const categoriesList = document.getElementById('categories-list');

  categoriesData.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.innerHTML = `<h2>${category.name}</h2>`;

    const subcategoriesList = document.createElement('ul');
    subcategoriesList.classList.add('subcategories');

    category.subcategories.forEach(subcategory => {
      const subcategoryElement = document.createElement('li');
      subcategoryElement.classList.add('subcategory');
      subcategoryElement.textContent = subcategory.name;
      subcategoriesList.appendChild(subcategoryElement);
    });

    categoryElement.appendChild(subcategoriesList);
    categoriesList.appendChild(categoryElement);
  });
});
