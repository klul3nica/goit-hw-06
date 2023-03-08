const itemArray = document.querySelectorAll('.item');
console.log(`Number of categories : ${itemArray.length}`);

itemArray.forEach((arrayEl) => {
    console.log('');

    console.log(`Category : ${arrayEl.firstElementChild.textContent}`);
    console.log(`Elements : ${arrayEl.lastElementChild.querySelectorAll("li").length}`);
});