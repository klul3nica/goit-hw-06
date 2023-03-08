const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('h1');
  listItem.textContent = ingredient;
  listItem.classList.add(".item");
  return ingredientsArray.push(listItem)
});

ingredientsList.append(...ingredientsArray);
