function appendBtn(id, parent, text, className, func){
    let btn=document.createElement("button")
    btn.textContent=text;
    if(className!="") btn.classList.add(className)
    if(id!="") btn.id=id
    btn.addEventListener("click",func)
    parent.appendChild(btn)
}

document.addEventListener("DOMContentLoaded",()=>{
    let btDiv=document.querySelector("#btDiv")

    appendBtn("",btDiv,"roll","buttons",()=>{
        let resultImg=document.querySelector("#resultImg")
        let index=Math.floor(Math.random()*6)+1
        resultImg.src=`statics/img/${index}.png`
        resultImg.alt=`${index}`
    })
})