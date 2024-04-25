let answer;
document.addEventListener("DOMContentLoaded",()=>{
    start();
    const guessButton=document.querySelectorAll(".guessButton")[0]
    const retryButton=document.querySelectorAll(".retryButton")[0]
    const input=document.querySelector(".input")
    const resultImg=document.querySelectorAll(".resultImg")[0]

    retryButton.style.visibility="hidden"
    guessButton.addEventListener("click",()=>{
        
        if(input.value===""){
            alert("숫자를 입력하세요")
            input.focus();
        }else{
            let guess=parseInt(input.value)
            if(answer>guess){
                resultImg.src="statics/img/up.png"
            }else if(answer<guess){
                resultImg.src="statics/img/down.png"
            }else{
                resultImg.src="statics/img/ok.png"
                retryButton.style.visibility="visible"
                guessButton.disabled=true
            }
        }
        
    })

    retryButton.addEventListener("click",()=>{
        retryButton.style.visibility="hidden"
        start();
        resultImg.src="statics/img/what.png"
        input.value="";
        guessButton.disabled=false
    })

    input.addEventListener("change",()=>{
        let guess=input.value===""? 0 : parseInt(input.value)
        if(guess>100)
        alert("100을 초과할 수 없습니다.")
        input.focus();
        input.value=100
    })
})

function start(){
    answer=Math.floor(Math.random()*100)+1;
    console.log(answer)
}