document.addEventListener("DOMContentLoaded",()=>{
    const button=document.querySelector("#button");
    const result=document.querySelector("#result");

    button.addEventListener("click",()=>{
        let numbers=[];
        let number
        
        while(numbers.length<7){
            number=Math.floor(Math.random()*45)+1;
            if(!numbers.includes(number)){
                numbers.push(number);
            }
        }
        let innerHtml=numbers.map(num=>
            `<span class="numbers numbers${parseInt(num/10)}">${num}</span>`
        )

        innerHtml.splice(6, 0, "<span> + </span>")

        innerHtml=innerHtml.join("")
        
        result.innerHTML=innerHtml
    })
})