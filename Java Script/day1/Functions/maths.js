function add(){
    let x = parseInt(document.getElementById("Num1").value);
    let y = parseInt(document.getElementById("Num2").value);
    let sum =  x+y;
    document.getElementById("result").innerHTML= "Result: " +sum;

}
