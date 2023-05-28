var inputBox = document.getElementById('inputEmail');
var signInBtn = document.getElementById('logIn');

signInBtn.addEventListener('click', function() {
  var inputValue = inputBox.value;
  if (inputValue === 'admin') {
    window.location.href = './html/technical-reports.html'; 
  } else if(inputValue === 'banker'){
    window.location.href = './html/home-banker.html'; 
  } else{
    window.location.href = './html/home.html'; 

  }
});
