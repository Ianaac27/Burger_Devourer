$(function() {
    $(".devour-button").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

console.log(id);

        var burgerDevoured = {
            devoured: newDevour
        }; 

        console.log(newDevour);

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerDevoured
    }).then( function() {
        console.log("Yum, yum, yum, yum, yum.... The burger has been devoured!", newDevour);
        location.reload();
        }
    );
    });

    $(".new-burger").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
          name: $("#burger").val().trim(),
        };
    
        console.log(newBurger);

        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          () => {
            console.log("created new burger");
            //reloads page and updates list
            location.reload();
          }
        );
    });

});