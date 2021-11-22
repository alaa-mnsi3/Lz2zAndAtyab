//دى بتاعت التحقيق من كتايه اسم او ايميل ف فورم نسيان الرقم السرى
let submitbtn = document.querySelector(".submit");
submitbtn.addEventListener("click" , e=>{
    e.preventDefault();
    formvalidate();
    console.log(formvalidate());
    if(formvalidate())
    {
        window.location.href = "../pages/backpassword.html";
    }
}
)

function formvalidate()
{
    let form=document.querySelector('.form-forget form');
    console.log(form);
    let username=document.forms["forgetPassword"]["username"].value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const number=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    
    // console.log(document.querySelector('input[name="yourName"]').parentNode.children[1])

 

    if(username.trim()=='')
    {
        parentElemen=document.querySelector('input[name="username"]').parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone or email must be as filledout
        </div>` ;
        return false;
    }
    else if(!(username.match(number) || username.match(re)))
    {
        parentElemen=document.querySelector('input[name="username"]').parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone or email is not correct
        </div>` ;
        return false;
    }
   
    else
    {
        parentElemen=document.querySelector('input[name="username"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML='';
        return true;
    }
      
    

}








