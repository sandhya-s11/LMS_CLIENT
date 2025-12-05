const body = document.body;
const lightbut = document.getElementById("lightmode");
const darkbut = document.getElementById("darkmode");

// Attach event listeners
lightbut.addEventListener("click", () => SetTheme("light"));
darkbut.addEventListener("click", () => SetTheme("dark"));


const SetTheme = (theme) => {
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
};