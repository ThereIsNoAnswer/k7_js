document.addEventListener("DOMContentLoaded",()=>{
    let lis=document.querySelectorAll("li")

    for(let i=0;i<lis.length;i++){
        lis[i].addEventListener("click",()=>{
            location.href=lis[i].childNodes[0].href
        })

        lis[i].addEventListener("mouseover",()=>{
            lis[i].style="cursor:pointer"
        })
    }
})
