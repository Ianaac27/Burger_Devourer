$(function() {
    $(".devour-button").on("click", (event) => {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        const burgerDevoured = {
            devoured: newDevour
        };
    
    // Send the PUT req to update mysql table
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerDevoured
    }).then( () => {
        console.log("Yum, yum, yum, yum, yum.... The " + id + " has been devoured!");
        //reloads page and updates list
        location.reload();
        }
    );
    });

    $(".new-burger").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
          name: $("#burger").val().trim(),
        };
    
        console.log(newBurger);

        // Send the POST request
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