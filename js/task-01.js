const categories = document.querySelectorAll('.item > h2');
console.log('Number of categories: '+ categories.length);

for (const category of categories) {
    console.log('Category: '+category.textContent);
    
    const itemCount = category.nextElementSibling.childElementCount;
    console.log('Elements: '+itemCount);
};