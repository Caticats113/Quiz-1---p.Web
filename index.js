let word = document.getElementById("word")
word.style.color="red"

let letters = document.getElementById("letters")
letters.style.color="green"

let reset = document.getElementById("reset")
reset.style.color="blue"
reset.addEventListener("click", (() => letters.value = ""))

let wordNum = Math.floor(3*Math.random())
console.log(wordNum)
let wordslist = ["hola", "como", "estas"]

let randomBut = document.getElementById("random")
randomBut.style.color="gray"
randomBut.addEventListener("click", (()=>{
    wordNum = Math.floor(3*Math.random())
console.log(wordNum)
setWord(wordNum)
}))

let errorCount = document.getElementById("errorCount")
let errors = 0
errorCount.textContent = "Errors = " + errors;

let setWord = (wordNum) => {
    correctWord = wordslist[wordNum].split("")
    guideWord = [...correctWord].sort()

    word.textContent = " "

    guideWord.forEach((l) => {
        word.textContent += l
    })}

letters.addEventListener("change", ((e) => {
    console.log(letters.value)
    let trial = letters.value.split("")
    let i = 0
    trial.forEach((l) => {
        if(l===correctWord[i]) {
            i++
        } else{
            window.alert("wrong letter")
            errors ++
            errorCount.textContent = "Errors = " + errors
        }
    })
}))

setWord(wordNum)