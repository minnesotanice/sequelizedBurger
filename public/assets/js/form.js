// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-eaten").on("click", function(event) {

      var id = $(this).data("id");

      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {eaten: true}
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );

      // Delete <li> tag containing button that was just clicked
      $(this).parent().detach();

      // Reload page to show current data
      // location.reload(true);

    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#create-new-burger").val().trim(),
        // sleepy: $("[name=sleepy]:checked").val().trim()
        eaten: false
      };
  
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );

    });


  });
  