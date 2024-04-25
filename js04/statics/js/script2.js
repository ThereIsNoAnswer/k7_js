document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons")
    const userImg = document.querySelector("#userImg")
    const cpuImg = document.querySelector("#cpuImg")
    const resultText=document.querySelector("#resultText")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let userIndex = button.textContent.substring(0, 1)
            let cpuIndex = Math.floor(Math.random() * 6) + 1
           

            userImg.setAttribute("src", `statics/img/${userIndex}.png`)
            cpuImg.setAttribute("src", `statics/img/${cpuIndex}.png`)

            if(userImg.src==cpuImg.src){
                resultText.textContent="success"
            }else{
                resultText.textContent="fail"
                
            }
        })


    });
})