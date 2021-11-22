// change style when click english
document.getElementById('language').addEventListener('click',function(){
    var language= document.getElementById('language');

    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');
  
    // set the attributes for link element 
    link.rel = 'stylesheet'; 
  
    link.type = 'text/css';
  
    link.href = 'css/mainTrans.css'; 

    if(language.getAttribute('data-language')=='english')
    {
        language.setAttribute('data-language','arabic');
        head.appendChild(link);
        document.getElementsByTagName('Html').setAttribute('lang','en');
    }
    else if(language.getAttribute('data-language')==='arabic')
    {
        document.getElementsByTagName("link")[11].remove();
        language.setAttribute('data-language','english');
    }

});