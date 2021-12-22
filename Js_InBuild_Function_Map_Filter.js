const cart = [

    {productName: "Laptop", prodcutId: 01, productPrice: 550},
    {productName: "Playstation", prodcutId: 02, productPrice: 55550},
    {productName: "Pc", prodcutId: 03, productPrice: 3450},
    {productName: "Ipad", prodcutId: 04, productPrice:676550},

];

// ----Map function--->
// const output = cart.map((x) => x.prodcutId + " " + x.productName + " " + x.productPrice);

//----Filter Dunction--->
// const output = cart.filter((x) => x.prodcutId < 676550);

//------Filter and map---->
// const output = cart.filter((x) => x.prodcutId < 676550).map((x) => x.productName);

const output = cart.reduce(function (accu,curr){
    if (accu[curr.productPrice]){
        accu[curr.productPrice] = ++accu[curr.productPrice];
    }
    else{
        accu[curr.productPrice] = 1 ;
    }
    return accu;

}


,{});




console.log(output);