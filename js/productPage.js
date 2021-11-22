let toggleWay=document.querySelectorAll('.toggle-way');
let waysCovering = document.querySelectorAll('.ways-covering');
let incrementProd = document.querySelector('.increment');
let decrementProd = document.querySelector('.decrement');
let quantityProduct = document.querySelector('.quantity-product');
let priceProduct =document.querySelector('.price-product');
let prevPrice=document.querySelector('.price-product-perv');




for(let i=0 ; i< toggleWay.length ;i++)
{
       toggleWay[i].addEventListener('click' , function(){
            toggleWay.forEach(tW =>
            {
                tW.classList.remove('active');
            })
            this.classList.add('active');
            waysCovering.forEach(wCO =>
            {
                wCO.classList.remove('active');
            })
            waysCovering[i].classList.add('active');
    })
}


let priceProd=priceProduct.textContent.split(" ");
let price =parseInt(priceProd[0]);
   
let pricePrev=prevPrice.textContent.split(" ");
let priceP =parseInt(pricePrev[0]);

incrementProd.addEventListener('click',function()
{
    let num =parseInt(quantityProduct.textContent);
    console.log(price);
    priceProduct.innerHTML=price * (num)  + ' LE';
    prevPrice.innerHTML=priceP * (num)  + ' LE';
    console.log(price);
})

decrementProd.addEventListener('click',function()
{
    let num =parseInt(quantityProduct.textContent);
    console.log(price);
    priceProduct.innerHTML=price * (num)  + ' LE';
    prevPrice.innerHTML=priceP * (num)  + ' LE';
    console.log(price);
})