var id=0; 
function sell(){
  
    id++;
    var product = form.product.value;
    var quantity = form.quantity.value;
    var price = form.price.value;
    var discount=form.discount.value;
    var subprice = price*(1-discount/100)*quantity;
    var row = "<tr>";
    row += "<td>" +  id + "</td>";
    row += "<td>" + product + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + discount + "</td>";
    row += "<td>" + subprice + "</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML +=row;
}