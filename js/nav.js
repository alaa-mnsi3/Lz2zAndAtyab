//mob toggle
const mobToggle = document.querySelector('.mob');
mobToggle.addEventListener('click', function(){
    const nav = document.querySelector('nav');
    let navItem = document.querySelectorAll('.nav-item');
    nav.classList.toggle("active");
    navItem.forEach(link => {
       link.classList.add('active')
   })

});

// دى عند الضغط ع اى حاجه ف ال body بتخفتفى
document.querySelector('.main-page').addEventListener('click',function()
{
    document.querySelector('nav').classList.remove("active");
})

document.querySelector('.footer').addEventListener('click',function()
{
    document.querySelector('nav').classList.remove("active");
})


// loading -----loader
window.onload=function (){
    setTimeout(function ()
    {
        document.querySelector('html').style.overflowY='auto';
        document.querySelector('.loader').style.display='none';
    },1600)
};



//*------------------ show menu ----------------------*//
let menuToggle = document.querySelectorAll(".menu-information-toggle");
let memuInformation = document.querySelectorAll(".menu-information");



for(let i=0 ; i<menuToggle.length;i++)
{
    menuToggle[i].addEventListener("click",function()
    {
        memuInformation[i].classList.toggle("active");
    })
  
}

