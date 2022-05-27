const cards=document.querySelectorAll("#Education .card");
const paragraphs=document.querySelectorAll("#Education p");
const icon=document.querySelectorAll("#Education span i");
const header=document.querySelectorAll("#Education h5");
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        card.classList.toggle("cardshow");
    }) ; 
   
});
header.forEach((headerbg)=>{
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
            headerbg.classList.toggle("headerbg");
        })
    }) 
});
