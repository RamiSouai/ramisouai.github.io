export const CONSPIR = Object.freeze({
  CONTRADICTORY: 'Contradictory',
  OVERRIDING: 'Overriding suspicion',
  NEFARIOUS: 'Nefarious intent',
  PERSECUTED: 'Persecuted victim',
  IMMUNE: 'Immune to evidence',
  RANDOMNESS: 'Re-interpreting randomness'
})

export function conspirHandleTweet (traits) {
  iconContainer.className = ''
  createLoadingSpinner()
  appendTraitsToToolTip(traits)
  setTimeout(setConspirIcon, Math.random() * 1000 + 5000)
}

export function conspirHandleArticle (analysis) {
  // hideConspirIcon()
  createLoadingSpinner()
  analysis.forEach(anal => {
    setTimeout(
      () => highlightSpanWithTrait(anal.sentenceIndex, anal.traits),
      Math.random() * 1000 + 5000
    )
  })
  iconContainer.removeChild(spinner)
  // hideConspirIcon()
}

export function conspirHandleReddit (analysis) {
  // hideConspirIcon()
  createLoadingSpinner()
  analysis.forEach(anal => {
    setTimeout(
      () => highlightSpanWithTrait(anal.sentenceIndex, anal.traits),
      Math.random() * 1000 + 5000
    )
  })
  iconContainer.removeChild(spinner)
  // hideConspirIcon()
}

export function conspirHideTooltip () {
  tooltip.style.display = 'none'
  currentToolTipParent = undefined
}

export function showNoConspirIcon () {
  hideConspirIcon()
  iconContainer.appendChild(noConspirIcon)
  iconContainer.appendChild(noConspirToolTip)
}

function highlightSpanWithTrait (sentenceIndex, traits) {
  const sentenceElement = document.getElementById(`sentence-${sentenceIndex}`)
  sentenceElement.className += ' highlighted'
  sentenceElement.addEventListener('mouseenter', (event) => {
    appendTraitsToToolTip(traits)
    toggleToolTip(event.target, event.pageX, event.pageY)
  })
  sentenceElement.addEventListener('mouseleave', (event) => {
    conspirHideTooltip()
    // appendTraitsToToolTip(traits)
    // toggleToolTip(event.target, event.pageX, event.pageY)
  })
}

const CONPIR_TRAITS = {
  Contradictory:
    'Holding inconsistent or self-contradictory beliefs without recognizing the contradiction',
  'Overriding suspicion':
    'Excessive distrust of official sources, experts, or mainstream explanations',
  'Nefarious intent':
    'Assuming malicious motives behind events, actions, or policies without evidence',
  'Persecuted victim':
    "Believing oneself or one's group is being unfairly targeted or oppressed",
  'Immune to evidence':
    'Dismissing or reinterpreting contradictory evidence to maintain existing beliefs',
  'Re-interpreting randomness':
    'Seeing patterns, connections, or meaning in random or coincidental events'
}

function setConspirIcon () {
  iconContainer.removeChild(spinner)
  iconContainer.appendChild(icon)
  iconContainer.appendChild(tooltip)
}

function appendTraitsToToolTip (traits) {
  let content =
    '<div class="conpir-tooltip-header">CONPIR Traits Detected:</div>'
  traits.forEach(trait => {
    content += `<div class="conpir-trait"><strong>${trait}:</strong> ${CONPIR_TRAITS[trait]}</div>`
  })

  tooltip.innerHTML = content
  iconContainer.appendChild(tooltip)
}

var currentToolTipParent = undefined
function toggleToolTip (target, x, y) {
  if (
    tooltip.style.display.toString() == 'block' &&
    target === currentToolTipParent
  ) {
    conspirHideTooltip()
  } else {
    tooltip.style.display = 'block'
    currentToolTipParent = target
    if(x && y) {
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    }
  }
}

const iconContainer = document.getElementById('icon-container')

const tooltip = document.createElement('div')
tooltip.className = 'conpir-tooltip'

const spinner = document.createElement('div')
spinner.className = 'conpir-loading-spinner'

const icon = document.createElement('span')
icon.className = 'conpir-icon'
icon.setAttribute('title', 'Show CONPIR traits')
icon.textContent = '⚠️'
icon.addEventListener('mouseover', event => {
  toggleToolTip(event.target, event.pageX, event.pageY)
})
icon.addEventListener('mouseout', event => {
  conspirHideTooltip()
})

const noConspirIcon = document.createElement('span')
noConspirIcon.className = 'conspir-icon'
noConspirIcon.textContent = '✅'

const noConspirToolTip = document.createElement('div')
noConspirToolTip.className = 'conpir-tooltip'
noConspirToolTip.innerHTML =
  '<div class="conpir-tooltip-header">CONSPIR Plug-in disabled for this question</div>'

function hideConspirIcon () {
  iconContainer.innerHTML = ''
}

function createLoadingSpinner () {
  hideConspirIcon()
  iconContainer.appendChild(spinner)
}
