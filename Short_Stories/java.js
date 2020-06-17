
// console.log(2)
// var text =  document.body.querySelector('menu')
// console.log(text)
// document.body.appendChild( document.createElement( "span" ) ).classList.add("exMenu")
// document.body.querySelectorAll("section")[0].children[0].children[1].appendChild( document.createElement( "div" ) ).classList.add("exMenu")
// const exMenu = document.body.querySelector("section.exMenu")
// exMenu.textContent = "loacl"
// menuClick()
// checkClick()
// console.log(document.body.querySelector("menu").textContent)

const miMenu = document.body.querySelector(".miMenu")
miMenu.addEventListener("click" , miniclick)

function miniclick(e){
    if(e.target.textContent == "تسجيل دخول"){
        document.body.querySelectorAll("span")[5].classList.add("background")
        document.body.querySelectorAll("span")[5].firstElementChild.style.display = "grid"
        console.log(e.target.textContent)
    }else if(e.target.textContent == "حسابي"){
        document.body.style = "overflow: hidden"
        document.body.querySelector("section").children[5].style = "background-color:  #db00ff54 ; position: fixed; width: 100% ; height: 100%"
        document.body.querySelector("section").children[5].firstElementChild.style = "display: grid;grid-template-columns: 1fr;grid-template-rows: 1fr 1fr 1fr 1fr 1fr;justify-items: center"
    }else if(e.target.textContent == "اشترك معنا"){
        console.log(e.target.textContent)
        document.body.querySelectorAll("span")[5].classList.add("background")
        document.body.querySelectorAll("span")[5].firstElementChild.style.display = "grid"
        document.body.querySelectorAll("span")[5].firstElementChild.children[0].textContent = "انشاء الان حساب ارلاند تون"
        document.body.querySelectorAll("span")[5].firstElementChild.children[4].textContent = "اشترك الان"
        document.body.querySelectorAll("span")[5].children[0].children[1].style.display = "none";
        document.body.querySelectorAll("span")[5].children[0].children[5].textContent = "لديك بلفعل حساب ؟ سجل دخول";
        // document.body.querySelectorAll("span")[0].children[0].children[4].style.display = "none";
        document.body.querySelectorAll("span")[5].children[0].children[2].setAttribute("type","text");
        document.body.querySelectorAll("span")[5].children[0].children[3].setAttribute("type","text");
        document.body.querySelectorAll("span")[5].children[0].children[2].setAttribute("placeholder" , "Your Name");
        document.body.querySelectorAll("span")[5].children[0].children[3].setAttribute("placeholder" , "Your Family Name")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","email")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","password")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","password")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","date")
        document.body.querySelectorAll("span")[5].children[0].children[2].style="grid-area:3/2/4/3";
        document.body.querySelectorAll("span")[5].children[0].children[3].style="grid-area:3/3/4/4";
        document.body.querySelectorAll("span")[5].children[0].children[4].style="grid-area:9/2/10/-2";
        document.body.querySelectorAll("span")[5].children[0].children[5].style="grid-area:11/2/10/-2";
        document.body.querySelectorAll("span")[5].children[0].children[7].style="grid-area:5/2/5/3";
        document.body.querySelectorAll("span")[5].children[0].children[8].style="grid-area:5/3/5/4";
        document.body.querySelectorAll("span")[5].children[0].children[9].style="grid-area:7/3/8/4";
        document.body.querySelectorAll("span")[5].children[0].children[10].style="grid-area:7/2/8/3";
        document.body.querySelectorAll("span")[5].children[0].children[8].setAttribute("placeholder","Your Password")
        document.body.querySelectorAll("span")[5].children[0].children[7].setAttribute("placeholder","Your E-mail")
        document.body.querySelectorAll("span")[5].children[0].children[9].setAttribute("placeholder","conferm Password")
        document.body.querySelectorAll("span")[5].children[0].children[10].setAttribute("placeholder","your Date")
        document.body.querySelectorAll("span")[5].children[0].style.gridTemplateRows = "2rem 2fr 1fr 2rem 1fr 2rem 1fr 2rem 1fr 1fr 2rem";
    }
}

const login = document.body.querySelectorAll("span")[5];
login.addEventListener("click" , closeclick)

