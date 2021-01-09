// $(function() {
    $(".devour-button").on("click", (e) => {
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

    $(".new-burger").on("submit", (e) => {
        e.preventDefault();

        var newBurger = {
          burger_name: $("#burger").val().trim(),
        };
    
        // Send the POST request
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            //reloads page and updates list
            location.reload();
          }
        );
    });

// });