let question= document.querySelectorAll('.questions');
let answer = document.querySelectorAll('.answer');

for(let i=0; i<question.length ; i++)
{
    question[i].addEventListener('click',function()
    {
        question.forEach(qs => {
            qs.classList.remove('active');
        })
        this.classList.add('active');
        answer.forEach(ans=>
        {
            ans.classList.remove('active');
        })
        answer[i].classList.add('active');
    })
}


for(let i=0; i<answer.length ; i++)
{
    answer[i].addEventListener('click',function()
    {
        answer.forEach(answ => {
            answ.classList.remove('active');
        })
        this.classList.remove('active');
        question[i].classList.remove('active');
    })
}