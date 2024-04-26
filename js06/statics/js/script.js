document.addEventListener("DOMContentLoaded",()=>{
    const inputSelect=document.querySelector("#inputSelect")
    const outputSelect=document.querySelector("#outputSelect")
    const input=document.querySelector("#input")
    const output=document.querySelector("#output")
    const inputLabel=document.querySelector("#inputLabel")
    const outputLabel=document.querySelector("#outputLabel")

    input.addEventListener("change",convert)
    inputSelect.addEventListener("change",convert)
    outputSelect.addEventListener("change",convert)

    output.disabled=true;
})

function convert(){
    let inputSelected=inputSelect.options[inputSelect.selectedIndex].value
    let outputSelected=outputSelect.options[outputSelect.selectedIndex].value

    let absoluteValue;
    let inputValue=parseFloat(input.value);
    let outputValue;

    if(input.value!=""){
        if(inputSelected=="C"){
            absoluteValue=inputValue+273.15
            inputLabel.textContent="℃"
        }else if(inputSelected=="F"){
            absoluteValue=((inputValue-32)*5/9)+273.15
            inputLabel.textContent="℉"
        }else if(inputSelected=="K"){
            absoluteValue=inputValue;
            inputLabel.textContent="°K"
        }

        if(outputSelected=="C"){
            outputValue=absoluteValue-273.15
            outputLabel.textContent="℃"
        }else if(outputSelected=="F"){
            outputValue=(absoluteValue-273.15)*9/5+32
            outputLabel.textContent="℉"
        }else if(outputSelected=="K"){
            outputValue=absoluteValue
            outputLabel.textContent="°K"
        }

        output.value=outputValue.toFixed(3);
    }
}