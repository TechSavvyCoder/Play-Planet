// Preloader
$(function() {
    setInterval(preloader, 2000);
    function preloader(){
        $("#preloader").fadeOut(1000);
    };
});

// Sound
if(window.innerWidth > 1024){
    document.body.setAttribute("onload", "playAudio('play')")
    
    let soundPlayer = document.getElementById("soundPlayer");
    let playSound = document.getElementById("playSound");
    let pauseSound = document.getElementById("pauseSound");
    let stopSound = document.getElementById("stopSound");

    // Play sound on page load
    playSound.style.display = "none";
    pauseSound.style.display = "inline-block";
    stopSound.style.display = "inline-block";

    playSound.addEventListener('click', function(){
        playSound.style.display = "none";
        pauseSound.style.display = "inline-block";
        stopSound.style.display = "inline-block";
        playAudio("play");
    });

    pauseSound.addEventListener('click', function(){
        playSound.style.display = "inline-block";
        pauseSound.style.display = "none";
        stopSound.style.display = "inline-block";
        playAudio("pause");
    });

    stopSound.addEventListener('click', function(){
        playSound.style.display = "inline-block";
        pauseSound.style.display = "none";
        stopSound.style.display = "none";
        playAudio("stop");
    });

    function playAudio(operation){
        if(operation == "play"){
            soundPlayer.play();
        } else if(operation == "pause") {
            soundPlayer.pause();
        } else if(operation == "stop"){
            soundPlayer.pause();
            soundPlayer.currentTime = 0;
        }
    }
}

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






// Banner
let img_index = 0;
let bannerGameTitle = [
    "Horizon Forbidden West™ Complete Edition",
    "Marvel Rivals",
    "Suicide Squad: Kill the Justice League",
    "Wuthering Waves",
    "VALORANT"
];
let bannerGames = [
    ["images/games/banner/egs-horizon-forbidden-west-carousel-desktop-1920x1080-358478b6468a.avif", "Experience the epic Horizon Forbidden West™ in its entirety with bonus content and the Burning Shores expansion.", "#fff"],
    ["images/games/banner/egs-marvel-rivals-carousel-deskto-1920x1080-c89aa53338e6.avif", "Marvel Rivals is a Super Hero Team-Based PVP Shooter! Let's ignite the battle!", "#fff"],
    ["images/games/banner/egs-suicide-squad-ktjl-carousel-desktop-2560x1440-ff6f863521ef.avif", "The genre-drying third-person action shooter where the ultimate band of misfits must do the impossible: Kill the Justice League.", "#fff"],
    ["images/games/banner/egs-wuthering-waves-carousel-dekstop-1248x702-db5877994dde.avif", "Brand new cross-platform open world ARPG! Discover, collect, and fight various monsters in an epic, immersive world.", "#fff"],
    ["images/games/banner/egs-valorant-e8a2-defiance-carousel-desktop-1248x702-9d14cd1d4416.jpg", "Make some mischief with the young immortal that keeps foes guessing in both the heat of combat and the cold of death.", "#fff"]
];
let bannerImg = document.getElementById("bannerImg");
let bannerTxt = document.getElementById("bannerContent");
let bannerTxtContent = document.getElementById("bannerContentTxt");
let btn_addWishlist = document.getElementById("btn_wishlist");
let buttons = document.getElementsByClassName("bn-btn");

