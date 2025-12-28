function pg(){
    document.getElementById("perc").value = (document.getElementById("mm").value/document.getElementById("om").value)*100;
    let percentage = document.getElementById("perc").value
    let g;
    switch (Math.floor(percentage/10))
    {
        case 10:
        case 9:g= "Grade O";
        break; 
        case 8:g= "Grade A";
        break; 
        case 7:g= "Grade C";
        break; 
        case 6:g= "Grade D";
        break; 
        case 5:g= "Grade E";
        break; 
        default: g ="Grade F"
        break;
    }
    document.getElementById("grade").value= g;
    
}