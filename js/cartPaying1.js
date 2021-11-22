var move=false;
document.querySelector('.submitAddAddress').addEventListener('click',function()
{
    let nameUser=document.forms["addAddress"]["yourName"].value;
    let phoneUser = document.forms["addAddress"]["yourPhone1"].value;
    let addressdetails = document.forms["addAddress"]["addressDetails"].value;
    

    if(nameUser.trim()=='' || phoneUser.trim()=="" || addressdetails.trim()=="")
    {
        $('.alert-error').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> You must fillout all fields !! 
        </div>`) ;
        move =false;
    }
    else
    {
        $('.alert-error').html('');
        move=true;
    }
    if(move)
    {
        window.location.href='cartPaying2.html'
    }

})