function updateBanner() {
    if(img_index == bannerGames.length-1){
        img_index = 0;
    } else {
        img_index += 1;
    }

    // Convert HTMLCollection to array using Array.from
    var elementsArray = Array.from(buttons);

    // Loop through each element and remove the "active" class on button clicked
    elementsArray.forEach(function(element) {
        element.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    buttons[img_index].classList.add("active");

    bannerImg.style.opacity = 0;
    
    bannerImg.src = bannerGames[img_index][0];
    bannerImg.style.opacity = 1;

    bannerTxtContent.innerHTML = bannerGames[img_index][1];
    bannerTxtContent.style.color = bannerGames[img_index][2];

    btn_addWishlist.setAttribute("data-game", img_index);
}

// Change banner every 5 secs
function startCounter() {
    intervalID = setInterval(updateBanner, 5000);
}
startCounter();

let homeBanner = document.getElementById("home-banner");

// Stop the counter when mouse enters the banner
homeBanner.addEventListener('mouseenter', function() {
    clearInterval(intervalID);
});

// Resume the counter when mouse leaves the banner
homeBanner.addEventListener('mouseleave', function() {
    startCounter();
});

function changeBanner(index, thisClicked){
    img_index = index;

    // Convert HTMLCollection to array using Array.from
    var elementsArray = Array.from(buttons);

    // Loop through each element and remove the "active" class on button clicked
    elementsArray.forEach(function(element) {
        element.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    thisClicked.classList.add("active");

    bannerImg.style.opacity = 0;

    setTimeout(function() {
        bannerImg.src = bannerGames[index][0];
        bannerImg.style.opacity = 1;
    }, 200);

    bannerTxtContent.innerHTML = bannerGames[img_index][1];
    bannerTxtContent.style.color = bannerGames[img_index][2];

    btn_addWishlist.setAttribute("data-game", img_index);
}

let btn_wishlist = document.getElementById("btn_wishlist");
let arr_wishlist = [];
btn_wishlist.addEventListener("click", function(){
    if(!arr_wishlist.includes(btn_wishlist.getAttribute("data-game"))){
        alert(`You have successfully added this game to your wishlist!`);
        arr_wishlist.push(btn_wishlist.getAttribute("data-game"));
    } else {
        alert("This game is already in your wishlist!");
    }
    
});

// Modal
var modal = document.getElementById("myModal");
var btn_viewWishlist = document.getElementById("btn_viewWishlist");
var span = document.getElementsByClassName("close")[0];

function getDateNow() {
    // Create a new Date object representing the current date and time
    var now = new Date();

    // Get the year, month, and day
    var year = now.getFullYear();
    var month = now.toLocaleString('default', { month: 'short' }); // Get short month name
    var day = now.getDate();

    // Get the hours and minutes
    var hour = now.getHours();
    var minute = now.getMinutes();

    // Convert hour to 12-hour format and determine if it's AM or PM
    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // If hour is 0, make it 12

    // Add leading zero to minutes if less than 10
    minute = minute < 10 ? '0' + minute : minute;

    // Construct the formatted string
    var formattedDateTime =  month + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ampm;

    // Output the formatted date and time
    return formattedDateTime;

}

btn_viewWishlist.onclick = function() {
  if(arr_wishlist.length != 0){
    let textContent = "";
    let wishlists = document.getElementById("wishlists");

    wishlists.innerHTML = " ";
    let counter = 0;

    for(let i=0; i<arr_wishlist.length; i++){
        counter++;
        textContent += `
            <tr>
                <td data-counter="counter">${counter}</td>
                <td data-title="title">${bannerGameTitle[arr_wishlist[i]]}</td>
                <td data-price="price">$100.00</td>
                <td data-date="date">${getDateNow()}</td>
                <td data-action="action"><button class="round-black-btn" onclick="btn_removeGame(${arr_wishlist[i]})"><i class="fa fa-trash" aria-hidden="true"></i> Remove</button></td>
            </tr>
        `;
    }

    wishlists.innerHTML = textContent;

    modal.classList.add("show");
  } else {
    alert("Your wishlist is empty! Please add your game to your wishlist first.");
  }
}
function btn_removeGame(indexToRemove) {
    for(let i=0; i<arr_wishlist.length; i++){
        if(arr_wishlist[i] == indexToRemove){
            arr_wishlist.splice(i, 1);
        }
    }

    let textContent = "";
    let wishlists = document.getElementById("wishlists");

    wishlists.innerHTML = " ";
    let counter = 0;

    for(let i=0; i<arr_wishlist.length; i++){
        counter++;
        textContent += `
            <tr>
                <td data-counter="counter">${counter}</td>
                <td data-title="title">${bannerGameTitle[arr_wishlist[i]]}</td>
                <td data-price="price">$100.00</td>
                <td data-date="date">${getDateNow()}</td>
                <td data-action="action"><button class="round-black-btn" onclick="btn_removeGame(${arr_wishlist[i]})"><i class="fa fa-trash" aria-hidden="true"></i> Remove</button></td>
            </tr>
        `;
    }

    wishlists.innerHTML = textContent;
}
span.onclick = function() {
  modal.classList.remove("show");
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
}

$(document).ready(function() {
    var owl = $('.featured-games');
    owl.owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      margin: 10,
      nav: true,
      dots: false,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        426: {
          items: 2
        },
        769: {
          items: 4
        },
        1025: {
          items: 5
        },
        1560: {
          items: 7
        }
      }
    })
});

// Galaxy Background 
nakerback.render({
    container: document.getElementById('space-container'),
    waterMark : false,
    particle : {
        direction1: {x:100,y:100,z:100},
        direction2: {x:-100,y:-100,z:-100},
        life: 5,
        power: 0.013,
        texture: "https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png",
        number: 2000,
        colorStart: [255,255,255,0.65],
        colorEnd: [192,191,230,0.82],
        sizeStart: 0.1,
        sizeEnd: 0.2
    },
    environment : {
        sensitivity : 0.96,
        colorStart  : [0,0,0,1],
        colorEnd    : [0, 0, 0,1],
        gradient    : 'vertical'
    }
});
