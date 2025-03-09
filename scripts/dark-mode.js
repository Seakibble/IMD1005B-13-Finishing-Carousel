// Dark mode is very simple, script-wise. The premise is that when we click the button, we apply a class to body, and that in turn styles the page differently. So the clever stuff is in our stylesheet. 
function ToggleDarkMode() {
    // First we toggle a class on the body. We can access it with document.body
    // .toggle() will apply a class if is missing, or remove it is present. 
    document.body.classList.toggle('darkMode')

    // Then we check to see if we're currently in dark mode after the button is pressed.
    if (document.body.classList.contains('darkMode')) {
        // If we are, then we need to alter the button to show the light mode icon (since the button now changes to light mode).
        document.getElementById('btnDarkMode').innerText = 'light_mode'
    } else {
        // Otherwise, we'll go back to darkmode.
        document.getElementById('btnDarkMode').innerText = 'dark_mode'
    }
}