// Responsive Menu
var toggle = document.getElementById("menu-toggle");
toggle.addEventListener("touchstart", accordionMenu, false);

function accordionMenu() {
    var menu = document.getElementById("toggled");
      var menuStyle = window.getComputedStyle(menu);
      var display = menuStyle.getPropertyValue('display');
    
    if (display === 'none') {
      toggle.style.backgroundColor = "transparent";
      toggle.style.color = "rgb(0, 116, 228)";
      menu.style.display = "block";
    } else {
      toggle.style.backgroundColor = "transparent";
      toggle.style.color = "white";
      menu.style.display = "none";
    };
};

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function showModal(){
    modal.classList.add("show");
}
span.onclick = function() {
  modal.classList.remove("show");
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
}

$('.form-input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('.form-input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const queryString = window.location.search;

if(queryString){
  document.getElementById("submittedForm").style.display = "block";
  document.getElementById("contactForm").style.display = "none";
} else {
  document.getElementById("submittedForm").style.display = "none";
  document.getElementById("contactForm").style.display = "block";
}

const urlParams = new URLSearchParams(queryString);

const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const emailAddress = urlParams.get('emailAddress');
const phoneNumber = urlParams.get('phoneNumber');
const message = urlParams.get('message');
const inquiry = urlParams.get('inquiry');

document.getElementById("displayFullName").innerHTML = firstName + " " + lastName;
document.getElementById("displayEmail").innerHTML = emailAddress;
document.getElementById("displayPhoneNumber").innerHTML = phoneNumber;
document.getElementById("displayMessage").innerHTML = message;
document.getElementById("displayInquiry").innerHTML = inquiry;