function myFunction(){
    let number=document.getElementById("text1").value;
    number=parseInt(number);
    var y = (number % 2);
    switch (y){
        case 0: {
            document.getElementById("display").innerHTML="Day la so chan";
            break;
        }
        default:{
            document.getElementById("display").innerHTML = "Day la so le";
            break;
        }

    }
    document.getElementById("display").style.opacity=1;
}