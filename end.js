const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const decision = document.querySelector("#decision").innerHTML(answer)
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

function results(mostRecentScore) {
    let answer = "";
  
    switch (val) {
      case 0-200:
      answer = "Looks like bicycle is your thing";
      break;
    case 300-400:
      answer = "You deserve Nissan Micra";
      break;
    case 500-700:
      answer = "Your car is BMW 3";
      break;
    case 800-1000: 
      answer = "Your car is E63 AMG";
      break;
    case 1100-1200: 
      answer = "Your car is Lamborghini Aventador";
      break;
      case 1300: 
      answer = "You can pick any car you like";
      break;
    }
    return decision;
  }

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    
    window.location.assign('index.html')
}