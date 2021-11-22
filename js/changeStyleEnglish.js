// change style when click english

console.log(document.getElementById('language'))
var language= document.getElementById('language');
language.addEventListener('click',function(){
   

    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');
  
    // set the attributes for link element 
    link.rel = 'stylesheet'; 
  
    link.type = 'text/css';
  
    link.href = '../css/mainTrans.css'; 

    if(this.getAttribute('data-language')=='english')
    {
        this.setAttribute('data-language','arabic');
        head.appendChild(link);
    }
    else if(this.getAttribute('data-language')==='arabic')
    {
        document.getElementsByTagName("link")[10].remove();
        this.setAttribute('data-language','english');
    }

});