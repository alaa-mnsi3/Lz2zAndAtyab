let priceProduct =document.querySelectorAll('.price-product');
let priceAllProduct=document.querySelector('.price-All-products');
let priceDiscard = document.querySelector('.discard');
let priceSerivces = document.querySelector('.price-serivces');
let priceTaxse = document.querySelector('.price-taxse');
let Allprice=document.querySelectorAll('.all-prices');
let quantity=document.querySelectorAll('.cart-quantity');
let numProducts=document.querySelectorAll('.sec-cart-product');
let x = 0;
let discard=priceDiscard.textContent.split(" ");
let Services=priceSerivces.textContent.split(" ");
let Taxses=priceTaxse.textContent.split(" ");

for(let n=0 ; n<quantity.length;n++)
{
    quantity[n].innerHTML=parseInt(numProducts.length)
}


x=0;
for(let j=0 ; j < priceProduct.length ; j++)
{
    let priceProd=priceProduct[j].textContent.split(" ");
    let price =parseInt(priceProd[0]);
    x += price;
}
priceAllProduct.innerHTML = x + ' LE';
for(let k=0 ; k<Allprice.length ;k++)
{
   Allprice[k].innerHTML=x + parseInt(Services[0]) +parseInt(Taxses[0]) +parseInt(discard[0]) + ' LE';
}