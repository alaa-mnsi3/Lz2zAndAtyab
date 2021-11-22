let visaCheck=document.querySelector('input[value="visa"]');
let radiobtn =document.querySelectorAll('.chooseWay input');
let labelVisa =document.querySelectorAll('form label');
console.log(visaCheck.checked);
var movetopage=true;
  
    
//    الضغط ع الزر للانتقال للصفحه التاليه 
document.querySelector('.submit').addEventListener('click',function()
{

    // يتم الضغط ع الزر بعد التاكد من ان ال inputs مفعله
    document.querySelectorAll('.paying-visa').forEach(inp => {
        console.log(inp.disabled)
        if(inp.disabled)
        {
            movetopage=true;
            document.querySelector('.alert-errors').style.display='none';
        }
        else
        {
            // validation visa number and name
            var xn=document.querySelector(".visa-number") ; 
            var nameVisa=document.querySelector(".visa-name"); 
            var passwordVisa=document.querySelector(".visa-password"); 

            // regular exprission for number card
            var reg= /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
            var regname=/^[a-z][A-Z]$/;

            console.log(nameVisa);
            // التاكد من كل الحقول مملئه
            if(nameVisa.value.trim()=='' || xn.value.trim()=="" || passwordVisa.value.trim()=="")
            {
                movetopage=false;
                document.querySelector('.alert-errors').style.display='block';
                document.querySelector('.alert-errors').innerHTML='!!من فضلك اعد ادخال لابد من ملء جميع الحقول';
            }
            // التاكد من اسم الكارد
            else if(!(nameVisa.value.toLowerCase().trim()==='visa' || nameVisa.value.toLowerCase().trim()==='MasterCard'
            || nameVisa.value.toLowerCase().trim()==='Discover' || nameVisa.value.toLowerCase().trim()==='American Express' || nameVisa.value.toLowerCase().trim()==='Diners Club' || nameVisa.value.toLowerCase().trim()==='JCB'))
            {
                movetopage=false;
                document.querySelector('.alert-errors').style.display='block';
                document.querySelector('.alert-errors').innerHTML='!!من فضلك اعد ادخال اسم الكارد فالاسم غير صحيح';
            } 

            // التاكد من رقم الكارد
            else if(!(reg.test(xn.value)))
            {
                movetopage=false;
                document.querySelector('.alert-errors').style.display='block';
                document.querySelector('.alert-errors').innerHTML='!!من فضلك اعد ادخال رقم الكارد فالرقم غير صحيح';
            }
            else
            {   
                document.querySelector('.alert-errors').style.display='none';
                movetopage=true;
            }      

        }
    })

    if(movetopage==true)
    {
        window.location.href='../pages/details.html'
    }
})


// عند الضغط ع الرديو بتن بيظهر ال input كانها متفعله
radiobtn.forEach(btn =>
    {
        btn.addEventListener('click',function(){
            if(visaCheck.checked)
            {
                console.log('alaaaaaaaaaaaaaaaaaaaaaa')
                document.querySelectorAll('.paying-visa').forEach(inp => {
                    inp.classList.add('active');
                    inp.disabled=false;
                })
                labelVisa.forEach(lb => {
                    lb.classList.add('active');
                })
            }
            else if(!visaCheck.checked)
            {
                console.log('alaaaaaaaaaaaaaaaaaaaaa22222a')
                document.querySelectorAll('.paying-visa').forEach(inp => {
                    inp.classList.remove('active');
                    inp.disabled=true;
                })
                labelVisa.forEach(lb => {
                    lb.classList.remove('active');
                })
                document.querySelector('.alert-errors').style.display='none';
                movetopage=true;
            }
        })
    })




 