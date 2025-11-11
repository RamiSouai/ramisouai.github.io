import { loadQuestion } from '../common.mjs'
import { Questions } from './practice_data.mjs'

const State = {
  currentQuestionIndex: 0,
}

function setHeader () {
  const headerContent = `Practice Question ${State.currentQuestionIndex + 1}`
  const header = document.getElementById('question-header')
  header.innerHTML = headerContent
}

function loadPracticeQuestion () {
  setHeader()
  loadQuestion(Questions.at(State.currentQuestionIndex), proceedToNextQuestion)
}

function proceedToNextQuestion () {
    State.currentQuestionIndex++
    if (State.currentQuestionIndex >= Questions.length) {
        finish()
    }
    
    loadPracticeQuestion()
}

function finish () {
  alert('Practice round done! You will now proceed to the survey')
  window.location.href = "/survey"
}

loadPracticeQuestion()
