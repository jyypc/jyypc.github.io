var navItemText = document.querySelector('.nav-item');
document.addEventListener('DOMContentLoaded', declareBanner);

function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("navbar").style.overflow = "visible";

    document.getElementById("navControl").onclick = closeNav;
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";

    document.getElementById("navbar").style.overflow = "hidden";

    document.getElementById("navControl").onclick = openNav;
}

function declareBanner() {
    let banner = document.getElementsByClassName("nav-item-banner")[0];
    let target_url = "";
    switch(Math.floor(Math.random()*5)) {
        case 0:
            target_url = "watch_anthony.html";
            break;
        case 1:
            target_url = "watch_julian.html";
            break;
        case 2:
            target_url = "watch_kaz.html";
           break;
        case 3:
            target_url = "watch_khoo.html";
            break;
        case 4:
            target_url = "watch_lee.html";
            break;
        default:
            break;
    }
    banner.parentElement.href = target_url;
}