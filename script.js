//Select Filter Buttons & filterable Cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");
console.log(filterButtons,filterableCards);

//FilterCrds Function

const filterCards = e =>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //Iterate over each filterable card
  filterableCards.forEach(card => {
   
    //add Hide class to hide the card initially
    card.classList.add("hide");
    // Check if Card matches the slected filter or "All" is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      card.classList.remove("hide");
    }
  })
 
}
// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));