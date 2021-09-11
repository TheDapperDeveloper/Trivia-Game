const generate = document.querySelector(".generate")
const searchURL = "https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple"

async function generateQuestion () {
    const mainContainer = document.querySelector(".main-container")
    const secContainer = document.querySelector(".sec-container")

    const generateQuestion = await fetch(`${searchURL}`)
    const jsonQuestion = await generateQuestion.json();
    console.log(jsonQuestion.results[3].question)
    console.log(jsonQuestion.results[3].incorrect_answers)
    console.log(jsonQuestion.results[3].correct_answer)
    mainContainer.append(secContainer)
    secContainer.append(jsonQuestion.results[3].question)
}

generate.addEventListener("click", () => generateQuestion())