import {
  conspirHideTooltip,
  conspirHandleTweet,
  conspirHandleReddit,
  conspirHandleArticle,
  showNoConspirIcon
} from './conspir.mjs'

export const LINE_BREAK_TOKEN = `$LINEBREAK`

export const CONTENT_TYPES = Object.freeze({
  TWITTER: Symbol('twitter'),
  REDDIT: Symbol('reddit'),
  ARTICLE: Symbol('article')
})

export function loadQuestion (question, onFormSubmitCallback) {
  onSubmitCallback = onFormSubmitCallback
  switch (question.type) {
    case CONTENT_TYPES.TWITTER:
      loadTweet(question.link)
      if (question.withConspir !== false) {
        conspirHandleTweet(question.traits)
      } else {
        showNoConspirIcon()
      }
      break
    case CONTENT_TYPES.REDDIT:
      loadRedditPost(
        question.content,
        question.username,
        question.subreddit,
        question.postTitle
      )
      if (question.withConspir !== false) {
        conspirHandleReddit(question.analysis)
      } else {
        showNoConspirIcon()
      }
      break
    case CONTENT_TYPES.ARTICLE:
      loadArticle(
        question.source,
        question.author,
        question.title,
        question.content,
        question.link
      )
      if (question.withConspir !== false) {
        conspirHandleArticle(question.analysis)
      } else {
        showNoConspirIcon()
      }
      break
    default:
      break
  }
}

export function persistData (formData) {
  const dbUrl = `https://script.google.com/macros/s/AKfycby9nJj_Tgl5DrfCuKoV5Y4tSXNvbqxtZtq_V-CL0kaHb-gxu8RTfOP2y5q-UeLLFueN/exec`
  fetch(dbUrl, {
    redirect: 'follow',
    method: 'POST',
    body: JSON.stringify({
      formData: formData,
      userId: USER_ID
    }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    }
  })
}

var onSubmitCallback = () => {
  console.log('default callback')
}

function loadArticle (source, author, title, content, link) {
  const articleinnerHtml = `<div class="web-article-embed">
        <div class="article-header">
            <span class="article-source">${source}</span>
            <span class="article-author">by ${author}</span>
        </div>
        <h3 class="article-title">${title}</h3>
        <div class="article-body">
            ${buildContent(content)}
        </div>
      </div>`

  const embeddedArea = document.getElementById('embedded-area')
  embeddedArea.innerHTML = articleinnerHtml
}

function loadRedditPost (content, username, subreddit, postTitle) {
  const redditInnerHtml = `<div class="reddit-post-embed">
        <div class="reddit-post-header">
          <span class="reddit-subreddit">r/${subreddit}</span>
          <span class="reddit-user">Posted by u/${username}</span>
        </div>
        <h3 class="reddit-post-title">${postTitle}</h3>
        <div class="reddit-post-body" id="reddit-post-body">
            ${buildContent(content)}
        </div>
    </div>`

  const embeddedArea = document.getElementById('embedded-area')
  embeddedArea.innerHTML = redditInnerHtml
}

function buildContent (content) {
  var body = ''
  content.forEach((sentence, idx) => {
    if (sentence === LINE_BREAK_TOKEN) {
      body += `</br>`
      return
    }
    body += `<span class="conspir-sentence" id="sentence-${idx}">${sentence}</span>`
  })
  return body
}

function loadTweet (link) {
  const tweetInnerHtml = `<blockquote class="twitter-tweet">
        <a href="${link}">Loading tweet...</a>
    </blockquote>`
  const embeddedArea = document.getElementById('embedded-area')
  embeddedArea.innerHTML = tweetInnerHtml
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load(embeddedArea)
  } else {
    console.warn('Twitter widget script not yet loaded. It will auto-run.')
  }
}

function handleQuestionFormSumbit () {
  const formData = getFormData()
  persistData(formData)
  onSubmitCallback()
  resetForm()
  conspirHideTooltip()
}

function resetForm () {
  form.reset()
}

function initUser () {
  const localStorageIdKey = 'CONSPIR-ID'
  USER_ID = localStorage.getItem(localStorageIdKey)
  if (!USER_ID) {
    USER_ID = 'user-' + Math.random().toString(36).substr(2, 9)
  }
}

function getFormData () {
  const formData = new FormData(form)
  const formResult = {}
  formData.forEach((value, key, parent) => {
    formResult[key] = value
  })
  return formResult
}

const FORM_KEYS = ['conspiratorialYesOrNoInput', 'confidence', 'reasoning']

const form = document.getElementById('sumbit-question-form')

var USER_ID = ''

initUser()
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    handleQuestionFormSumbit()
  })
}
