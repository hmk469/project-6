let cards=document.querySelectorAll("#Education .card");
let paragraphs=document.querySelectorAll("#Education p");
let icon=document.querySelectorAll("#Education span i");
let header=document.querySelectorAll("#Education h5");
let plusIcon=document.querySelectorAll("#Education .fa-plus");

for (let i = 0;i < cards.length; i++){
    cards[i].addEventListener("click",()=>{
        cards[i].classList.toggle("cardshow");
        header[i].classList.toggle("headerbg");
        if(plusIcon[i].classList.contains("fa-plus")){
            plusIcon[i].classList.remove("fa-plus");
            plusIcon[i].classList.add("fa-minus");
        }
        else{
            plusIcon[i].classList.add("fa-plus");
            plusIcon[i].classList.remove("fa-minus");
        }
    });
   
}
