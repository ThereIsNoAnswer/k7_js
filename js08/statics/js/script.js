document.addEventListener("DOMContentLoaded",()=>{
    const addButtons=document.querySelectorAll(".addButtons")
    const deleteButtons=document.querySelectorAll(".deleteButtons")
    const changeButtons=document.querySelectorAll(".changeButtons")
    const output=document.querySelector("#output")

    output.disabled=true
    let obj={
        "item1" : "🚗",
        "item2" : "🚓",
        "item3" : "🚕",
        "item4" : "🛺",
        "item5" : "🍕",
        "item6" : "🍔",
        "item7" : "🍟",
        "item8" : "🌭",
    }

    let arr=[]
    for(let button of addButtons){
        button.addEventListener("click",(e)=>{
            e.preventDefault();

            arr.push(obj[button.textContent.replace("add","").trim()])
            output.value=arr.join(" ")
        })
    }

    for(let button of deleteButtons){
        button.addEventListener("click",(e)=>{
            e.preventDefault();
            arr=arr.filter(temp => temp!=obj[button.textContent.replace("delete","").trim()])
            output.value=arr.join(" ")
        })
    }

    for(let button of changeButtons){
        button.addEventListener("click",(e)=>{
            e.preventDefault();
            arr=arr.map(temp => (temp==obj[button.textContent.split(" ")[1]])? obj[button.textContent.split(" ")[3]] : temp)
            output.value=arr.join(" ")

        })
    }
})