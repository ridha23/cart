function hide() {


    var x = document.getElementById("heart");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var x = document.getElementById("noheart");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function multiply(){
    var x = document.getElementById("qty1").value ;
    console.log(x)
    document.getElementById("total1").innerHTML =  x * 120;

  }
  function multiply2(){
    var x = document.getElementById("qty2").value ;
    console.log(x)
    document.getElementById("total2").innerHTML =  x * 30;

  }
  function multiply3(){
    var x = document.getElementById("qty3").value ;
    console.log(x)
    document.getElementById("total3").innerHTML =  x * 630;

  }
  
  function sum(){
    var a = parseInt(document.getElementById("qty1").value) ;  
    var b = parseInt(document.getElementById("qty2").value) ;
    var c = parseInt(document.getElementById("qty3").value) ;
    console.log(typeof(a, b , c))
    document.getElementById("taotalcart").innerHTML =  a + b + c;

  }

  function cartprice (){
    var a = parseInt(document.getElementById("qty1").value) ;  
    var b = parseInt(document.getElementById("qty2").value) ;
    var c = parseInt(document.getElementById("qty3").value) ;
    console.log(typeof(a, b , c))
    document.getElementById("cartprice").innerHTML =  a * 120 + b * 30 + c * 630;

  }