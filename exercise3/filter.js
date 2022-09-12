// Using 'for loop', 'if...else', and 'array' to build a function that can loop, and then combine with the data attribution of HTML to create dynamic information display.

function filterCategory(filterSelection, filterBy){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of recipeCards){
        // console.log(listItem.dataset.author);
        if(listItem.dataset[filterBy] === filterSelection){
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
    }
}

function allCategories(){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of recipeCards){
            listItem.style.display = "flex";
        }
    }