function appendBtn(id, parent, text, className, func){
    let btn=document.createElement("button")
    btn.textContent=text;
    if(className!="") btn.classList.add(className)
    if(id!="") btn.id=id
    btn.addEventListener("click",func)
    parent.appendChild(btn)
}

document.addEventListener("DOMContentLoaded",()=>{
    let divMsg=document.querySelector("#msg")
    let btDiv=document.querySelector("#btDiv")

    for(let i=0;i<3;i++){
        appendBtn("", btDiv,`button${i+1}`,"buttons", ()=>{
            divMsg.textContent=`button${i+1}`
        })
    }

    appendBtn("", btDiv, "toggle", "buttons", ()=>{
        let temp=divMsg.textContent
        temp=temp.trim()
        if(temp=="") divMsg.textContent="toggle"
        else divMsg.textContent=""
    })

    for(let i=0;i<2;i++){
        appendBtn("", btDiv,`button2${i+1}`,"buttons", ()=>{
            if(i==0) divMsg.textContent="button2"
            else divMsg.textContent=""
        })
    }

    
})

