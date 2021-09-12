const generate = document.querySelector(".generate")
const viewAnswer = document.querySelector(".answer")
viewAnswer.innerHTML= "Get answer"
const searchURL = "https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple"

async function generateQuestion () {
    const mainContainer = document.querySelector(".main-container")
    const secContainer = document.querySelector(".sec-container")
    const choiceContainer = document.createElement("div")
    choiceContainer.class = "choices"
    const answerContainer = document.createElement("div")
    answerContainer.class = "answer"
    const generateQuestion = await fetch(`${searchURL}`)
    const jsonQuestion = await generateQuestion.json();

    console.table(jsonQuestion.results[3].question)
    console.table(jsonQuestion.results[3].incorrect_answers)
    console.table(jsonQuestion.results[3].correct_answer)
    mainContainer.append(secContainer)
    secContainer.append(jsonQuestion.results[3].question)
    
    const ansData = jsonQuestion.results[3].incorrect_answers;
    console.log(jsonQuestion.results[3].incorrect_answers)
    const ansString = ''
    for (const answer of ansData) {
        ansString += `<ol>`;
        ansData += `<li>${answer}</li>`
        ansString +=`</ol>`;
    }
    
    
    mainContainer.append(choiceContainer)
    choiceContainer.append(ansString)
    choiceContainer.append(jsonQuestion.results[3].incorrect_answers)
    choiceContainer.append(jsonQuestion.results[3].correct_answer)
    
}



generate.addEventListener("click", () => generateQuestion())

