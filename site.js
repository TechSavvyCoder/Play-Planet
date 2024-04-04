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

    btn_addWishlist.setAttribute("game", img_index);
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

    btn_addWishlist.setAttribute("game", img_index);
}

let btn_wishlist = document.getElementById("btn_wishlist");
let arr_wishlist = [];
btn_wishlist.addEventListener("click", function(){
    alert(`You have successfully added this game to your wishlist!`);
    arr_wishlist.push(btn_wishlist.getAttribute("game"));
});

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn_viewWishlist");
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

btn.onclick = function() {
  if(arr_wishlist.length != 0){
    let textContent = "";
    let wishlists = document.getElementById("wishlists");

    wishlists.innerHTML = " ";

    for(let i=0; i<arr_wishlist.length; i++){
        textContent += `
            <tr>
                <td data-title="title">${bannerGameTitle[arr_wishlist[i]]}</td>
                <td data-price="price">$100.00</td>
                <td data-date="date">${getDateNow()}</td>
                <td data-action="action"><button onclick="btn_removeGame(${arr_wishlist[i]})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
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

    for(let i=0; i<arr_wishlist.length; i++){
        textContent += `
            <tr>
                <td data-title="title">${bannerGameTitle[arr_wishlist[i]]}</td>
                <td data-price="price">$100.00</td>
                <td data-date="date">${getDateNow()}</td>
                <td><button onclick="btn_removeGame(${arr_wishlist[i]})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
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

