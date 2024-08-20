window.addEventListener("scroll" , (e)=>{
    if(window.scrollY>100)
    {
        headerElement.classList.add("scroll-down")
    }
    else
    {
        headerElement.classList.remove("scroll-down")
    }
})