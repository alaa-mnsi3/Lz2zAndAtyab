//بيعمل تحقيق ع الحقول الموجوده قبل ما ينتقل للصفحه التاليه
let submitbtn = document.querySelector(".submit");
submitbtn.addEventListener("click" , e=>{
    e.preventDefault();
    formvalidate();
    console.log(formvalidate());
    if(formvalidate())
    {
        window.location.href = "../pages/clientPage.html";
    }
}
)

function formvalidate()
{
    let form=document.querySelector('.form-sign-Up form');
    console.log(form);
    let signUpName=document.forms["signUp"]["yourName"].value;
    let signUppassword=document.forms["signUp"]["password"].value;
    let signUprepassword=document.forms["signUp"]["Surepassword"].value;
    let email=document.forms["signUp"]["email"].value;
    let phone=document.forms["signUp"]["yourphone"].value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const number=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    
    console.log(document.querySelector('input[name="yourName"]').parentNode.children[1])

    if(signUpName.trim() =='')
    {
        parentElemen=document.querySelector('input[name="yourName"]').parentNode.children[1];
        parentElemen.innerHTML=`<div style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your name must be as filledout
        </div>` ;
        return false;
    }
    else if(signUpName.trim() != '')
    { 
        parentElemen=document.querySelector('input[name="yourName"]').parentNode.children[1];
        parentElemen.innerHTML='';
    }

    if(phone.trim()=='')
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone must be as filledout
        </div>` ;
        return false;
    }
    else if(!(phone.match(number)))
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone is not correct
        </div>` ;
        return false;
    }
    else if((phone.match(number)))
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML='';
    }

    if(email.trim() == '')
    {
        parentElemen=document.querySelector('input[name="email"]').parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your email must be as filledout
        </div>` ;
        return false;
    }
    else if(!(email.match(re)))
    {
        parentElemen=document.querySelector('input[name="email"]').parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your email must be as example@example.com
        </div>`
        return false;
    }
    else if((email.match(re)))
    {
        parentElemen=document.querySelector('input[name="email"]').parentNode.children[1];
        parentElemen.innerHTML='';
    }

    if(signUppassword.trim()=="")
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password must be filledout
        </div>`;
        return false;
    }
    else if (!(signUppassword.match(/[a-z]/g) && signUppassword.match( 
                    /[A-Z]/g) && signUppassword.match( 
                    /[0-9]/g) && signUppassword.match( 
                    /[^a-zA-Z\d]/g) && signUppassword.length >= 8)) 
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div  style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password must be larger than 8 letters and contain'@-$-%-#'
        </div>`;
        return false;

    }
    else if((signUppassword.match(/[a-z]/g) && signUppassword.match( 
        /[A-Z]/g) && signUppassword.match( 
        /[0-9]/g) && signUppassword.match( 
        /[^a-zA-Z\d]/g) && signUppassword.length >= 8))
        {
            parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
            parentElemen.innerHTML='';
        }
    if(signUprepassword.trim()=="")
    {
        parentElemen=document.querySelector('input[name="Surepassword"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div   class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> You must rewrite password must be filledout
        </div>`;
        return false;
    }
    else if(signUprepassword!=signUppassword)
    {
        parentElemen=document.querySelector('input[name="Surepassword"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show"   role="alert">
        <strong>Attention!</strong> they are not match , again
        </div>`;
        return false;
    }
 
    else
    {
        parentElemen=document.querySelector('input[name="Surepassword"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML='';
        return true;
    }
      
    

}










