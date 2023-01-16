// replaceURL("https://www.dmfields.com");

$(document).ready(function () {
    $("#content").load("home.html #content", function () {
        setupHomePage();
    });
});