// Check if the user has already accepted cookies
function checkCookies() {
    return localStorage.getItem('cookiesAccepted');
}

// Set cookiesAccepted to true in localStorage when the user accepts cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', true);
    hideCookieConsent();
}

// Hide the cookie consent message
function hideCookieConsent() {
    var cookieConsent = document.getElementById('cookie-consent');
    cookieConsent.style.display = 'none';
}

// Show the cookie consent message if cookies are not accepted
window.onload = function () {
    if (!checkCookies()) {
        var cookieConsent = document.getElementById('cookie-consent');
        cookieConsent.style.display = 'block';
    }
};
