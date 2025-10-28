const allCategoryElements = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${allCategoryElements.length}`);

allCategoryElements.forEach(categoryElement => {
    const categoryTitle = categoryElement.querySelector('h2').textContent;
    const categoryItems = categoryElement.querySelectorAll('li').length

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems}`);
});