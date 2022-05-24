const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elem = ingredients.map(option => {
  const createLi = document.createElement('li');
  createLi.classList = 'item';
  createLi.textContent = option;
  return createLi;
});

ingredientsList.append(...elem);
