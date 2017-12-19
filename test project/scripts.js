
$(function () {
  $("input[type='radio'][name='gender']").on('change',function () {
    console.log('Clicked');
    if ($(this).attr("value") == "male") {
      $("#male_1").css("display", "inline-block");

    }
  })
  // $("#yes_1m").on('change',function () {
  //    $("#male_2").css("display", "inline-block");
  //    $("#female_1").css("display", "none");
  // })
  // $("#I_stillm").on('change',function () {
  //    $("#male_2").css("display", "inline-block");
  //    $("#female_1").css("display", "none");
  // })
  // $("#no_1m").on('change',function () {
  //    $("#male_2").css("display", "none");
  // })


  // $("#female").on('change',function () {
  //   $("#female_1").css("display", "inline-block");
  //   $(".male_questions").css("display", "none");
  //   $(".female_questions").css("display", "inline-block");
  // })



})