function closeclick(e){
    if(e.target.textContent == "اغلاق"){
        document.body.querySelectorAll("span")[5].classList.remove("background")
        document.body.querySelectorAll("span")[5].firstElementChild.style.display = "none"
        console.log(e.target.textContent)
    }else if(e.target.textContent == "ليس لديك حساب على موقعنا ؟ اشترك الان"){
        console.log(e.target.textContent)
        document.body.querySelectorAll("span")[5].firstElementChild.children[0].textContent = "انشاء الان حساب ارلاند تون"
        document.body.querySelectorAll("span")[5].firstElementChild.children[4].textContent = "اشترك الان"
        document.body.querySelectorAll("span")[5].children[0].children[1].style.display = "none";
        document.body.querySelectorAll("span")[5].children[0].children[5].textContent = "لديك بلفعل حساب ؟ سجل دخول";
        // document.body.querySelectorAll("span")[0].children[0].children[4].style.display = "none";
        document.body.querySelectorAll("span")[5].children[0].children[2].setAttribute("type","text");
        document.body.querySelectorAll("span")[5].children[0].children[3].setAttribute("type","text");
        document.body.querySelectorAll("span")[5].children[0].children[2].setAttribute("placeholder" , "Your Name");
        document.body.querySelectorAll("span")[5].children[0].children[3].setAttribute("placeholder" , "Your Family Name")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","email")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","password")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","password")
        document.body.querySelectorAll("span")[5].children[0].appendChild( document.createElement("input")).setAttribute("type","date")
        document.body.querySelectorAll("span")[5].children[0].children[2].style="grid-area:3/2/4/3";
        document.body.querySelectorAll("span")[5].children[0].children[3].style="grid-area:3/3/4/4";
        document.body.querySelectorAll("span")[5].children[0].children[4].style="grid-area:9/2/10/-2";
        document.body.querySelectorAll("span")[5].children[0].children[5].style="grid-area:11/2/10/-2";
        document.body.querySelectorAll("span")[5].children[0].children[7].style="grid-area:5/2/5/3";
        document.body.querySelectorAll("span")[5].children[0].children[8].style="grid-area:5/3/5/4";
        document.body.querySelectorAll("span")[5].children[0].children[9].style="grid-area:7/3/8/4";
        document.body.querySelectorAll("span")[5].children[0].children[10].style="grid-area:7/2/8/3";
        document.body.querySelectorAll("span")[5].children[0].children[8].setAttribute("placeholder","Your Password")
        document.body.querySelectorAll("span")[5].children[0].children[7].setAttribute("placeholder","Your E-mail")
        document.body.querySelectorAll("span")[5].children[0].children[9].setAttribute("placeholder","conferm Password")
        document.body.querySelectorAll("span")[5].children[0].children[10].setAttribute("placeholder","your Date")
        document.body.querySelectorAll("span")[5].children[0].style.gridTemplateRows = "2rem 2fr 1fr 2rem 1fr 2rem 1fr 2rem 1fr 1fr 2rem";
    }
}


var check = false

const menufu = document.body.querySelector(".mClick") 
menufu.addEventListener("click" , menuClick)
function menuClick(e){
    // console.log(10)

    if(e.target.textContent == "الصفحة الرئيسية" && check == false){
        console.log(e.target.textContent)
        // console.log(check)
        check = true
        document.body.createElement("section").setAttribute("type","email")

    }else if(e.target.textContent == "شاهد الان" && check == false){
        console.log(e.target.textContent)
        check = true

    }else if(e.target.textContent == "اخر الاخبار" && check == false){
        console.log(e.target.textContent)
        check = true
       
    }else if(e.target.textContent == "العاب" && check == false){
        console.log(e.target.textContent)
        check = true

    }
    else if(e.target.textContent == "المتجر" && check == false){
        console.log(e.target.textContent)
        check = true
    }
    else if(e.target.textContent == "الصفحة الرئيسية" && check == true){
        console.log(e.target.textContent)
        console.log(check)
        check = false

    }else if(e.target.textContent == "شاهد الان" && check == true){
        console.log(e.target.textContent)
        check = false

    }else if(e.target.textContent == "اخر الاخبار" && check == true){
        console.log(e.target.textContent)
        check = false

    }else if(e.target.textContent == "العاب" && check == true){
        console.log(e.target.textContent)
        check = false

    }else if(e.target.textContent == "المتجر" && check == true){
        console.log(e.target.textContent)
        check = false
        

    }
    
}

    // document.body.querySelector("section")[0].children[5]


// tempimg()
// function tempimg(){
//     var sec =  new Date().getSeconds() 
//     // sec = 0
//     // console.log(sec)
//     // document.body.querySelectorAll("section")[0].children[0]
//     // if(sec == 4){

//     // }
//     setTimeout(tempimg() , 1000)
//     // console.log(sec)
// }




// عداد لتغير الصورة
var startDate;
var check = true;
var startDate = Date.now();
myClock()
function myClock(){

    const diff = Date.now()-startDate,
          akt = diff % (24*60*60*1000),
          hour = Math.floor( akt / (60 * 60 * 1000)),
          minute = Math.floor( ( akt - ( hour * 60 * 60000 ) ) / 60000 ),
          second = Math.floor( ( akt - ( hour * 60 * 60000 ) - ( minute * 60000 ) ) / 1000 );

//     console.log(diff);

   	 console.log(second);	

	if( second >= 5){
        check = false
        document.body.querySelectorAll("section")[0].children[1].firstElementChild.src = "img/cartoon2.jpg" ;

	}	
		
	if(check == true){
		setTimeout(myClock,100);
	}
}



// صورة الشخصية للحساب
// readURL();
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah')
//                 .attr('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }


