const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]'),
    links=document.querySelectorAll(".Menu a"),
    nav=document.querySelector("nav"),
    Menu=document.querySelector(".Menu "),
    hangarbar=document.querySelector(".hanbargar");
    const homebutton=document.getElementsByName("buttom");

toggleSwitch.addEventListener('change',()=>{
    document.body.classList.toggle("darkmood");
    links.forEach(link => {
       link.classList.toggle("Menudarkmood") ;
    });
    nav.classList.toggle("navBg");
    Menu.classList.toggle("Menudarkmood");
});
hangarbar.addEventListener('click',()=>{
    Menu.classList.toggle("slidebar");
})

// ScrollReveal 
var boxReveal = {
    delay    : 200,
  };
  
  window.sr = ScrollReveal();
  sr.reveal('.Clients','#Home .context','#Home img', boxReveal);x
