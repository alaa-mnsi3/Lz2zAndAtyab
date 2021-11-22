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

   products += ` <!-- code first slide with touch --> 
   <div class="sec-col-4-1-card productSearch wow bounceInDown"  data-wow-duration="2s" data-productname=${productName} data-type=${type}>
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

         <a href=""errorPage2.html" class="card-bag">
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
   </div>
   <!-- end code -->` ;
}



document.querySelector('.main-page').style.display="block";
document.querySelector('.filter-search').innerHTML=products;
document.querySelector('.filter-search').style.display='none';
var filtersObject = {};


document.querySelector('.filter-select').onchange = function() 
{
   
	var filterName =document.querySelector('.filter-select').getAttribute('data-filter'),
		filterVal = $(this).val();
    console.log(filterName);
	
	if (filterVal == "") {
		delete filtersObject[filterName];
        document.querySelector('.main-page').style.display="block";
	} else {
        document.querySelector('.main-page').style.display="none";
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
    console.log(filters);
    
	if (filters == "") {
		$(".productSearch").hide();
	} else {
		$(".productSearch").hide();
        $('.filter-search').show();
		$(".productSearch").hide().filter(filters).show();
	}


    // للبحث بعد اختيار القسم
    console.log(document.querySelector('.search-placeholder'))
    document.querySelector('.search-placeholder').addEventListener('keydown',function()
    {
        
        var filtersObject1={};
        var filters1="";
        var filterType =document.querySelector('.search-placeholder').getAttribute('data-filter'),
    		filterValTy = $(this).val().toLowerCase();
        console.log(filterType);
        if (filterValTy == "") {
            delete filtersObject1[filterType];
        } else {
            filtersObject1[filterType] = filterValTy;
        }
        for (var key in filtersObject1) {
            if (filtersObject1.hasOwnProperty(key)) {
              filters1 += "[data-"+key+"='"+filtersObject1[key]+"']";
           }
      }
          
        $(".productSearch").hide();
       console.log(filterValTy); 
       console.log(document.querySelector('.search-placeholder'))
        var prods=document.querySelectorAll('.productSearch');
       
        prods.forEach(one => 
        {
            var typePro = one.getAttribute('data-type').toLowerCase();
            console.log(typePro);

            if(filterVal=="")
            {
                $('.filter-search').show();
                if (typePro.indexOf(filterValTy) > -1) {
                    console.log("alaaaaaaaaaaaaaaaa")
                    $(".productSearch").filter(filters1).show();
                }
            }else
            {
                if (typePro.indexOf(filterValTy) > -1) {
                    console.log("alaaaaaaaaaaaaaaaa")
                    $(".productSearch").hide().filter(filters).filter(filters1).show();
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
    
    $(".productSearch").hide();
    console.log(filterValTy); 
    console.log(document.querySelector('.input-search'))
    var prods=document.querySelectorAll('.productSearch');

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










