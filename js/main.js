(function App() {
    let isDark = false;
    if (localStorage.getItem("dark-mode")) {
        isDark = true;
        setDarkTheme();
    }
    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", () => {
        if (isDark) {
            setLightTheme();
            isDark = false;
            ManageLocalStorage("DELETE");
            return;
        }
        setDarkTheme();
        ManageLocalStorage("ADD");
        isDark = true;
    });

    function setLightTheme() {
        document.body.classList.remove("dark");
    }
    function setDarkTheme() {
        document.body.classList.add("dark");
    }

    function ManageLocalStorage(command) {
        if (command === "DELETE") {
            localStorage.removeItem("dark-mode");
            return;
        }
        localStorage.setItem("dark-mode", true);
    }
})();


// Get the button
let mybutton = document.getElementById("movetoo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.bottom = "6px";
    } else {
        mybutton.style.bottom = "-46px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}