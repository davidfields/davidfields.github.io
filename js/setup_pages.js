function setupHomePage() {
    for (var i = 1; i <= 3; i++) {
        setupHover(i.toString());
    }

    removeHref("#return-link2");
    removeHref("#return-link3");

    $("#return-link2").click(function () {
        $("#content").load("links.html #content", function () {
            setupLinksPage();
        });
    });

    $("#return-link3").click(function () {
        $("#content").load("projects.html #content", function () {
            setupProjectsPage();
        });
    });

    setupCopyrightLink();
}

function setupLinksPage() {
    for (var i = 1; i <= 3; i++) {
        setupHover(i);
    }

    setupHomeLink();

    setupCopyrightLink();
}

function setupProjectsPage() {
    for (var i = 1; i <= 3; i++) {
        setupHover(i);
    }

    setupHomeLink();

    setupCopyrightLink();
}

function setupCopyrightPage() {
    setupHover(1);

    setupHomeLink();

    setupCopyrightLink();
}