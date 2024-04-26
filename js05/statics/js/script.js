let answer;
document.addEventListener("DOMContentLoaded",()=>{
    getRandomNumber();
    const guessButton=document.querySelectorAll(".guessButton")[0]
    const input=document.querySelector(".input")

    let flag=true;
    let imgName="what";
    guessButton.addEventListener("click",()=>{
        
        if(input.value===""){
            alert("숫자를 입력하세요")
            input.focus()
        }else{
            let guess=parseInt(input.value)
            if(guess>100){
                alert("100을 초과할 수 없습니다.")
                input.value=""
                input.focus()
            }else if(0>guess){
                alert("0보다 낮을 수 없습니다.")
                input.value=""
                input.focus()
            }else if(answer>guess){
                imgName="up"
                onfocus=input.select()
            }else if(answer<guess){
                imgName="down"
                onfocus=input.select()
            }else{
                imgName="good"
                input.disabled=true
                if(flag){
                    flag=false;
                    guessButton.textContent="re?"
                }else{
                    flag=true;
                    getRandomNumber();
                    input.disabled=false
                    imgName="what"
                    guessButton.textContent="check"
                    input.value=""
                    input.focus()
                }
            }
        }
        resultImageChange(imgName)
    })

    document.addEventListener("keydown",(e)=>{
        if(e.key=="Enter"){
            if(document.activeElement==input){
                guessButton.click();
            }
        }
    })
})

function getRandomNumber(){
    answer=Math.floor(Math.random()*100)+1;
    console.log(answer)
}

function resultImageChange(input){
    const resultImg=document.querySelectorAll(".resultImg")[0]
    resultImg.src=`statics/img/${input}.png`
}