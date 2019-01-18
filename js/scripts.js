$(document).ready(function(){
  $("button#takequiz").click(function(){
    $(".intro").hide();
    $("button#takequiz").hide();
    $("#quiz").show();
  });

  $("form#code-quiz").submit(function(event){
    var name1 = $("input#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();


    if (question1 === "yes1") {
      if (question2 === "frontend" || question3 === "website") {
        alert("CSS/Design");
      } else if (question2 === "backend" && question3 === "mobile") {
        alert("Mobile/Java");
      } else if (question2 === "backend" && question3 === "software" && question4 === "yes4" || question5 === "microsoft") {
        alert("C#");
      } else if (question2 === "both" || question2 === "backend" && question3 === "software" && question4 ==="no4" || question5 ==="twitter") {
        alert("Ruby");
      } else {
        alert("PHP");
      }
    } else {
      alert("toobad");
    }
    event.preventDefault();

  });


});
