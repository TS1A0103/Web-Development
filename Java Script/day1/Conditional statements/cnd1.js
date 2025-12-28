function conditions(){
    let age = parseInt(document.getElementById("num").value);
    if (age>=18){
        document.getElementById("result").innerHTML = "Eligible to vote"
    }
    else if(age<18){
        document.getElementById("result").innerHTML = "Not Eligible to vote"
    }

}