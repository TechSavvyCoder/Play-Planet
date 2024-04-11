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