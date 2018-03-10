jQuery(document).ready(function($) {
    $("nav h3").hide(); // hide the menu link and display all items
    $("nav ul").show(); // hide the menu list items
    /*
    $("nav ul").hide(); // hide the menu list items
    $("nav h3").click(function() {
        $("nav ul").slideToggle(500); // show list items
    });
    */

    /* swipebox initializr */
    $(".swipebox").swipebox({
    });
});
