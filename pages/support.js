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