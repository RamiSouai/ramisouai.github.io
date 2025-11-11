import { CONTENT_TYPES, LINE_BREAK_TOKEN } from '../common.mjs'
import { CONSPIR } from '../conspir.mjs'

const twitterQuestions = [
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/MattWalshBlog/status/1982812800830275881',
    withConspir: true,
    traits: [CONSPIR.CONTRADICTORY]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/RupertLowe10/status/1981778787218886869',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/TheBritLad/status/1982740419952967992',
    withConspir: true,
    traits: [CONSPIR.PERSECUTED]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/covie_93/status/1982496250378559947',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/Logically_JC/status/1982752965875429496',
    withConspir: true,
    traits: [CONSPIR.PERSECUTED, CONSPIR.RANDOMNESS]
  },
  // {
  //   type: CONTENT_TYPES.TWITTER,
  //   link: 'https://twitter.com/mmpadellan/status/1982891699912556924',
  //   withConspir: true,
  //   traits: [CONSPIR.CONTRADICTORY]
  // },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/AndrewZywiecMD/status/1982856754233819312',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/3dom13/status/1982738482045878705',
    withConspir: true,
    traits: [CONSPIR.OVERRIDING, CONSPIR.NEFARIOUS, CONSPIR.IMMUNE]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/lauramatsue/status/1980016504033989096',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/3dom13/status/1935878099993767958',
    withConspir: true,
    traits: [CONSPIR.NEFARIOUS]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/SCMountainGoat/status/1982974382147547550',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/BrianEastwood_X/status/1982494103767249011',
    withConspir: true,
    traits: [CONSPIR.NEFARIOUS, CONSPIR.RANDOMNESS]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/Davis_Tim42/status/1967738705776726090',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/BrianEastwood_X/status/1982519467029725570',
    withConspir: true,
    traits: [CONSPIR.NEFARIOUS]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/Davis_Tim42/status/1968629933359427694',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/EndWokeness/status/1983018264205639806',
    withConspir: true,
    traits: [CONSPIR.RANDOMNESS]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/Apolitical3678/status/1958529829281607751',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/PeterSweden7/status/1958628268254666955',
    withConspir: true,
    traits: [CONSPIR.OVERRIDING, CONSPIR.PERSECUTED]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/realDonaldTrump/status/1923432648103333919',
    withConspir: false,
    traits: []
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/AshFarms/status/1970568562340241795',
    withConspir: true,
    traits: [CONSPIR.PERSECUTED]
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/plzbepatient/status/1970871227339432408',
    withConspir: false,
    traits: []
  }
]

