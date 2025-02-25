function ToggleDarkMode() {
    document.body.classList.toggle('darkMode')

    if (document.body.classList.contains('darkMode')) {
        document.getElementById('btnDarkMode').innerText = 'light_mode'
    } else {
        document.getElementById('btnDarkMode').innerText = 'dark_mode'
    }
}