function myFunction1(){
    
    var a = document.getElementById("text_1").value;
    a = parseInt(a);
    
    var b = document.getElementById("text_2").value;
    b = parseInt(b);

    if (a < 0 || a > 10 || b < 0 || b > 10) {
        alert("Giá trị của a và b phải nằm trong khoảng từ 0 đến 10. Vui lòng nhập lại!");
        document.getElementById("text_1").value=" ";
        document.getElementById("text_2").value=" ";
        return;
    }

    var c = document.getElementById("select");
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var result;
    
    switch(value){
        case 1:{
            result=(a+b*2)/3;
            result=parseFloat(result);
            document.getElementById("text_3").value=result;
            break;
        }
        case 2:{
            result=(a*2 + b*3)/5;
            result=parseFloat(result);
            document.getElementById("text_3").value=result;
            break;
        }
        case 1:{
            result=(a*3 + b*4)/7;
            result=parseFloat(result);
            document.getElementById("text_3").value=result;
            break;
        }
    }
    if (result > 8){
        document.getElementById("display").innerHTML="HOC SINH GIOI";
        document.getElementById("display").style.color="red";
        
    }
    else if (result <8 && result >=6.5){
        document.getElementById("display").innerHTML="HOC SINH KHA";
        document.getElementById("display").style.color="Green";
    }
    else if (result < 6,5 && result >= 4){
        document.getElementById("display").innerHTML="HOC SINH TRUNG BINH";
        document.getElementById("display").style.color="yellow";
    }
    else{
        document.getElementById("display").innerHTML="HOC SINH YEU"; 
        document.getElementById("display").style.color="blue";
    }
    document.getElementById("display").style.opacity=1;
    
    
}

function myFunction2(){
    document.getElementById("text_1").value="";
    document.getElementById("text_2").value="";
    document.getElementById("text_3").value="";
    document.getElementById("display").style.opacity=0;

}