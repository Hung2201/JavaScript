var man= [
    {   
        id:1,
        name: "The Cosmo (Den) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image:"./image/shortjeanss.jpg"
    },
    
    {
        id:2,
        name: "Quần baggy đen sang trọng QQ ",
        code: "TC1025011BA",
        price: "398.000",
        image:"./image/baggy.jpg"
    },
    
    {
        id:3,
        name: "The Cosmo (Den) Quan short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image:"./image/shortkaki.jpg"
    },
    {   
        id:4,
        name: "The Cosmo (Den) Quân short khaki",
        code: "C1025011BA",
        price: "300.000",
        image:"./image/kakinam.jpg"
    }  
];

var woment = [
    {   
        id:1,
        name: "Vay Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "./image/jean.jpg"
    },
    
    {
        id:2,
        name: "ảo thun phối váy ngắn ",
        code: "TC1025011BA",
        price: "398.000",
        image: "./image/ao-thun-nu-re-dep-6.jpg"
    },
 
    {
        id:3,
        name: "Áo khoác",
        code: "TC1025011BA",
        price: "300.000",
        image: "./image/khoac nu1.jpg"
    },

    {
        id:4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "300.000",
        image: "./image/aothun.jpg"
    }
];

function listProducts(){
    for (let i=0; i <= man.length-1; i++){
        var demo= '<div class="col-3">';
        demo += '<div class="card" style="width:18rem;">';
        demo += '<img src="'+man[i].image +'" class="card-img-top" style="height:400px;">';
        demo +='<div class="card-body">';
        demo +='<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo +='<a href="#" class="btn btn-primary" onclick="order()">Dat mua</a>';
        demo +='</div>';
        demo +='</div>';
        demo +='</div>';
        console.log(demo);
        document.getElementById("men").innerHTML +=demo;
    }

    for (let i=0; i <= woment.length-1; i++){
        var demo= '<div class="col-3">';
        demo += '<div class="card" style="width:18rem;">';
        demo += '<img src="'+woment[i].image +'" class="card-img-top" style="height:400px;">';
        demo +='<div class="card-body">';
        demo +='<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo +='<a href="#" class="btn btn-primary" onclick="order()">Dat mua</a>';
        demo +='</div>';
        demo +='</div>';
        demo +='</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML +=demo;
    }
}
