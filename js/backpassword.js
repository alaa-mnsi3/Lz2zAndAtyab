let submitbtn = document.querySelector(".submit");
submitbtn.addEventListener("click" , e=>{
    e.preventDefault();
    formvalidate();
    console.log(formvalidate());
    if(formvalidate())
    {
        window.location.href = "../pages/reassignPassword.html";
    }
}
)
function formvalidate()
{
    let backnum1=document.forms["form-backpassword"]["num-password-1"].value;
    let backnum2=document.forms["form-backpassword"]["num-password-2"].value;
    let backnum3=document.forms["form-backpassword"]["num-password-3"].value;
    let backnum4=document.forms["form-backpassword"]["num-password-4"].value;

    if(backnum1 && backnum2 && backnum3 && backnum4)
    {
        return true;
    }
    else
    {
        parentElemen=document.querySelector('input[name="num-password-1"]').parentNode.parentNode.children[0];
        parentElemen.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention!</strong> You must be filled out
        </div>` ;
        return false;
    }
}

// ======================
let qusetionForReSend=document.querySelector('.qusetionForReSend');
qusetionForReSend.addEventListener('click',function(){
    let timeblock=document.querySelector('.question > span');
    console.log(timeblock);
    timeblock.style.display='inline-block';
    let twominutes=60*2;
    let time=document.querySelector('.time');
    startTimer(twominutes,time);

});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer=duration;
        }
    }, 1000);
}

