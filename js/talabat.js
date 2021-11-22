var talabattoggle=document.querySelectorAll('.talabat-applying');
var talabatSection=document.querySelectorAll('.talabat-section');

console.log(talabattoggle)

for(let i=0;i<talabattoggle.length ; i++)
{
    talabattoggle[i].addEventListener('click',function()
    {
        for(let j=0 ; j<talabattoggle.length ;j++)
        {
            talabattoggle[j].classList.remove('active');
            talabatSection[j].classList.remove('active');
        }
        talabattoggle[i].classList.add('active');
        talabatSection[i].classList.add('active');

    
    })

}