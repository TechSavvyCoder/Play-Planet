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