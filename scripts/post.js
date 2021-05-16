$(document).ready(function () {

    /*Initialization when the page loads */
    /*Using closures to avoid misuse of likescounter variable by other methods*/
    var incrementLikesCounter = (function () {
        var likesCounter = 0;
        return function () {
            likesCounter += 1;
            return likesCounter;
        }
    })();

    /**Initialize the number of likes on page load */
    $("#count-likes").text("Be the first one to like this!");

    /**Read post data from session storage*/
    var data = JSON.parse(sessionStorage.getItem("postData"));
    $("#post-author").text(data.author);
    $("#post-title").children().text(data.title);
    $("#post-content").children().text(data.postContent);

    /*Other events and functions */
    $("#btn-edit").click(function () {
        /**toggle back to edit to be implemented */
        $("#post-content").children().toggleClass("editable");
        $("#post-title").children().toggleClass("editable");

        $("#post-title").children().attr("contentEditable", "true");
        $("#post-content").children().attr("contentEditable", "true");

        /**This will toggle the hide and show functions */
        $("#btn-save").toggle();
        $(this).toggle();
    });

    $("#btn-save").click(function () {
        /**toggle back to edit to be implemented */
        $("#post-content").children().toggleClass("editable");
        $("#post-title").children().toggleClass("editable");

        $("#post-title").children().attr("contentEditable", "false");
        $("#post-content").children().attr("contentEditable", "false");

        /**This will toggle the hide and show functions */
        $("#btn-edit").toggle();
        $(this).toggle();
    });

    $("#btn-like").click(function () {
        var count = incrementLikesCounter();
        var counterstmt;
        if (count > 1) {
            counterstmt = count + "  people like this!";
        } else {
            counterstmt = count + " person likes this!";
            $("#btn-like").contents().last().replaceWith("Liked");
        }
        $("#count-likes").text(counterstmt);
    });

    $("#btn-comment").click(function () {
        if ($("#view-all-comments").css("display") == "none") {
            $("#view-all-comments").show();
        }

        var newcommentelem = $("<p></p>").text($("#comment").val());
        newcommentelem.addClass("user-comments");

        if ($("#view-all-comments").children("p.user-comments")) {
            $("#view-all-comments").prepend(newcommentelem);
        } else {
            $("#view-all-comments").append(newcommentelem);
        }
    });

});