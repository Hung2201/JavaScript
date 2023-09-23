var id=0;
var total=0;
function add(){
    id ++;
    var product = form.product.value;
    var quantity =form.quantity.value;
    var price = form.price.value;
    var subprice = quantity*price;
    total +=subprice;
    var row ="<tr>";
    row += "<td>" + id +"</td>";
    row += "<td>" + product +"</td>";
    row += "<td>" + quantity +"</td>";
    row += "<td>" + price +"</td>";
    row += "<td>" + subprice +"</td>";
    row +="</tr>";
    document.getElementById("table").innerHTML +=row;
    document.getElementById("total").innerHTML =total;
}
function cancel(){
    document.getElementById("product").value="";
    document.getElementById("quantity").value="";
    document.getElementById("price").value="";
}