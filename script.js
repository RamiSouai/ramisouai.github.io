// Survey Data
const tweets = [
  `<blockquote class="twitter-tweet">
    <a href="https://twitter.com/AshFarms/status/1970568562340241795">September 23, 2025</a>
  </blockquote>`,
  `<blockquote class="twitter-tweet">
    <a href="https://twitter.com/plzbepatient/status/1970871227339432408">Jan 1, 2025</a>
  </blockquote>`
];

const redditPosts = [
];

let tweetIndex = 0;
let redditIndex = 0;

const welcomeSection = document.getElementById('welcome');
const tweetsSection = document.getElementById('tweets');
const redditSection = document.getElementById('reddit');
const finalSection = document.getElementById('final');

const tweetContainer = document.getElementById('tweet-container');
const redditContainer = document.getElementById('reddit-container');

const startSurveyBtn = document.getElementById('start-survey-btn');
const tweetForm = document.getElementById('tweet-form');
const redditForm = document.getElementById('reddit-form');
const finalForm = document.getElementById('final-form');

const confidenceSlider = document.getElementById('confidence');
const confidenceValue = document.getElementById('confidence-value');
const redditConfidenceSlider = document.getElementById('reddit-confidence');
const redditConfidenceValue = document.getElementById('reddit-confidence-value');

startSurveyBtn.addEventListener('click', startSurvey);

confidenceSlider.addEventListener('input', (e) => {
  confidenceValue.textContent = e.target.value;
});

redditConfidenceSlider.addEventListener('input', (e) => {
  redditConfidenceValue.textContent = e.target.value;
});

tweetForm.addEventListener('submit', handleTweetSubmit);
redditForm.addEventListener('submit', handleRedditSubmit);
finalForm.addEventListener('submit', handleFinalSubmit);

function startSurvey() {
  hideSection(welcomeSection);
  showSection(tweetsSection);
  loadTweet();
}

function loadTweet() {
  if (tweetIndex < tweets.length) {
    tweetContainer.innerHTML = tweets[tweetIndex];
    
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  } else {
    hideSection(tweetsSection);
    showSection(finalSection);
    
    // Uncomment to enable Reddit section
    // showSection(redditSection);
    // loadReddit();
  }
}

function loadReddit() {
  if (redditIndex < redditPosts.length) {
    redditContainer.innerHTML = redditPosts[redditIndex];
  } else {
    hideSection(redditSection);
    showSection(finalSection);
  }
}

function handleTweetSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(tweetForm);
  const data = {
    tweetIndex,
    present: formData.get('present'),
    confidence: formData.get('confidence'),
    reasoning: formData.get('reasoning')
  };
  
  console.log('Tweet response:', data);
  
  tweetIndex++;
  loadTweet();
  
  tweetForm.reset();
  confidenceSlider.value = 50;
  confidenceValue.textContent = 50;
}

function handleRedditSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(redditForm);
  const data = {
    redditIndex,
    present: formData.get('present'),
    confidence: formData.get('confidence'),
    reasoning: formData.get('reasoning')
  };
  
  console.log('Reddit response:', data);
  
  redditIndex++;
  loadReddit();
  
  redditForm.reset();
  redditConfidenceSlider.value = 50;
  redditConfidenceValue.textContent = 50;
}

function handleFinalSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(finalForm);
  const data = {
    q1: formData.get('q1'),
    q2: formData.get('q2'),
    q3: formData.get('q3'),
    q4: formData.get('q4'),
    q5: formData.get('q5'),
    q6: formData.get('q6'),
    q7: formData.get('q7'),
    comments: formData.get('comments')
  };
  
  console.log('Final survey response:', data);
  
  alert('Thank you for completing the survey!');
  
  // Optional: Reset to beginning
  // resetSurvey();
}

function showSection(section) {
  section.classList.remove('hidden');
}

function hideSection(section) {
  section.classList.add('hidden');
}

function resetSurvey() {
  tweetIndex = 0;
  redditIndex = 0;
  
  hideSection(tweetsSection);
  hideSection(redditSection);
  hideSection(finalSection);
  showSection(welcomeSection);
  
  tweetForm.reset();
  redditForm.reset();
  finalForm.reset();
}