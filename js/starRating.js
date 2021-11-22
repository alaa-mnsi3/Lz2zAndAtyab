var x= document.querySelectorAll('.star-rating');
for(let i=0 ;i<x.length ;i++)
{
  x[i].addEventListener('click',function()
  {
    console.log(i)
    x[i].classList.add("active");
  
    for(let j=i ; j<x.length ; j++)
    {
      x[j].classList.add("active");
    }
    for( let k=0 ; k<i ;k++)
    {
      x[k].classList.remove("active");
    }
  })
}



