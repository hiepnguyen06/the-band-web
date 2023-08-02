function toggleModal() {
    document.querySelector(".ticket-modal").classList.toggle("open");
}

function hideNav(event) {
    if ($(this).is("#header li:last-child > a:first-child")) {
        // Prevent default action
        event.preventDefault();
        console.log("dsdsd");
      } else {
        document.querySelector("#header").classList.toggle("nav-hide");
      }
}

$("#header li:last-child > a:first-child").click(function(event) {
    event.preventDefault();
});

document.querySelector(".mobile-menu-btn").addEventListener("click", hideNav);



$("#header li a[href*='#']").not("#header li:last-child > a:first-child").click(hideNav);




