/* ==============================
   ONLINE STUDENT ID JAVASCRIPT
================================ */

// Get elements
const themeButton = document.getElementById("themeButton");
const dateButton = document.getElementById("dateButton");
const dateDisplay = document.getElementById("dateDisplay");
const yearDisplay = document.getElementById("year");

// Current year
const currentYear = new Date().getFullYear();

yearDisplay.textContent = currentYear;


/* ==============================
   DARK / LIGHT MODE
================================ */

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☀️ Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙 Light Mode";

        localStorage.setItem("theme", "dark");
    }

});


/* ==============================
   REMEMBER THEME
================================ */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☀️ Dark Mode";

} else {

    themeButton.textContent = "🌙 Light Mode";

}


/* ==============================
   SHOW CURRENT DATE
================================ */

dateButton.addEventListener("click", function () {

    const today = new Date();

    const formattedDate = today.toLocaleDateString(
        "en-PH",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    dateDisplay.textContent =
        "Today is " + formattedDate;

});

/* ==============================
   CLICKABLE PROFILE PHOTO
================================ */

const profilePicture =
    document.getElementById("profilePicture");

const imageModal =
    document.getElementById("imageModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");


/* Open Image */

profilePicture.addEventListener("click", function () {

    imageModal.classList.add("active");

});


/* Close using X */

closeModal.addEventListener("click", function () {

    imageModal.classList.remove("active");

});


/* Close when clicking outside image */

imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


/* Close with ESC key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        imageModal.classList.remove("active");

    }

});

/* ==============================
   CARD CLICK ANIMATION
================================ */

const card = document.querySelector(".id-card");

card.addEventListener("click", function () {

    card.style.transform = "scale(0.99)";

    setTimeout(function () {

        card.style.transform = "";

    }, 150);

});
