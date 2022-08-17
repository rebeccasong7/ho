$(document).ready(function () {
    $('.nav-tabs-dropdown')
        .on("click", "li:not('.active') a",
            function (event) {
                $(this).closest('ul').removeClass("open");
                console.log("Toggle remove");
            })
        .on("click", "li.active a",
            function (event) {
                $(this).closest('ul').toggleClass("open");
                console.log("Toggle open");
            });
});