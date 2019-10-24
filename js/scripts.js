$(document).ready(function() {
  $("form#ageForm").submit(function(event) {
    var age = $("input#age").val();
    var pizza = document.getElementById("pizza").checked;
    console.log(pizza);

    var text = ['Your treasons are noted, and the police and national guard are en route. Keep your hands up, and get out of the booth slowly. You are under arrest.','Hope you brought some juice, cause you\'re gonna need your energy for all the fun you\'re going to have with your voter friends Kiddo!','Vote now grownup non-kiddo!','Better bring your dentures old timer!','YOU FAILED']
    if (pizza) { // Publicly shamed. Shaming Guarantees Citizenship.

      $("#heretic").text(text[0]);
    } else if(age < 5) { // Can Vote, but is a minor
      $("#heretic").text(text[1]);
    } else if(age < 9) { // Old Enough to Vote
      $("#heretic").text(text[2]);
    } else if((age/age)===1) {
      $("#heretic").text(text[3]);
    } else { // Error Handler
      $("#heretic").text(text[4]);
      console.log("FAIL!");
    }
    $("#information").show();
    event.preventDefault();
  });
});
