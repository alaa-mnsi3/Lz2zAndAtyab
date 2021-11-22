//بيعمل تحقيق قبل ما ينقل للصفحه التاليه ف صفحه تسجيل الدخول
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
    let form=document.querySelector('.form-sign-in form');
    console.log(form);
    let signINpassword=document.forms["signIn"]["password"].value;
    let phone=document.forms["signIn"]["yourphone"].value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const number=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    
    // console.log(document.querySelector('input[name="yourName"]').parentNode.children[1])

 

    if(phone.trim()=='')
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML=`<div style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone must be as filledout
        </div>` ;
        return false;
    }
    else if(!(phone.match(number)))
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML=`<div style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your phone is not correct
        </div>` ;
        return false;
    }
    else if((phone.match(number)))
    {
        parentElemen=document.querySelector('input[name="yourphone"]').parentNode.children[1];
        parentElemen.innerHTML='';
    }
    if(signINpassword.trim() == "")
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password must be filledout
        </div>`;
        return false;
    }
    else if(!(signINpassword.match(/[a-z]/g) && signINpassword.match( 
        /[A-Z]/g) && signINpassword.match( 
        /[0-9]/g) && signINpassword.match( 
        /[^a-zA-Z\d]/g) && signINpassword.length >= 8)) 
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password is incorrect
        </div>`;
        return false;
    }
   
    else
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML='';
        return true;
    }
      
    


}








