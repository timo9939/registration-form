
const resultDisplay=document.getElementById("result-list")
const surname=document


new URLSearchParams(window.location.search).forEach((value,name)=>{
    resultDisplay.append(`${surName}:${value}`)

    resultDisplay.append(document.createElement("br"))
})