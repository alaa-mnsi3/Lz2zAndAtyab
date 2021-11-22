// اظهاؤ واخفاء الباسورد
let showHidePassword=document.querySelectorAll('.show-hide-icon');
let password =document.querySelectorAll('.password');
for (let i=0 ; i<password.length;i++)
{
    showHidePassword[i].addEventListener('click',function()
    {
        let value= password[i].getAttribute('type');
        if(value ==='password')
        {
            password[i].setAttribute('type','text');
            value = 'text';
        }
        else if(value ==='text')
        {
            password[i].setAttribute('type','password');
            value='password'
        }
       
    })
}
