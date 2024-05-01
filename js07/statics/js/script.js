document.addEventListener("DOMContentLoaded",()=>{
    const input         = document.querySelector("#input")
    const output        = document.querySelector("#output")
    const checkButton   = document.querySelector("#checkButton")
    const sumButton     = document.querySelector("#sumButton")
    
    output.disabled=true

    checkButton.addEventListener("click",(e)=>{
        e.preventDefault();
        let inputValue=input.value.replaceAll(" ","")

        if(inputValue==""){
            output.value="input is empty"
            return;
        }
        let palindrome=[...inputValue].reverse().join("")

        output.value=(inputValue==palindrome)? "is palindrome" : "is not palindrome"
    })

    sumButton.addEventListener("click",(e)=>{
        e.preventDefault();
        let result=0;
        let inputValue=input.value

        let splitValue=inputValue.split(/[A-Za-zㄱ-ㅎ가-힣\s]+/)
        for(let i of splitValue){
            let test=parseInt(i)
            if(!isNaN(test)) result+=parseInt(test)
        }
        output.value=result;
    })
})