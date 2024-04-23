

document.addEventListener("DOMContentLoaded",()=>{
    let divMsg=document.querySelector("#msg")
    let btn=document.querySelectorAll(".btn")
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",()=>{
            divMsg.innerHTML=`<h1>Test${i+1}</h1>`
        })
    }
})

