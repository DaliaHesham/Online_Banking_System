var fixedBox = document.querySelector('#fixed-box');
const elementToAppear = document.getElementsByClassName('list-box');

fixedBox.addEventListener('click', function() {
  if(elementToAppear[1].style.display == "none"){
    for(var i=0 ; i<elementToAppear.length ;i++){
      elementToAppear[i].style.display = 'flex';
    }
  }
  else{
    for(var i=1 ; i<elementToAppear.length ;i++){
      elementToAppear[i].style.display = 'none';
    }
  }
});
                      // balance0      min1        curr2  lim3        penalty4         open5            clos6    rate7
var currentAccount = ["10000 EUR","5000 EUR","EUR","980 EUR","860 EUR","10/December/2001","None","0.9","Active","Current Account"];
var creditAccount = ["12000 USD","620 USD","USD","1230 USD","220 USD","12/October/2008","20/August/2022","1.3","Disabled","Credit Account"];
var debitAccount = ["1830 GBP","360 GBP","GBP","200 GBP","650 GBP","30/Febraury/2005","None","0.8","Inactive","Debit Account"];
var savingstAccount = ["5000 L.E","1000 L.E","EGP","2000 L.E","550 L.E","5/May/2023","None","0.3","Pending","Savings Account"];

var current = document.getElementById('current');
var credit = document.getElementById('credit');
var debit = document.getElementById('debit');
var savings = document.getElementById('savings');

current.addEventListener('click', function() {
  fillAccount(currentAccount);
});
credit.addEventListener('click', function() {
  fillAccount(creditAccount);
});
debit.addEventListener('click', function() {
  fillAccount(debitAccount);
});
savings.addEventListener('click', function() {
  fillAccount(savingstAccount);
});

function fillAccount(array){
  var balance = document.getElementById('balance');
  var min = document.getElementById('minimum-balance');
  var currency = document.getElementById('currency');
  var limit = document.getElementById('limit');
  var penalty = document.getElementById('penalty');
  var opening = document.getElementById('opening');
  var closing = document.getElementById('closing');
  var interest = document.getElementById('interest');
  var state = document.getElementById('state');
  var type = document.getElementById('type');

  balance.innerText = array[0];
  min.innerText = array[1];
  currency.innerText = array[2];
  limit.innerText = array[3];
  penalty.innerText = array[4];
  opening.innerText = array[5];
  closing.innerText = array[6];
  interest.innerText = array[7];
  state.innerText = array[8];
  type.innerText = array[9];
}