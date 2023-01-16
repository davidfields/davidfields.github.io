function removeHref(link_id) {
    $(link_id).removeAttr("href");
}

function setupHomeLink() {
    removeHref("#cmd-home");
    setupHoverCursor("#cmd-home");

    $("#cmd-home").click(function () {
        $("#content").load("home.html #content", function () {
            setupHomePage();
        });
    });
}

function setupCopyrightLink() {
    removeHref("#copyright-link");
    setupHoverCursor("#copyright-link");

    $("#copyright-link").click(function () {
        $("#content").load("copyright.html #content", function () {
            setupCopyrightPage();
        });
    });
}