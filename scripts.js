$(document).ready(function() {
  $.getJSON('categories.json', function(data) {
    const categoriesList = $('#categories-list'); // Предполагаем, что в index.html есть элемент с id="categories-list"

    $.each(data, function(i, category) {
      const categoryElement = $('<div><h2>' + category.name + '</h2></div>');

      const subcategoriesList = $('<ul></ul>');
      $.each(category.subcategories, function(j, subcategory) {
        const subcategoryElement = $('<li>' + subcategory.name + '</li>');
        subcategoriesList.append(subcategoryElement);
      });

      categoryElement.append(subcategoriesList);
      categoriesList.append(categoryElement);
    });
  });
});