const redditQuestions = [
  {
    type: CONTENT_TYPES.REDDIT,
    withConspir: true,
    content: [
      `We already know our phones are constantly listening. `,
      `That much is obvious. `,
      `This is not a joke. `,
      `I am almost 100% certain that our phones can listen for and distinguish the sound of a faucet running water. `,
      `Why do I think this?`,
      LINE_BREAK_TOKEN,
      `Because every single time, without fail, when I do my dishes or wash my hands while watching anything on the internet, an ad will play within 30 seconds. Sometimes immediately after I’ve wet my hands.`,
      LINE_BREAK_TOKEN,
      `These SOBs know we have wet hands and have a harder time skipping the ad. `,
      `I have fully believed this for years.`
    ],
    username: 'TinfoilTidbits',
    subreddit: 'conspiracy',
    postTitle: 'Our phones are programmed to listen for running water',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.NEFARIOUS]
      },
      {
        sentenceIndex: 3,
        traits: [CONSPIR.RANDOMNESS]
      },
      {
        sentenceIndex: 6,
        traits: [CONSPIR.RANDOMNESS]
      },
      {
        sentenceIndex: 8,
        traits: [CONSPIR.NEFARIOUS]
      },
      {
        sentenceIndex:9,
        traits: [CONSPIR.IMMUNE]
      },
    ]
  },
  {
    type: CONTENT_TYPES.REDDIT,
    withConspir: false,
    content: [
      `Americans have been paying for it since. `,
      `Living has gotten difficult for a vast majority of millions of Americans under this shame of a Presidency. `,
      `Inflation is out of control. Food. Gas. Cost of living.`,
      LINE_BREAK_TOKEN,
      `He has Failed the American people and disgraced the United States with Afghanistan.`,
      LINE_BREAK_TOKEN,
      `Got into another endless proxy war via Ukraine while dumping billions of taxpayer dollars into it.`,
      LINE_BREAK_TOKEN,
      `Pushed fraudulent COVID-19 vaccines like a corrupt snake oil salesman. `,
      `Personally blamed the unvaccinated, pointing the finger at American Citizens, in a Presidential Address.`,
      `Has one of the most absurd criminal sons who is committing heinous sex, drug and money laundering crimes. `,
      `All this while compromising national security via personal businesses in Ukraine and China.`,
      `Hundreds of thousands of Americans are suffering from adverse effects from the vaccine. `,
      `Those numbers continue to increase and get worse. Children are also suffering.`,
      LINE_BREAK_TOKEN,
      `This is the worst President in the entire United States history and it is being covered up.`,
      `Things are going to get worse until people hit their breaking point.`
    ],
    username: 'SilentConsciou5',
    subreddit: 'conspiracy',
    postTitle:
      'Everyone knows Joe Biden and Harris was Carried and Propped up through a Stolen Presidential Election. You know it. They know it. We all know it.',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.CONTRADICTORY]
      }
    ]
  },
  {
    type: CONTENT_TYPES.REDDIT,
    withConspir: true,
    content: [
      `I truly feel either the election will be rigged and we will get Kamala for four years, which will absolutely tank the country. `,
      `Or Trump will win and it will be four years of chaos, mayhem antifa, riots, BLM and anything else the Obama team can come up with to absolutely destroy this country to prove Trump is the bad guy.`
    ],
    username: 'Flashy_Law5605',
    subreddit: 'conspiracy',
    postTitle: 'This is going to be a no win election',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.PERSECUTED, CONSPIR.NEFARIOUS]
      },
      {
        sentenceIndex: 1,
        traits: [CONSPIR.PERSECUTED, CONSPIR.NEFARIOUS]
      }
    ]
  },
  {
    type: CONTENT_TYPES.REDDIT,
    withConspir: false,
    content: [
      `Her syntax is completely unnatural to her normal impromptu tone. Her rhythm is memorized script.`,
      `I think these folks forget we see clips of all of their rallies. We know what their memorization tone sounds like.`,
      `This debate was a flop.`
    ],
    username: 'jaejaeok',
    subreddit: 'conspiracy',
    postTitle: 'I’d bet my house that Kamala got the questions before hand.',
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
    withConspir: true,
    source: 'www.globalresearch.ca',
    author: 'Manlio Dinucci',
    title: 'War and Business. Peace Negotiations are “A Waste Of Time”.',
    content: [
      `Following the announcement of the impending summit with President Putin in Hungary, President Trump declared that the summit with the Russian President on Ukraine would be a “waste of time” on the grounds that “Russia is pursuing territorial ambitions that make a peace agreement with Ukraine impossible”. `,
      `He then proceeded to summon NATO Secretary General Mark Rutte to the White House, wherein he conveyed his decision to withhold the provision of US Tomahawk missiles to Kiev at that particular juncture. `,
      `This decision was precipitated by the perceived impracticality of allocating a substantial amount of time to train the Ukrainian army in the utilisation of such missiles.`,
      `Concurrently, the US lifted the key restriction on the use of long-range missiles supplied by other NATO members to Ukraine, while NATO conducted the Steadfast Noon nuclear warfare exercise directed against Russia in Europe under US command. `,
      `In response to the aforementioned events, a Strategic Nuclear Forces exercise was conducted in the Russian Federation. `,
      `President Putin observed this exercise via video conference. `,
      `One example among many: that of the fast-growing German Rheinmetall, which is integrated into the US military-industrial complex through American Rheinmetall Munitions. `,
      `Rheinmetall has announced its intention to supply Ukraine with an electronic system designed to enhance the combat capabilities of the German Leopard tanks that have already been supplied to Kiev. `,
      `The production and integration of this system is carried out by the Italian subsidiary of Rheinmetall, Rheinmetall Italia SpA, at its headquarters in Rome. `,
      `In Italy, Rheinmetall has established a facility dedicated to the assembly, testing and production of warheads for kamikaze drones. `,
      `The series is being produced at full speed. `,
      `The plant is operated by the Italian subsidiary RWM Italia at its sites in Musei and Domusnovas in Sardinia. `,
      `Rheinmetall is collaborating with the Israeli manufacturer UVision Air Ltd. on this project. `,
      `It is evident that these Italian-manufactured kamikaze drones will be utilised by the Israeli army in attacks against Palestinians in Gaza, as well as in other operations primarily conducted in Libya, Yemen, and other regions. `,
      `Trump has imposed sanctions on Russian oil companies, representing the most stringent measures yet taken by the US against the Russian energy sector. `,
      `It is evident that these sanctions are favourable to large US oil and gas companies. `,
    ],
    link: 'https://www.globalresearch.ca/war-and-business-peace-negotiations-are-a-waste-of-time-manlio-dinucci/5903911',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.NEFARIOUS]
      },
      {
        sentenceIndex: 7,
        traits: [CONSPIR.NEFARIOUS]
      },
      {
        sentenceIndex: 13,
        traits: [CONSPIR.IMMUNE, CONSPIR.RANDOMNESS]
      },
      {
        sentenceIndex: 15,
        traits: [CONSPIR.IMMUNE]
      }
    ]
  },
  {
    type: CONTENT_TYPES.ARTICLE,
    withConspir: false,
    source: 'www.cnn.com',
    author: 'Stephen Collinson',
    title:
      'Democratic unity fractures, paving the way for the government to reopen',
    content: [
      `Enough Democrats caved.`,
      LINE_BREAK_TOKEN,
      `A Sunday night Senate deal may be on the verge of resolving the longest government shutdown on record — after a group of moderate Democrats dropped their key demand — a guaranteed extension of Obamacare subsidies. `,
      `The agreement opened the way for a Senate vote in which eight Democratic defectors voted to break the filibuster and to clear the first hurdle to reopening the government after nearly six weeks.`,
      `Their move will offer relief to millions of Americans whose lives have been severely disrupted by the shutdown.`,
      LINE_BREAK_TOKEN,
      `But the compromise was opposed by some key party leaders and is already igniting a firestorm of protests from progressives who accuse their more moderate colleagues of disastrously backing down, handing President Donald Trump a victory and turning their backs on millions of Americans who can’t afford spiking health care premiums.`,
      LINE_BREAK_TOKEN,
      `“I will not support a deal that does nothing to make health care more affordable,” Democratic Sen Elizabeth Warren, a leading progressive, wrote on X. “We are in a health care emergency. … A vote for this bill is a mistake.”`,
      LINE_BREAK_TOKEN,
      `It might be crass to parse the human misery caused by the shutdown for a partisan win after a political duel that deprived millions of Americans of food benefits, left federal workers with $0 paychecks, and created chaos and safety fears in commercial aviation.`,
      LINE_BREAK_TOKEN,
      `But the crisis — precipitated by the expiration of enhanced subsidies for Affordable Care Act plans, whose prices are skyrocketing — was fought for multilayered political reasons. It will influence judgments on Trump’s second presidency and the Republican majorities in Congress and help define the trajectory of the Democratic Party’s comeback bid ahead of next year’s midterm elections.`,
      LINE_BREAK_TOKEN,
      `The deal sets a date for a vote in the Senate on ACA subsidies in December, but falls well short of cementing their extension. It funds the government through January 30 and guarantees pay for federal workers furloughed during the shutdown and those who worked without pay. `,
      `It also reverses Trump’s firing of federal employees throughout the impasse and funds food stamps through 2026.`,
      LINE_BREAK_TOKEN,
      `Once the package works through procedural steps in the Senate, the Republican-led House must be recalled to vote on the measure.`
    ],
    link: 'https://edition.cnn.com/2025/11/10/politics/democratic-unity-fractures-government-reopen',
    analysis: [
      {
        sentenceIndex: 0,
        traits: [CONSPIR.CONTRADICTORY]
      },
      {
        sentenceIndex: 7,
        traits: [CONSPIR.OVERRIDING, CONSPIR.RANDOMNESS]
      }
    ]
  }
]

export const Questions = [
  ...twitterQuestions,
  ...redditQuestions,
  ...articleQuestions
]

export const twitterQuestionsLength = twitterQuestions.length
export const redditQuestionsLength = redditQuestions.length
export const articleQuestionsLength = articleQuestions.length
