let quantityProduct = document.querySelectorAll('.quantity-product');
let priceProduct =document.querySelectorAll('.price-product');
let incrementProd = document.querySelectorAll('.increment');
let decrementProd = document.querySelectorAll('.decrement');
let prevPrice=document.querySelectorAll('.price-product-perv');
let priceAllProduct=document.querySelector('.price-All-products');
let priceDiscard = document.querySelector('.discard');
let priceSerivces = document.querySelector('.price-serivces');
let priceTaxse = document.querySelector('.price-taxse');
let Allprice=document.querySelectorAll('.all-prices');
let quantity=document.querySelectorAll('.cart-quantity');
let numProducts=document.querySelectorAll('.sec-cart-product');
let Productsdelete=document.querySelectorAll('.delete');
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
    let num =parseInt(quantityProduct[j].textContent);
    let priceProd=priceProduct[j].textContent.split(" ");
    let price =parseInt(priceProd[0]);
    priceProduct[j].innerHTML=price * num  + ' LE';
    x += price;
}
priceAllProduct.innerHTML = x + ' LE';
for(let k=0 ; k<Allprice.length ;k++)
{
   Allprice[k].innerHTML=x + parseInt(Services[0]) +parseInt(Taxses[0]) +parseInt(discard[0]) + ' LE';
}



for(let i=0 ; i < incrementProd.length ; i++)
{
    
   
    let priceProd=priceProduct[i].textContent.split(" ");
    let price =parseInt(priceProd[0]);
       
    let pricePrev=prevPrice[i].textContent.split(" ");
    let priceP =parseInt(pricePrev[0]);

    incrementProd[i].addEventListener('click',function()
    {
        let num =parseInt(quantityProduct[i].textContent);
        console.log(price);
        priceProduct[i].innerHTML=price * (num+1)  + ' LE';
        prevPrice[i].innerHTML=priceP * (num+1)  + ' LE';
        console.log(price);
        x=0;
        for(let j=0 ; j < priceProduct.length ; j++)
        {
            let priceProd1=priceProduct[j].textContent.split(" ");
            let price1 =parseInt(priceProd1[0]);
            x += price1;
        }
        priceAllProduct.innerHTML = x + ' LE';
        for(let k=0 ; k<Allprice.length ;k++)
        {
        Allprice[k].innerHTML=x + parseInt(Services[0]) +parseInt(Taxses[0]) +parseInt(discard[0]) + ' LE';
        }
    })


    decrementProd[i].addEventListener('click',function()
    {
        let num =parseInt(quantityProduct[i].textContent);
        console.log(priceP);
        priceProduct[i].innerHTML=price * (num-1)  + ' LE';
        prevPrice[i].innerHTML=priceP * (num-1)  + ' LE';
        console.log(priceP);
        x=0;
        for(let j=0 ; j < priceProduct.length ; j++)
        {
            let priceProd1=priceProduct[j].textContent.split(" ");
            let price1 =parseInt(priceProd1[0]);
            x += price1;
        }
        priceAllProduct.innerHTML = x + ' LE';
        for(let k=0 ; k<Allprice.length ;k++)
        {
        Allprice[k].innerHTML=x + parseInt(Services[0]) +parseInt(Taxses[0]) +parseInt(discard[0]) + ' LE';
        }
    })




    Productsdelete[i].addEventListener('click',function()
    {
        this.parentNode.parentNode.style.display='none';
        console.log(priceP);
        priceProduct[i].innerHTML=price * (0)  + ' LE';
        prevPrice[i].innerHTML=priceP * (0)  + ' LE';
        x=0;
        for(let j=0 ; j < priceProduct.length ; j++)
        {
            let priceProd1=priceProduct[j].textContent.split(" ");
            let price1 =parseInt(priceProd1[0]);
            x += price1;
        }
        priceAllProduct.innerHTML = x + ' LE';
        for(let k=0 ; k<Allprice.length ;k++)
        {
        Allprice[k].innerHTML=x + parseInt(Services[0]) +parseInt(Taxses[0]) +parseInt(discard[0]) + ' LE';
        }
        for(let n=0 ; n<quantity.length;n++)
        {   
            quantity[n].innerHTML=parseInt(quantity[n].textContent.split(' ')[0]-1)
        }
    })
}

