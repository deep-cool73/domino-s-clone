// ============================
// ORDER BUTTON
// ============================

const orderButton = document.querySelector(".hero a");

orderButton.addEventListener("click", function () {
    alert("Welcome to Domino's Online Ordering!");
});


// ============================
// EXPLORE IMAGE ANIMATION
// ============================

const exploreItems = document.querySelectorAll(".explore span:not(:first-child)");

exploreItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const text = item.innerText.trim();

        alert("You selected: " + text);

    });

});


// ============================
// MENU FILTER
// ============================

const menuItems = document.querySelectorAll(".menu span");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        // Remove active class
        menuItems.forEach(function (menu) {
            menu.classList.remove("active");
        });

        // Add active class
        item.classList.add("active");

        console.log("Selected menu:", item.innerText);

    });

});


// ============================
// ACTIVE MENU STYLE
// ============================

const style = document.createElement("style");

style.innerHTML = `
    .menu span.active {
        background: #e31837;
        color: white;
        transform: scale(1.05);
    }
`;

document.head.appendChild(style);


// ============================
// SCROLL ANIMATION
// ============================

const sections = document.querySelectorAll(
    ".explore, .app, .about, .menu"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// ============================
// SCROLL ANIMATION CSS
// ============================

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `
    .explore,
    .app,
    .about,
    .menu {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.7s ease;
    }

    .explore.show,
    .app.show,
    .about.show,
    .menu.show {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(animationStyle);


// ============================
// CURRENT YEAR
// ============================

const footer = document.querySelector(".footer");

const currentYear = new Date().getFullYear();

footer.innerHTML =
    "All Rights Reserved. Copyright © " +
    currentYear +
    " Domino's Pizza.";