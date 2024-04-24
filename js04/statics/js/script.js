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
    
    for(let i=0;i<6;i++){
        appendBtn("",btDiv,`select ${i+1}`,"buttons",()=>{
            let resultImg=document.querySelector("#resultImg")
            let selectedImg=document.querySelector("#selectedImg")
            let resultText=document.querySelector("#resultText")
            
            let index=Math.floor(Math.random()*6)+1
            resultImg.src=`statics/img/${index}.png`
            resultImg.alt=`${index}`

            selectedImg.src=`statics/img/${i+1}.png`
            selectedImg.alt=`${i+1}`

            if(index==i+1) resultText.textContent="success"
            else resultText.textContent="fail"
        })
    }
    
})