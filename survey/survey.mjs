import { CONTENT_TYPES, loadQuestion } from '../common.mjs'
import { articleQuestionsLength, Questions, redditQuestionsLength, twitterQuestionsLength } from './survey_data.mjs'

const State = {
  currentQuestionIndex: 22
}

function setHeader (questionType) {
  var headerContent
  switch (questionType) {
    case CONTENT_TYPES.TWITTER:
      headerContent = `Tweet ${State.currentQuestionIndex + 1}/${twitterQuestionsLength}`
      break
    case CONTENT_TYPES.REDDIT:
      headerContent = `Reddit ${State.currentQuestionIndex + 1 - twitterQuestionsLength}/${redditQuestionsLength}`
      break
    case CONTENT_TYPES.ARTICLE:
      headerContent = `Article ${State.currentQuestionIndex + 1 - twitterQuestionsLength - redditQuestionsLength}/${articleQuestionsLength}`
      break
    default:
      break
  }
  const header = document.getElementById('question-header')
  header.innerHTML = headerContent
}

function loadNextQuestion () {
  const currentQuestion = Questions.at(State.currentQuestionIndex);
  setHeader(currentQuestion.type)
  loadQuestion(currentQuestion, proceedToNextQuestion)
}

function proceedToNextQuestion () {
  State.currentQuestionIndex++
  if (State.currentQuestionIndex >= Questions.length) {
    finish()
  }

  loadNextQuestion()
}

function finish () {
  window.location.href = "/final";
}

loadNextQuestion()
