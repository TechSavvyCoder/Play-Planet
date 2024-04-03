// Banner
function changeBanner(index){
    let bannerGames = [
        "images/games/banner/egs-horizon-forbidden-west-carousel-desktop-1920x1080-358478b6468a.avif",
        "images/games/banner/egs-marvel-rivals-carousel-deskto-1920x1080-c89aa53338e6.avif",
        "images/games/banner/egs-suicide-squad-ktjl-carousel-desktop-2560x1440-ff6f863521ef.avif",
        "images/games/banner/egs-wuthering-waves-carousel-dekstop-1248x702-db5877994dde.avif",
        "images/games/banner/egs-valorant-e8a2-defiance-carousel-desktop-1248x702-9d14cd1d4416.jpg",
        "images/games/banner/egs-frostpunk-2-carousel-desktop-1920x1080-c57a98a33421.avif"
    ]

    let bannerImg = document.getElementById("bannerImg");

    bannerImg.style.opacity = 0;

    setTimeout(function() {
        bannerImg.src = bannerGames[index];
        bannerImg.style.opacity = 1;
    }, 100);
}