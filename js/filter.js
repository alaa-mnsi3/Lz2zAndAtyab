data = [
	{
		"productname": "لحوم",
		"type": "استيك",
		"image": "../images/slider4.png",
	},
	{
		"productname": "لحوم",
		"type": "استيك",
		"image": "../images/slider4.png",
    },
	{
		"productname": "لحوم",
		"type": "استيك",
		"image": "../images/slider4.png"
	},
	{
		"productname": "لحوم",
		"type": "برجر",
		"image": "../images/slider4.png",
	},
	{
		"productname": "لحوم",
		"type": "برجر",
		"image": "../images/slider4.png"
    },
	{
		"productname": "لحوم",
		"type": "مشوى",
		"image": "../images/slider4.png"
	},
	{
		"productname": "لحوم",
		"type": "على الفحم",
		"image": "../images/slider4.png"
    },

    // ذبائح
    {
		"productname": "ذبائح",
		"type": "لحم بقري",
		"image": "../images/slider3.png",
	},
	{
		"productname": "ذبائح",
		"type": "لحم جملى",
		"image": "../images/slider3.png",
    },
	{
		"productname": "ذبائح",
		"type": "لحم خروف",
		"image": "../images/slider3.png"
	},
	{
		"productname": "ذبائح",
		"type": "لحم بقري",
		"image": "../images/slider3.png",
	},
	{
		"productname": "ذبائح",
		"type": "لحم خروف",
		"image": "../images/slider3.png"
    },
	{
		"productname": "ذبائح",
		"type": "لحم جملى",
		"image": "../images/slider3.png"
	},
	{
		"productname": "ذبائح",
		"type": "لحم جملى",
		"image": "../images/slider3.png"
    },

    // ادوات
    {
		"productname": "ادوات",
		"type": "سكين",
		"image": "../images/slider2.png",
	},
	{
		"productname": "ادوات",
		"type": "مقص",
		"image": "../images/slider2.png"
    },
	{
		"productname": "ادوات",
		"type": "ادوات اخري",
		"image": "../images/slider2.png"
	},
	{
		"productname": "ادوات",
		"type": "سكين",
		"image": "../images/slider2.png"
    },

    // توابل
    {
		"productname": "توابل",
		"type": "شطه",
		"image": "../images/slider1.png",
	},
	{
		"productname": "توابل",
		"type": "كمون",
		"image": "../images/slider1.png"
    },
	{
		"productname": "توابل",
		"type": "ملح",
		"image": "../images/slider1.png"
	},
	{
		"productname": "توابل",
		"type": "فلفل",
		"image": "../images/slider1.png"
    },
];

let products="";
let productNames="";
let types="";

// create product
for (var i = 0; i < data.length; i++) {
	var productName = data[i].productname,
		type = data[i].type,
		image = data[i].image;
    console.log (type);

   products += `<div class="sec-col-4-1-card col-xl-4 col-md-6 col-sm-10 col-xs-9 product wow slideInLeft"  data-wow-duration="1s"  data-productname = '${productName}' data-type='${type}'>
      <div class="card sec-card">
      <div class="sec-card-img">
        <img src=${image} class="card-img-top" alt="...">
      </div>

      <!-- card-body consists of titles -->
      <div class="card-body sec-card-body">
        <span class="sec-card-body-top">${productName}</span>

        <!-- //غنوان الكارد -->
        <div class="card-title sec-card-body-title">
          <div class="stars-card">
            <span>4.5</span>
            <i class="fas fa-star"></i>
          </div>
          <a href="productPage.html" class="name-product">
          ${type} 1 كيلو
          </a>
        </div>

        <!-- price of card -->
        <p class="card-text card-price">
          ريال / كيلو
          <span>150.00</span> 
        </p>
        <p class="card-text card-price">100.00 ريال / كيلو</p>

      </div>
      <!-- end body card -->

      <!-- footer of card -->
      <div class="sec-card-footer">

        <a href="errorPage2.html" class="card-bag">
          <img src="../images/bag-card.svg"></i>
        </a>

        <div class="card-increment-decrement">
          <span class="increment">+</span>
          <span class="number">0</span>
          <span class="decrement">-</span>
        </div>
      </div>
      <span class="discard-card-swiper">خصم %5</span>
    </div>
   </div>` ;
           
   console.log(products);
}

document.getElementById('products').innerHTML=products;




// window.onscroll=function() {
//   var scrollPos = window.scrollY;
//   var top1 = document.getElementById('meat');
//   var top=top1.offsetTop;
//   console.log(scrollPos);
//   console.log(top)
//   if (scrollPos === top) {
//     document.getElementById('meat').classList.add('active');
//     console.log('alaaaaaaaaaaaa');

