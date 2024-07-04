let slide=document.querySelectorAll('.reviewCard')
let count=0;
// Dark,Ligth and user and Bar
let dark=document.getElementById('dark')
let user=document.getElementById('user')
let bar=document.getElementById('bar')
// Login
let loginBtn=document.getElementById('loginBtn')

// review Slide funn 
slide.forEach((slices,index)=>{
    slices.style.left=`${index*100}%`
})
function myFun(){
    slide.forEach(function(currValue){
        currValue.style.transform=`translate(-${count *100}%)`
    })
}
setInterval(()=>{
    count+=1;
    if(count == slide.length){
        count=0
    }
    myFun()
},2000)

// Dark Fun
dark.addEventListener("click",function(){
    document.querySelector("body").classList.toggle('active1')
})
//User None
user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle('active2')
})
// Bar Show Js
bar.addEventListener("click",function(){
    document.querySelector("ul").classList.toggle('showData')
})
// Login Btn
loginBtn.addEventListener("click" , function(){
    let email=document.getElementById('email')
    let pass=document.getElementById('pass')
    if(email == "" && pass == ""){
        alert("Please Enter Details")
    }
    else{
        alert("You Logged In")
    }
})