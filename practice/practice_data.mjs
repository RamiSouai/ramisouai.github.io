import { CONTENT_TYPES, LINE_BREAK_TOKEN } from '../common.mjs'
import { CONSPIR } from '../conspir.mjs'


const twitterQuestions = [
  {
    type: CONTENT_TYPES.TWITTER,
    withConspir: true, 
    link: 'https://twitter.com/RamiSouai/status/1988266363035468039',
    traits: ['Contradictory']
  },
  {
    type: CONTENT_TYPES.TWITTER,
    withConspir: false, 
    link: 'https://twitter.com/RamiSouai/status/1988266363035468039',
    traits: ['Contradictory']
  },
]

const redditQuestions = [
  {
    type: CONTENT_TYPES.REDDIT,
    content: [
      `This sentence contains CONSPIR traits. `,
      `This one doesn't.`
    ],
    username: 'TestUser',
    subreddit: 'CONSPIR-Test',
    postTitle: 'Example Reddit post',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.CONTRADICTORY]
      }
    ]
  }
]

const articleQuestions = [
  {
    type: CONTENT_TYPES.ARTICLE,
    source: 'www.news.com',
    author: 'CONSPIR',
    title:
      'Article title',
    content: [
      `This is an example article. The Plug-in will, after a short period, highlight the sentences that contains CONSPIR traits. `,
      `Such as this one! `,
    ],
    analysis: [
      {
        sentenceIndex: 1,
        traits: [CONSPIR.CONTRADICTORY]
      },
    ]
  }
]

export const Questions = [
  ...twitterQuestions,
  ...redditQuestions,
  ...articleQuestions
]
