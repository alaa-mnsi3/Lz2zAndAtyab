//دى عشان يعمل validata on reassign form

let submitbtn = document.querySelector(".submit");
submitbtn.addEventListener("click" , e =>
{
    e.preventDefault();
    formvalidate();
    console.log(formvalidate());
    if(formvalidate())
    {
        window.location.href = "../pages/signIn.html";
    }
}
)

function formvalidate()
{
    let form=document.querySelector('.form-reassign-password form');
    console.log(form);
    let reassignPassword=document.forms["form-reassignpassword"]["password"].value;
    let reassignrePassword=document.forms["form-reassignpassword"]["Surepassword"].value;

    
    // console.log(document.querySelector('input[name="yourName"]').parentNode.children[1])


    if(reassignPassword.trim()=="")
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password must be filledout
        </div>`;
        return false;
    }
    else if (!(reassignPassword.match(/[a-z]/g) && reassignPassword.match( 
                    /[A-Z]/g) && reassignPassword.match( 
                    /[0-9]/g) && reassignPassword.match( 
                    /[^a-zA-Z\d]/g) && reassignPassword.length >= 8)) 
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div style="margin-top:-28px" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> Your password must be larger than 8 letters and contain'@-$-%-#'
        </div>`;
        return false;

    }
    else if((reassignPassword.match(/[a-z]/g) && reassignPassword.match( 
        /[A-Z]/g) && reassignPassword.match( 
        /[0-9]/g) && reassignPassword.match( 
        /[^a-zA-Z\d]/g) && reassignPassword.length >= 8))
    {
        parentElemen=document.querySelector('input[name="password"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML='';
    }
    if(reassignrePassword.trim()=="")
    {
        parentElemen=document.querySelector('input[name="Surepassword"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> You must rewrite password must be filledout
        </div>`;
        return false;
    }
    else if(reassignrePassword!=reassignPassword)
    {
        parentElemen=document.querySelector('input[name="Surepassword"]').parentNode.parentNode.children[1];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
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








