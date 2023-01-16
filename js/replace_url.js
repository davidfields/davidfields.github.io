function replaceURL(newURL) {
    currentURL = window.location.href.toString();

    if (currentURL != newURL && currentURL != newURL + "/") {
        window.location.replace(newURL);
    }
}