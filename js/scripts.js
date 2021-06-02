function add(number1, number2) {
  return number1 + number2;
}

function sub(subnum1, subnum2) {
  return subnum1 - subnum2;
}

function mul(mulnum1, mulnum2) {
  return mulnum1 * mulnum2;
}

function div(divnum1, divnum2) {
  return divnum1 / divnum2;
}

$(document).ready(function() {
  $("form#add").submit(function(event) {
    console.log("adding two numbers")
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result1 = add(number1, number2);
    console.log(result1)
    $("#output1").text(result1);
  });  
    $("form#sub").submit(function(event) {
    event.preventDefault();
    const subnum1 = parseInt($("#sub1").val());
    const subnum2 = parseInt($("#sub2").val());
    const result2 = sub(subnum1, subnum2);
    console.log(result2)
    $("#output2").text(result2);
    //alert(result2);
  });
  $("form#mul").submit(function(event) {
    event.preventDefault();
    const mulnum1 = parseInt($("#mul1").val());
    const mulnum2 = parseInt($("#mul2").val());
    const result3 = mul(mulnum1, mulnum2);
    console.log(result3)
    $("#output3").text(result3);
    //alert(result2);
  });
  $("form#div").submit(function(event) {
    event.preventDefault();
    const divnum1 = parseInt($("#div1").val());
    const divnum2 = parseInt($("#div2").val());
    const result4 = div(divnum1, divnum2);
    console.log(result4)
    $("#output4").text(result4);
    //alert(result2);
  });
});