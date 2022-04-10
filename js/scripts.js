$(document).ready(function () {
  $("#form-group").submit(function (event) {
    event.preventDefault();
    const firstFlavor = $("#flavor1 ").val();
    const secondFlavor = $("#flavor2 ").val();
    const thirdFlavor = $("#flavor3 ").val();

    const iceCream = [firstFlavor, secondFlavor, thirdFlavor];
    iceCream.forEach(function (flavor) {
      $("#output").append("<li>" + flavor + "</li>");
    });

  });
});



// let list = $("<ul></ul>");
// list.append($("<li>" + newArray2[0] + "</li>"));
// list.append($("<li>" + newArray2[1] + "</li>"));
// list.append($("<li>" + newArray2[2] + "</li>"));

// $("#fav-list").text("");
// $("#fav-list").append(list);