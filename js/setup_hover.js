function setupHover(i) {
    setupHoverCursor("#return-link" + i);
    setupHoverColor("#return-link" + i, "#r-" + i);
}

function setupHoverCursor(link_id) {
    $(link_id).hover(function () {
        $('html,body').css('cursor', 'pointer');
    },
        function () {
            $('html,body').css('cursor', 'default');
        });
}

function setupHoverColor(link_id, r) {
    $(r).css({ "color": "red" });

    $(link_id).hover(function () {
        $(r).css({ "color": "darkgoldenrod" });
    },
        function () {
            $(r).css({ "color": "red" });
        });
}