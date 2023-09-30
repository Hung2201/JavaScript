
function savedata(){
    var a = {
        name:document.getElementById('name').value,
        id: document.getElementById('id').value,
        namepro: document.getElementById('namepro').value,
        qty:document.getElementById('qty').value,
        price:document.getElementById('price').value,
    }
        arr.push(a);
        localStorage.setItem('listProduct', JSON.stringify(arr));     
}
function load(){
    return JSON.parse(localStorage.getItem('listProduct'));
}

var arr = load() || [];
function show() {
    var html = '';
    for (i in arr) {
        var data= arr[i];
        var amount=parseFloat(data.qty)*parseFloat(data.price) ;
        var discount = parseFloat(amount * 0.3);
        var total = amount-discount;
        var n= i;
        n++;
        html+="<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + data.name + "</td>";
        html += "<td>"+ data.id + "</td>";
        html += "<td>" + data.namepro + "</td>";
        html += "<td>"+ data.qty + "</td>";
        html += "<td>"+ data.price + "</td>";
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