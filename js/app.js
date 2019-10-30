
'use strict';

var userName;
var allUsers =[];
function Leader(name, scoreForHtml, scoreForCss , scoreForJs , TotalAllScore) {
    this.name = name;
    this.scoreForHtml = scoreForHtml;
    this.scoreForCss = scoreForCss;
    this.scoreForJs = scoreForJs; 
    this.TotalAllScore = TotalAllScore;   
   };


var userInput = document.getElementById('userName');
 userInput.addEventListener('click', usersName );

function usersName(e) {
    e.preventDefault();

    showUserName()
}


function showUserName() {
    var inputDiv = document.getElementById('input-name');
    userName = document.getElementById('name').value;

    

  
    if(isNaN(userName)){
      var welcomeDiv = document.getElementById('welcome-message');
      var exsamDiv = document.getElementById('exams');
      welcomeDiv.textContent = 'Welcome ' + userName + ', Wish you best of luck in your test.';
      welcomeDiv.setAttribute('style','display:block');
      inputDiv.setAttribute('style','display:none');
      exsamDiv.setAttribute('style','display:block');
      newObject(userName);
      localStorage.setItem('userScore',JSON.stringify(allUsers));
    }else{
     
      var warning = document.getElementById('warning-message');
      warning.setAttribute('style', 'display:block');
    }

  }


function newObject(name) {
    var user = new Leader(name);
    var users = localStorage.getItem('userScore');
    if(users){
        allUsers = JSON.parse(users); 
    }
    allUsers.push(user);
       
}
































// 'use strict';

// // user constructor.
// var Cart = function(user) {
//   // this.items is an array of user.
//   this.user = user;
// };

// // CartItem contructor.
// var CartItem = function(product, quantity) {
//   this.product = product;
//   this.quantity = quantity;
// };

// // Product contructor.
// var Product = function(filePath, name) {
//   this.filePath = filePath;
//   this.name = name;
//   Product.allProducts.push(this);
// };
// Product.allProducts = [];

// Cart.prototype.addItem = function(product, quantity) {
//   var newCartItemInstance = new CartItem(product, quantity);
//   this.user.push(newCartItemInstance);
// };

// Cart.prototype.saveToLocalStorage = function() {
//   var itemString = JSON.stringify(this.items);
//   localStorage.setItem('cart', itemString);
// };

// Cart.prototype.removeItem = function(item) {
//   this.item.splice(item, 1);
// };

// function handleSubmit(event) {
//   event.preventDefault();
//   addSelectedItemToCart();
//   cart.saveToLocalStorage();
//   showUserName();
// }

// function showUserName() {
//   var selectedItemName = document.getElementById('items').value;
//   var divOfSelectedItems = document.getElementById('cartContents');
//   divOfSelectedItems.textContent = 'Welcome ' + selectedItemName + ', Wish you best of luck in your test.' + '<br>';
//   divOfSelectedItems.setAttribute('style','display:block');
// }

// var userName = document.getElementById('userNameForm');
// userForm.addEventListener('submit', handleOk);

// function addSelectedItemToCart() {
//   var selectedItemName = document.getElementById('items').value;
//   var quantityValue = document.getElementById('quantity').value;
//   // TODO: using those, add one item to the Cart
//   // Done
//   cart.addItem(selectedItemName, quantityValue);
//   // var newItem = new Cart(selectedItemName, quantityValue);
//   // cart.items.push(newItem);
// }

// function generateCatalog() {
//   new Product('assets/bag.jpg', 'Bag');
// }

// // Initialize the app by creating the big list of products with images and names
// generateCatalog();