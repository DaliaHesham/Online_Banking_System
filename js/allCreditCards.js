var yes = document.getElementById('yes-button');
var no = document.getElementById('no-button');
var sure = document.getElementById('sure');
var confirm = document.getElementById('confirm');
var buttons = document.getElementsByClassName('action');
var ok = document.getElementById('ok-button');
var x = document.getElementsByClassName('close-icon');


no.addEventListener('click', function() {
  sure.style.display = 'none'
});

yes.addEventListener('click', function() {
  sure.style.display = 'none'
  confirm.style.display = 'block';
});

for(var i = 0 ; i< buttons.length ; i++){
  buttons[i].addEventListener('click', function() {
    sure.style.display = 'block';
    
});}

ok.addEventListener('click', function() {
  confirm.style.display = 'none';
});


for(var i = 0 ; i< x.length ; i++){
  x[i].addEventListener('click', function() {
    sure.style.display = 'none';
    confirm.style.display = 'none';

});}
