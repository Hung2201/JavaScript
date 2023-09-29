var arr=[];
function save(){
    var a = {
        name:document.getElementById('name').value,
        id: document.getElementById('id').value,
        namepro: document.getElementById('namepro').value,
        qty:document.getElementById('qty').value,
        price:document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);
}

function show() {
    var html = '';
   
    for (i in arr) {
        var amount=parseFloat(arr[i].qty)*parseFloat(arr[i].price) ;
        var discount = parseFloat(amount * 0.3);
        var total = amount-discount;
        var n= i;
        n++;
        html+="<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>"+ arr[i].id + "</td>";
        html += "<td>" + arr[i].namepro + "</td>";
        html += "<td>"+ arr[i].qty + "</td>";
        html += "<td>"+ arr[i].price + "</td>";
        html += "<td>" + discount + "</td>";
        html += "<td>" + amount + "</td>";
        html += "<td>" + total + "</td>";
        html += "</tr>";
    }
    document.getElementById('tbl').innerHTML = html;
}

function reset() {
    document.getElementById('name').value=''; 
    
    document.getElementById('id').value='';
    document.getElementById('qty').value='';
    document.getElementById('namepro').value='';
    document.getElementById('price').value='';
}