//     var filterName5=document.getElementById('meat').getAttribute('data-filter');
//     var filterval5=document.getElementById('meat').textContent;
//     filtersObject[filterName5] = filterval5;

//     let check=document.querySelectorAll('input[type="checkbox"]');
//     // check[i].classList.add('active');

//     var filters5="";
//     var filtersObject5={};
//     // ملىء الاوبجكت بالبحث عنه
//     for (var key in filtersObject5)
//     {
//         if (filtersObject5.hasOwnProperty(key)) {
//         filters5 += `[data-${key}=${filtersObject5[key]}]`;
//         }
//     }

//     // التاكد هل الاوبجكت مليان وتم الضغط على شىء للبحث ام لا
//     if(filters5=="")
//     {
//         $(".product").show()
//     }else 
//     {
//         $(".product").hide();
//         $(".product").hide().filter(filters5).show();
//     }
//     // check to meats
//     for(let j=0;j<filtertypep.length;j++)
//     {
//       filtertypep[j].addEventListener('change',function()
//       {
//         var filtertype5=filtertypep[j].getAttribute('data-filter');
//         var filtervalType5=filtertypep[j].parentNode.textContent;
//         var filtervalType5=filtervalType5.split(" ").join('');
//         filtertypep[j].parentNode.classList.toggle('active');
//         filtersTypes[filtertype5]=filtervalType5.trim();
//         var filterstype5="";
//         for (var key in filtersTypes)
//         {
//             if (filtersTypes.hasOwnProperty(key)) {
//             filterstype5 += `[data-${key}=${filtersTypes[key]}]`;
//             }
//         }
//         console.log(filtersTypes);
//         console.log(filterstype5);
//         if(this.checked)
//         {
//           this.style.color="var(--primary-color)";
//           if(filterstype5 =="")
//           {
//             delete filtersTypes[filterstype5];
//               $(".product").show();
//           }else
//           {
//               $(".product").hide();
//               document.querySelectorAll('.product').forEach(one => 
//                 {
//                   var xx= one.getAttribute('data-type');
//                   var m=xx.split(' ').join('');
//                   one.setAttribute('data-type',m);
//                 })
//               $(".product").hide().filter(filterstype5).show();
//               delete filtersTypes[filterstype5];
//           }
//         }else
//         {
//           this.style.color="var(--text-secondary-color)";
//           delete filtersTypes[filterstype5];
//           $(".product").show();
//         }
      
//       })
//     }
//   }
// };






let filterProd= document.querySelectorAll('.filter');
let filtertypep= document.querySelectorAll('.filter1');
var filtersObject={};
var filtersTypes={};




// filter code
for(let i=0; i<filterProd.length;i++)
{ 

    filterProd[i].addEventListener('click',function()
    {
      var filterName=filterProd[i].getAttribute('data-filter');
      var filterval=filterProd[i].textContent;
      filtersObject[filterName] = filterval;

      let check=document.querySelectorAll('input[type="checkbox"]');
      // check[i].classList.add('active');

      var filters="";
      // ملىء الاوبجكت بالبحث عنه
      for (var key in filtersObject)
      {
          if (filtersObject.hasOwnProperty(key)) {
          filters += `[data-${key}=${filtersObject[key]}]`;
          }
      }

      // التاكد هل الاوبجكت مليان وتم الضغط على شىء للبحث ام لا
      if(filters=="")
      {
          $(".product").show()
      }else 
      {
          $(".product").hide();
          $(".product").hide().filter(filters).show();
      }
    
    
    
      // عندما يتم الضغط ع نوع من القسم الذى تم اختياره
      for(let j=0;j<filtertypep.length;j++)
      {
        // عند الضغط على القسم تتم الفلتره
        filtertypep[j].addEventListener('change',function()
        {

          var filtertype=filtertypep[j].getAttribute('data-filter');
          var filtervalType=filtertypep[j].parentNode.textContent;
          var filtervalType1=filtervalType.split(" ").join('');
          filtersTypes[filtertype]=filtervalType1.trim();
          var filterstype="";
          for (var key in filtersTypes)
          {
              if (filtersTypes.hasOwnProperty(key)) {
              filterstype += `[data-${key}=${filtersTypes[key]}]`;
              }
          }
          console.log(filtersTypes);
          console.log(filterstype);
          if(this.checked)
          {
            
            if(filters =="")
            {
                $(".product").show();
            }else
            {
              if(filterstype!="")
              {
                this.parentNode.classList.add('active');
                $(".product").hide();
                document.querySelectorAll('.product').forEach(one => 
                  {
                    var xx= one.getAttribute('data-type');
                    var m=xx.split(' ').join('');
                    one.setAttribute('data-type',m);
                  })
                $(".product").hide().filter(filters).filter(filterstype).show();
              }
            }
          }else
          {
            this.parentNode.classList.remove('active');
            $(".product").hide().filter(filters).show();
          }
       
        })
      }
    });    
}


  
    



