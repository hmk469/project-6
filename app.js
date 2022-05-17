const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]'),
    links=document.querySelectorAll(".Menu a"),
    nav=document.querySelector("nav"),
    Menu=document.querySelector(".Menu "),
    hangarbar=document.querySelector(".hanbargar");
toggleSwitch.addEventListener('change',()=>{
    document.body.classList.toggle("darkmood");
    links.forEach(link => {
       link.classList.toggle("Menudarkmood") ;
    });
    Menu.classList.toggle("slidebardarkmood");
    nav.classList.toggle("navBg");
});
hangarbar.addEventListener('click',()=>{
    Menu.classList.toggle("slidebar");
  
})
