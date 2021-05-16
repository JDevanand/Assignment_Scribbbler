$(document).ready(function () {

  // When the user clicks on the button, open the modal

  $("#btn-SignUp").click(function () {
    showSignUpModal();
  });

  $("#btn-SignIn").click(function () {
    $("#modal-signIn").show();
  });

  //When use clicks close button in modal, closes the current modal displayed
  $(".close").click(function () {
    $(this).parents(".modal").hide();
  });

  //Show sing up 
  $("#link-signUp").click(function () {
    $(this).parents(".modal").toggle();
    $("#modal-signUp").toggle();
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function (event) {
    if ($(event.target).attr("class") == "modal") {
      $(event.target).hide();
      event.stopPropagation();
    }
  });

  function showSignUpModal() {
    $("#modal-signUp").show();
  }

}); //End of doc.ready//