// دى بتاعه ظهور الاقسام الداخليه عند الضغط على الفسم
let depart=document.querySelectorAll('.depart');

for(let i=0; i<depart.length;i++)
{
  depart[i].addEventListener('click',function(){
    for(let j=0;j<document.querySelectorAll('.types-prod-num').length ;j++)
    {
      let x=document.querySelectorAll('.types-prod-num');
      let k;
    
      x[j].classList.remove('active');
      if(j==i)
      {
          k=i;
          x[k].classList.add('active');
      }
      depart.forEach(link =>
      {
          link.classList.remove('active');
          this.classList.add('active');
      })    
    }
  })
}

























// search in filter in header
///////////////////////////////////////////////

document.querySelector('.main-page').style.display="block";
document.querySelector('.filter-search').innerHTML=products;
document.querySelector('.filter-search').style.display='none';
var filtersObject2 = {};


document.querySelector('.filter-select').onchange = function() 
{
   
	var filterName2 =document.querySelector('.filter-select').getAttribute('data-filter'),
		filterVal2 = $(this).val();
      
	
	if (filterVal2 == "") {
		delete filtersObject2[filterName2];
    document.querySelector('.main-page').style.display="block";
	} else {
    document.querySelector('.main-page').style.display="none";
    filtersObject2[filterName2] = filterVal2;
	}
	
	var filters2 = "";
	
	for (var key in filtersObject2) {
	  	if (filtersObject2.hasOwnProperty(key)) {
			filters2 += "[data-"+key+"='"+filtersObject2[key]+"']";
	 	}
	}
	
    console.log(filters2);
    
	if (filters2 == "") {
		$(".product").hide();
	} else {
		$(".product").hide();
    $('.filter-search').show();
		$(".product").hide().filter(filters2).show();
	}


    // للبحث بعد اختيار القسم
    console.log(document.querySelector('.search-placeholder'))
    document.querySelector('.search-placeholder').addEventListener('keydown',function()
    {
        
        var filtersObject3={};
        var filters3="";
        var filterType3 =document.querySelector('.search-placeholder').getAttribute('data-filter'),
    		filterValTy3 = $(this).val().toLowerCase();
        console.log(filterType3);
        if (filterValTy3 == "") {
            delete filtersObject3[filterType3];
        } else {
            filtersObject3[filterType3] = filterValTy3;
        }
        for (var key in filtersObject3) {
            if (filtersObject3.hasOwnProperty(key)) {
              filters3 += "[data-"+key+"='"+filtersObject3[key]+"']";
           }
      }
          
        $(".productSearch").hide();
       console.log(filterValTy3); 
       console.log(document.querySelector('.search-placeholder'))
        var prods=document.querySelectorAll('.product');
       
        prods.forEach(one => 
        {
            var typePro = one.getAttribute('data-type').toLowerCase();
            console.log(typePro);

            if(filterVal2=="")
            {
                $('.filter-search').show();
                if (typePro.indexOf(filterValTy) > -1) {
                    console.log("alaaaaaaaaaaaaaaaa")
                    $(".productSearch").filter(filters3).show();
                }
            }else
            {
                if (typePro.indexOf(filterValTy3) > -1) {
                    console.log("alaaaaaaaaaaaaaaaa")
                    $(".product").hide().filter(filters2).filter(filters3).show();
                }
            }
          
        })


    })
};




// للبحث انفرادى اول ما تحمل الصفحه
document.querySelector('.input-search').addEventListener('keydown',function()
{
    var filterType =document.querySelector('.input-search').getAttribute('data-filter'),
    filterValTy = $(this).val().toLowerCase();
    console.log(filterType);
    document.querySelector('.main-page').style.display="none";
    
    $(".product").hide();
    console.log(filterValTy); 
    console.log(document.querySelector('.input-search'))
    var prods=document.querySelectorAll('.product');

    prods.forEach(one => 
    {
        var typePro = one.getAttribute('data-type').toLowerCase();
        console.log(typePro);
        if (typePro.indexOf(filterValTy) > -1) {
            console.log("alaaaaaaaaaaaaaaaa");
            $('.filter-search').show();
            one.style.display="block";
        }
    })


})


