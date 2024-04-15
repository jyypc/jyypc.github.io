// theme-switcher.js
theme_button_fun();
// Function to set the theme based on user preference
function setTheme() {
    // Check if the user has a preference for the theme in localStorage
    const theme = localStorage.getItem('theme');

    // Apply the appropriate theme
    if (theme === 'dark') {
        darkMode();
    } else if (theme === 'fun') {
        funMode();
    } else {
        // Default theme or any other theme logic goes here
        defaultMode()
    }
}

// Function to set the theme in localStorage and apply it
function setAndApplyTheme(selectedTheme) {
    localStorage.setItem('theme', selectedTheme);
    setTheme();
}

// Add click event listeners to each theme button
function theme_button_default() {
    setAndApplyTheme('default');
};

function theme_button_dark() {
    setAndApplyTheme('dark');
};

function theme_button_fun() {
    setAndApplyTheme('fun');
};

// Call setTheme() on page load
document.addEventListener('DOMContentLoaded', setTheme);

function defaultMode() {
    document.documentElement.style.setProperty('--text', 'black');
    document.documentElement.style.setProperty('--text-alt', 'white');
    document.documentElement.style.setProperty('--text-background', 'black');
    document.documentElement.style.setProperty('--main-background', '#daf7da');

    document.documentElement.style.setProperty('--top-banner-primary', '#FFB534');
    document.documentElement.style.setProperty('--top-banner-secondary', '#ce8f23');
    document.documentElement.style.setProperty('--top-banner-hover', '#b67b39');

    document.documentElement.style.setProperty('--navbar', '#549438');
    document.documentElement.style.setProperty('--navbar-hover-primary', '#C1F2B0');
    document.documentElement.style.setProperty('--navbar-hover-secondary', '#d2ffc3');

    document.documentElement.style.setProperty('--content-primary', '#65B741');
    document.documentElement.style.setProperty('--content-secondary', '#93D579');

    document.documentElement.style.setProperty('--title-bar-primary', '#FBF6EE');
    document.documentElement.style.setProperty('--title-bar-secondary', '#9b9a9a');

    document.documentElement.style.setProperty('--button-primary', 'black');
    document.documentElement.style.setProperty('--button-secondary', 'grey');

    document.documentElement.style.setProperty('--shadow', 'black');
}
function darkMode() {
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--text-alt', '#303030');
    document.documentElement.style.setProperty('--text-background', 'black');
    document.documentElement.style.setProperty('--main-background', '#232323');

    document.documentElement.style.setProperty('--top-banner-primary', '#171615');
    document.documentElement.style.setProperty('--top-banner-secondary', '#00d5ff');
    document.documentElement.style.setProperty('--top-banner-hover', '#b67b39');

    document.documentElement.style.setProperty('--navbar', '#171615');
    document.documentElement.style.setProperty('--navbar-hover-primary', '#1a1919');
    document.documentElement.style.setProperty('--navbar-hover-secondary', '#2e2d2c');

    document.documentElement.style.setProperty('--content-primary', '#232323');
    document.documentElement.style.setProperty('--content-secondary', '#9b9a9a');

    document.documentElement.style.setProperty('--title-bar-primary', '#232323');
    document.documentElement.style.setProperty('--title-bar-secondary', '#9b9a9a');

    document.documentElement.style.setProperty('--button-primary', 'black');
    document.documentElement.style.setProperty('--button-secondary', 'grey');

    document.documentElement.style.setProperty('--shadow', 'black');
}
function funMode() {
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--text-alt', 'blue');
    document.documentElement.style.setProperty('--text-background', 'white');
    document.documentElement.style.setProperty('--main-background', '#23073b');

    document.documentElement.style.setProperty('--top-banner-primary', '#6716d9');
    document.documentElement.style.setProperty('--top-banner-secondary', '#f2ff00');
    document.documentElement.style.setProperty('--top-banner-hover', '#b67b39');

    document.documentElement.style.setProperty('--navbar', '#6716d9');
    document.documentElement.style.setProperty('--navbar-hover-primary', '#4c0a63');
    document.documentElement.style.setProperty('--navbar-hover-secondary', '#7908c9');

    document.documentElement.style.setProperty('--content-primary', '#23073b');
    document.documentElement.style.setProperty('--content-secondary', '#520cad');

    document.documentElement.style.setProperty('--title-bar-primary', '#23073b');
    document.documentElement.style.setProperty('--title-bar-secondary', '#520cad');

    document.documentElement.style.setProperty('--button-primary', 'black');
    document.documentElement.style.setProperty('--button-secondary', 'grey');

    document.documentElement.style.setProperty('--shadow', 'black');
}