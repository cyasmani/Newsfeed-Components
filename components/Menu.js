/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

/*<div class="menu">
<ul>
  {each menu item as a list item}
</ul>
</div>*/

const menuMaker = (array) => {
  const divider1 = document.createElement("div");
  const listy = document.createElement("ul");
  //let listyitem = document.createElement("li")
  divider1.classList.add("menu");
  const mainheader = document.querySelector(".header");
  const image1 = document.querySelector(".menu-button");
  mainheader.insertBefore(divider1, image1);
  divider1.appendChild(listy);
  image1.addEventListener("click", (event) => {
    document.querySelector(".menu").classList.toggle("menu--open")
  })
 

  menuItems.forEach(item => {
    let listyitem = document.createElement("li")
    listy.appendChild(listyitem);
    listyitem.textContent = (item)
    console.log(listyitem);
    
  })

  return divider1;

}

console.log(menuMaker(menuItems))

// menuItems.push("Deans Office")
// menuItems.push("Hours")

// console.log(menuMaker(menuItems))




