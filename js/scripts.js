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
        $(".name").text(name1);
        $("#output").text("CSS/Design!");
        $("p#output").after('<img src="img/css.png"/>');
        $("#result").fadeIn();
        $("#quiz").hide();
      } else if (question2 === "backend" && question3 === "mobile") {
        $(".name").text(name1);
        $("#output").text("Java/Android!");
        $("p#output").after('<img src="img/java.png"/>');
        $("#result").fadeIn();
        $("#quiz").hide();
      } else if (question2 === "backend" && question3 === "software" && question4 === "yes4" || question5 === "microsoft") {
        $(".name").text(name1);
        $("#output").text("C#/.NET!");
        $("p#output").after('<img src="img/csharp.png"/>');
        $("#result").fadeIn();
        $("#quiz").hide();
      } else if (question2 === "both" || question2 === "backend" && question3 === "software" && question4 ==="no4" || question5 ==="twitter") {
        $(".name").text(name1);
        $("#output").text("Ruby/Rails!");
        $("p#output").after('<img src="img/ruby.png"/>');
        $("#result").fadeIn();
        $("#quiz").hide();
      } else {
        $(".name").text(name1);
        $("#output").text("PHP/Drupal!");
        $("p#output").after('<img src="img/php.png"/>');
        $("#result").fadeIn();
        $("#quiz").hide();
      }
    } else {
      $("#quiz").hide();
      $("#sorry").show();
    }
    event.preventDefault();

  });

  $("button#goBack").click(function(){
    $(".intro").show();
    $("#result").hide();
    $("#sorry").hide();
    location.reload();
  });


});
