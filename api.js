const generate = document.querySelector(".generate")
const viewAnswer = document.querySelector(".answer")
viewAnswer.innerHTML= "Get answer"
const searchURL = "https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple"

async function generateQuestion () {
    const mainContainer = document.querySelector(".main-container")
    const secContainer = document.querySelector(".sec-container")
    const optContainer = document.querySelector("option-container")
    const choiceContainer = document.createElement("div")
    choiceContainer.class = "choices"
    const answerContainer = document.createElement("div")
    answerContainer.class = "answer"
    const generateQuestion = await fetch(`${searchURL}`)
    const jsonQuestion = await generateQuestion.json();

    mainContainer.append(secContainer)
    secContainer.append(jsonQuestion.results[3].question)
    
    const optData = jsonQuestion.results[3].incorrect_answers;
    const options = document.getElementById("option-container");
    optData.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        options.appendChild(li);  
        mainContainer.append(optContainer)
    });

    const ansData = jsonQuestion.results[3].correct_answer;
    const answer = document.getElementById("option-container");
    const newLi = document.createElement("li")
    newLi.innerText = ansData
    answer.appendChild(newLi)

}
    
    // mainContainer.append(choiceContainer)
    // choiceContainer.append(answers)
    // choiceContainer.append(jsonQuestion.results[3].incorrect_answers)
    // choiceContainer.append(jsonQuestion.results[3].correct_answer)
    




generate.addEventListener("click", () => generateQuestion())

