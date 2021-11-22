// ========== increment oredr============//
var increment = document.querySelectorAll(".increment");
var decrement = document.querySelectorAll(".decrement");
var num = document.querySelectorAll(".number");

//increment
for(let i=0;i<increment.length;i++)
{
    console.log(increment[i]);
    increment[i].addEventListener('click',function(){
     
    var numProduct= parseInt(num[i].textContent);
    numProduct ++;
    num[i].textContent=numProduct;
    })
}


//decrement
for(let i=0;i<decrement.length;i++)
{
    console.log(decrement[i]);
    decrement[i].addEventListener('click',function(){
     
    var numProduct= parseInt(num[i].textContent);
    numProduct --;
    if(numProduct < 0)
    {
        num[i].textContent= "Error";
        numProduct = 0;
    }
    num[i].textContent=numProduct;

    })
}

// ----------------up --------------
const up = document.querySelector(".up");





window.onscroll=function()
{
    if(window.scrollY < 3200)
    {

        up.style.display='none';
    } 
    else
    {

        up.style.display='inline-block'
        up.addEventListener('click',function()
        {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
}
