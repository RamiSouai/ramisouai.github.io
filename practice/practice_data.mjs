import { CONTENT_TYPES, LINE_BREAK_TOKEN } from '../common.mjs'
import { CONSPIR } from '../conspir.mjs'


const twitterQuestions = [
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/MattWalshBlog/status/1982812800830275881',
    traits: ['Contradictory']
  },
  {
    type: CONTENT_TYPES.TWITTER,
    link: 'https://twitter.com/Logically_JC/status/1982752965875429496',
    traits: ['Contradictory']
  }
]

const redditQuestions = [
  {
    type: CONTENT_TYPES.REDDIT,
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
        traits: [CONSPIR.CONTRADICTORY]
      }
    ]
  }
]

const articleQuestions = [
  {
    type: CONTENT_TYPES.ARTICLE,
    source: 'www.globalresearch.ca',
    author: 'Manlio Dinucci',
    title:
      'War and Business. Peace Negotiations are “A Waste Of Time”. Manlio Dinucci',
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
      `The European Union is participating in this operation, which has decided to completely block the import of Russian natural gas in three stages: from 1 January 2026, it will be forbidden to sign new contracts; short-term agreements already in place must end by 17 June 2026; and long-term agreements by 31 December 2027. `,
      `It should be noted that the aforementioned proposals have met with opposition from the countries of Hungary and Slovakia. `,
      `Concurrently, Italy’s Edison entered into an agreement with Shell, securing the procurement of US liquefied natural gas (LNG) for a duration of 15 years. `,
      `In consideration of the marked disparity between the price of gas in the US and that of gas in Russia, it is evident that consumer gas prices for households in Italy are rising. `,
      `The United States and the State of Israel are contemplating a plan to divide the Gaza Strip into two separate zones: one to be controlled by Israel, the other formally by Hamas pending its “disarmament”. `,
      `This was announced at a press conference in Israel by US Vice President Vance and Trump’s son-in-law, Jared Kushner. `,
      `The plan is to immediately start “reconstruction” in the Israeli-controlled area, according to Trump’s plan to transform Gaza into a luxurious “Riviera of the Middle East”. `,
      `The Palestinian area, de facto controlled by Israel, would remain in its current situation: the Palestinian population would be locked there in a scenario of destruction and deprivation that would continue the genocide. `,
      `President Trump confirmed that Australia will obtain nuclear-powered submarines from the United States and the United Kingdom, indicating a strategic focus on deterring China and Russia. `,
      `Concurrently, he signed an agreement on rare earth minerals with the Australian Prime Minister at the White House. `,
      `The AUKUS submarine agreement between Australia, the United Kingdom and the United States could cost Australia up to $235 billion over the next 30 years. `,
      `The governments of the United States and Australia have announced their intention to invest in excess of $3 billion in critical minerals projects over the forthcoming six-month period. `,
      `The recoverable resources in these projects are estimated to be worth $53 billion. `,
      `The US Department of War expressed its intention to invest in the construction of an advanced gallium refinery with a capacity of 100 metric tonnes per year in Western Australia. `,
      `Gallium has several military applications, primarily in high-tech electronics such as radar and satellite communications. `,
      `The material is also used as an alloy to stabilise nuclear weapons components and in aluminium-gallium alloys for the production of hydrogen bombs for thermonuclear warfare.`
    ],
    link: 'https://www.globalresearch.ca/war-and-business-peace-negotiations-are-a-waste-of-time-manlio-dinucci/5903911',
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
