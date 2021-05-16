$(document).ready(function () {

    var targetPost;
    var parentPost;
    /**Function to go to store the the post data on session storage and redirect to post.html  */
    $(".icon-ellipsis").click(function () {
        parentPost = $(this).parents(".post").find('p');
        console.log(parentPost[1].innerHTML);

        var sendData = {
            "author": parentPost[0].innerHTML,
            "title": parentPost[1].innerHTML,
            "postContent": parentPost[2].innerHTML
        }

        sessionStorage.setItem("postData", JSON.stringify(sendData));
        window.open("post.html", "_self");
    });

    $(".icon-del").click(function (event) {
        targetPost = event.target;
        $("#modal-deletePost").css("display", "block");
    });

    //This function is for delete post modal button
    //try using event capture/bubbling property to use the delete post
    $(".modal .deletebtn").click(function () {
        $(targetPost).parents(".post").css("display", "none");
        $(this).parents(".modal").hide();
    });

    $(".modal .cancelbtn").click(function () {
        $(this).parents(".modal").hide();
    });

}); /**Ref-End of doc.ready function */