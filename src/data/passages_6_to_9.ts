import { Passage } from './mockData';

export const p6: Passage = {
  id: 'p6',
  title: 'International Trip Preparation',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Traveling to a foreign country is an exciting, deeply enriching adventure that can broaden your horizons, but it requires careful, systematic preparation to ensure a smooth journey. While booking flights and hotels is often the most thrilling part of the process, dealing with the administrative details is equally essential. The first and most important step is checking your travel documents meticulously. You must ensure that your passport is valid for at least six months beyond your planned return date. Many travelers have had their dream vacations abruptly cancelled at the airport simply because they overlooked this strict international rule. Furthermore, you should research whether your destination requires a visa and apply for it well in advance to avoid last-minute stress. Bureaucratic delays are incredibly common, so early preparation is key.

Next, managing your finances before departure is absolutely crucial. Relying on a single payment method while thousands of miles away from home is a very risky strategy. It is highly recommended to notify your bank about your travel dates so they do not block your credit cards due to suspicious foreign transactions. There is nothing worse than having your card declined while trying to pay a hotel bill in a different time zone. Additionally, exchanging a small amount of cash into the local currency before you leave is a smart move, as it allows you to pay for immediate expenses like a taxi or a quick meal upon arrival. Airport exchange rates are notoriously poor, so handling this beforehand saves money.

Finally, do not underestimate the immense importance of comprehensive travel insurance. Although it might seem like an unnecessary extra expense, it is a vital safety net. A good policy will cover unexpected medical emergencies or lost luggage, providing you with peace of mind. Without it, a sudden illness abroad could result in devastating medical bills. By taking the time to organize these essential details, you can fully relax and enjoy your international holiday without unnecessary worries.`,
  questions: [
    {
      id: "p6_q1", order: 1, wordLimit: 1,
      questionText: "Travelers must make sure their {{GAP_1}} is valid before going abroad.",
      correctAnswer: ["passport"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "An official document needed for travel." },
      synonyms: [{ questionKeyword: "abroad", options: [{ text: "foreign", isCorrect: true, meaning: "in or to a foreign country" }, { text: "local", isCorrect: false, meaning: "belonging to your own area" }] }],
      distractors: [{ text: "documents", type: "Detail Trap", explanation: "Documents is general, the specific thing that must be valid for six months is the passport." }]
    },
    {
      id: "p6_q2", order: 2, wordLimit: 1,
      questionText: "If a destination requires one, tourists should apply for a {{GAP_2}} early.",
      correctAnswer: ["visa"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "A travel document required by some countries." },
      synonyms: [{ questionKeyword: "early", options: [{ text: "advance", isCorrect: true, meaning: "done before the usual time" }, { text: "late", isCorrect: false, meaning: "after the expected time" }] }],
      distractors: [{ text: "passport", type: "Context Trap", explanation: "You need a passport generally, but you 'apply for it well in advance' refers to a visa if required." }]
    },
    {
      id: "p6_q3", order: 3, wordLimit: 1,
      questionText: "Contact your bank before leaving so they do not {{GAP_3}} your credit cards.",
      correctAnswer: ["block"],
      grammarHint: { options: ["Verb", "Noun", "Adjective", "Adverb"], correctType: "Verb", explanation: "An action the bank might take." },
      synonyms: [{ questionKeyword: "contact", options: [{ text: "notify", isCorrect: true, meaning: "inform someone officially" }, { text: "hide", isCorrect: false, meaning: "keep secret" }] }],
      distractors: [{ text: "notify", type: "Subject Trap", explanation: "You notify the bank, the bank might block the cards." }]
    },
    {
      id: "p6_q4", order: 4, wordLimit: 1,
      questionText: "Having some local {{GAP_4}} is useful for paying for a taxi when you arrive.",
      correctAnswer: ["currency"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Refers to money used in a specific country." },
      synonyms: [{ questionKeyword: "arrive", options: [{ text: "arrival", isCorrect: true, meaning: "reaching a destination" }, { text: "departure", isCorrect: false, meaning: "leaving a place" }] }],
      distractors: [{ text: "cash", type: "Synonym Trap", explanation: "The text says 'cash into the local currency'. The blank modifies 'local'." }]
    },
    {
      id: "p6_q5", order: 5, wordLimit: 1,
      questionText: "Buying travel insurance is important to cover medical {{GAP_5}} during the trip.",
      correctAnswer: ["emergencies"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Unexpected situations requiring immediate action." },
      synonyms: [{ questionKeyword: "cover", options: [{ text: "protect", isCorrect: true, meaning: "keep safe from harm or loss" }, { text: "ignore", isCorrect: false, meaning: "pay no attention to" }] }],
      distractors: [{ text: "luggage", type: "Detail Trap", explanation: "Luggage is lost, emergencies are medical." }]
    }
  ]
};

export const p7: Passage = {
  id: 'p7',
  title: 'The Impact of Smartphones',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Smartphones have completely revolutionized the way we live, work, and communicate in the twenty-first century. These incredibly powerful, pocket-sized devices offer unprecedented convenience, allowing people to access the vast expanse of the internet, send critical business emails, and take high-quality photos instantly, no matter where they are. In just a little over a decade, society has completely adapted to having instantaneous access to all human knowledge. For many, a smartphone is no longer just a communication tool, but a personal assistant that manages their daily schedules and entertainment. From setting wake-up alarms to tracking fitness goals, these devices are integrated into every waking moment.

Despite their clear, undeniable benefits, the overuse of smartphones is causing growing concern among health professionals and researchers worldwide. Studies indicate that spending excessive hours staring at screens can lead to severe eye strain and sleep disorders. This is particularly problematic for teenagers and young adults whose developing brains are highly sensitive to digital stimulation. Specifically, the bright, artificial illumination from these screens disrupts our natural circadian rhythms. The blue light emitted by these devices interferes with the brain's ability to produce melatonin, a hormone that regulates sleep. As a result, people who use their phones right before bed often suffer from insomnia, waking up feeling exhausted and unrefreshed.

Furthermore, the constant, never-ending stream of notifications, alerts, and messages can significantly reduce our ability to concentrate on complex tasks. Many individuals experience a phenomenon known as "digital distraction," where they feel compelled to check their phones every few minutes. This constant shifting of focus prevents deep, meaningful work and degrades overall cognitive performance. To combat these negative effects, psychologists recommend establishing "screen-free" zones in the house and taking regular digital detoxes to maintain mental well-being. Leaving the phone in another room during dinner can drastically improve both mental health and interpersonal relationships.`,
  questions: [
    {
      id: "p7_q1", order: 1, wordLimit: 1,
      questionText: "Modern smartphones function as a personal {{GAP_1}} to help organize daily life.",
      correctAnswer: ["assistant"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A role or job title modifying 'personal'." },
      synonyms: [{ questionKeyword: "organize", options: [{ text: "manages", isCorrect: true, meaning: "to control or arrange something" }, { text: "ruins", isCorrect: false, meaning: "destroys something" }] }],
      distractors: [{ text: "tool", type: "Context Trap", explanation: "It is a communication tool, but it manages schedules as a personal assistant." }]
    },
    {
      id: "p7_q2", order: 2, wordLimit: 1,
      questionText: "Looking at smartphone screens for too long can cause eye {{GAP_2}}.",
      correctAnswer: ["strain"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "A physical condition affecting the eyes." },
      synonyms: [{ questionKeyword: "too long", options: [{ text: "excessive", isCorrect: true, meaning: "more than is necessary" }, { text: "brief", isCorrect: false, meaning: "lasting a short time" }] }],
      distractors: [{ text: "disorders", type: "Detail Trap", explanation: "Disorders apply to sleep, while strain applies to eyes." }]
    },
    {
      id: "p7_q3", order: 3, wordLimit: 1,
      questionText: "The blue light from phones stops the brain from making {{GAP_3}}, which helps us sleep.",
      correctAnswer: ["melatonin"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A specific chemical or hormone name." },
      synonyms: [{ questionKeyword: "stops", options: [{ text: "interferes", isCorrect: true, meaning: "prevents a process from continuing" }, { text: "helps", isCorrect: false, meaning: "makes easier" }] }],
      distractors: [{ text: "hormone", type: "Synonym Trap", explanation: "Melatonin IS a hormone, but melatonin is the specific name of what is produced." }]
    },
    {
      id: "p7_q4", order: 4, wordLimit: 1,
      questionText: "Because of constant notifications, people often suffer from digital {{GAP_4}}.",
      correctAnswer: ["distraction"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Adverb"], correctType: "Noun", explanation: "A condition caused by digital devices." },
      synonyms: [{ questionKeyword: "constant", options: [{ text: "regular", isCorrect: true, meaning: "happening continuously" }, { text: "rare", isCorrect: false, meaning: "not happening often" }] }],
      distractors: [{ text: "insomnia", type: "Context Trap", explanation: "Insomnia is caused by blue light at bed time, distraction is caused by notifications." }]
    },
    {
      id: "p7_q5", order: 5, wordLimit: 1,
      questionText: "Experts suggest creating areas in the home that are entirely {{GAP_5}} to improve mental health.",
      correctAnswer: ["screen-free"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes the condition of the areas (zones)." },
      synonyms: [{ questionKeyword: "areas", options: [{ text: "zones", isCorrect: true, meaning: "specific regions or spaces" }, { text: "devices", isCorrect: false, meaning: "pieces of equipment" }] }],
      distractors: [{ text: "detoxes", type: "Part of Speech Trap", explanation: "Detoxes is a noun phrase action, the adjective describing the zone is screen-free." }]
    }
  ]
};

export const p8: Passage = {
  id: 'p8',
  title: 'The Growth of E-Learning',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Electronic learning, or e-learning, has seen massive, unprecedented growth in recent years, fundamentally changing the entire global education sector. What was once considered a niche alternative to traditional schooling has now become a mainstream, highly respected method of acquiring new skills and degrees. With just a computer and a stable internet connection, students can now access high-quality courses from universities around the world without leaving their bedrooms. This democratization of knowledge means that someone living in a remote village can attend lectures given by world-renowned professors at top-tier institutions. The biggest advantage of online education is its flexibility. Learners can study at their own pace and choose schedules that fit around their demanding full-time jobs or complex family commitments.

Moreover, e-learning is generally much more affordable than traditional, classroom-based education. The soaring costs of university tuition have driven many young adults into decades of crippling debt. By studying online, students save money on transportation, campus housing, and expensive physical textbooks, as most online courses provide digital materials. This incredible cost-effectiveness has made higher education accessible to hundreds of thousands of people who previously could not afford it, effectively leveling the playing field for ambitious learners from lower-income backgrounds.

However, distance learning is certainly not without its unique challenges. Without the rigid structure of a physical classroom, it requires a high level of self-discipline and motivation, as there are no teachers physically present to monitor progress. Procrastination becomes a significant hurdle for many online learners who struggle to manage their time independently. Additionally, some students feel isolated because they miss out on the social interactions and networking opportunities that a traditional campus environment provides. Despite these drawbacks, the extraordinary convenience and affordability of e-learning ensure that it will remain a vital, dominant part of future education systems globally.`,
  questions: [
    {
      id: "p8_q1", order: 1, wordLimit: 1,
      questionText: "Students can take courses from global universities if they have a stable internet {{GAP_1}}.",
      correctAnswer: ["connection"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A link to the internet." },
      synonyms: [{ questionKeyword: "global", options: [{ text: "world", isCorrect: true, meaning: "the entire earth" }, { text: "local", isCorrect: false, meaning: "restricted to a small area" }] }],
      distractors: [{ text: "computer", type: "List Trap", explanation: "They need a computer AND a connection, the blank follows internet." }]
    },
    {
      id: "p8_q2", order: 2, wordLimit: 1,
      questionText: "The main benefit of studying online is the {{GAP_2}} it offers to students.",
      correctAnswer: ["flexibility"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "A quality or feature provided by online study." },
      synonyms: [{ questionKeyword: "benefit", options: [{ text: "advantage", isCorrect: true, meaning: "a favorable or desirable feature" }, { text: "drawback", isCorrect: false, meaning: "a disadvantage" }] }],
      distractors: [{ text: "schedules", type: "Detail Trap", explanation: "They choose schedules, but the main advantage is flexibility." }]
    },
    {
      id: "p8_q3", order: 3, wordLimit: 1,
      questionText: "Online education is cheaper because students do not need to buy physical {{GAP_3}}.",
      correctAnswer: ["textbooks"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Objects purchased for study." },
      synonyms: [{ questionKeyword: "cheaper", options: [{ text: "affordable", isCorrect: true, meaning: "inexpensive or reasonably priced" }, { text: "expensive", isCorrect: false, meaning: "costing a lot of money" }] }],
      distractors: [{ text: "materials", type: "Opposite Trap", explanation: "Online courses provide digital materials, they don't buy physical textbooks." }]
    },
    {
      id: "p8_q4", order: 4, wordLimit: 1,
      questionText: "To succeed in e-learning, a student must possess strong {{GAP_4}}.",
      correctAnswer: ["self-discipline", "motivation"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Adverb"], correctType: "Noun", explanation: "A personal quality or trait." },
      synonyms: [{ questionKeyword: "succeed", options: [{ text: "progress", isCorrect: true, meaning: "forward movement toward a goal" }, { text: "fail", isCorrect: false, meaning: "be unsuccessful" }] }],
      distractors: [{ text: "teachers", type: "Context Trap", explanation: "Teachers are NOT physically present; the student needs self-discipline." }]
    },
    {
      id: "p8_q5", order: 5, wordLimit: 1,
      questionText: "A negative aspect of online courses is that learners may feel {{GAP_5}} from others.",
      correctAnswer: ["isolated"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes how the learners feel." },
      synonyms: [{ questionKeyword: "negative aspect", options: [{ text: "drawbacks", isCorrect: true, meaning: "disadvantages or problems" }, { text: "advantages", isCorrect: false, meaning: "favorable features" }] }],
      distractors: [{ text: "interactions", type: "Vocabulary Trap", explanation: "They miss interactions, but the feeling they experience is isolated." }]
    }
  ]
};

export const p9: Passage = {
  id: 'p9',
  title: 'Social Media Dynamics',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Social media platforms have drastically, and perhaps permanently, altered how humans interact, build communities, and share information on a daily basis. What started as simple digital spaces for college students has exploded into a global phenomenon that shapes modern culture. Originally created to help people stay in touch with distant friends and family, these networks have evolved into powerful tools for news distribution, corporate marketing, and sophisticated political campaigning. Businesses now rely heavily on these platforms to reach their target demographics. With billions of active users logging on every single day, platforms like Facebook and Twitter allow information to spread at an unprecedented speed, crossing international borders in mere seconds.

However, this rapid, unfiltered spread of information has a deeply concerning dark side. Because the algorithms are designed to prioritize engagement and sensationalism over accuracy, false news and rumors can go viral in a matter of minutes, causing public confusion and panic. Because anyone can publish content instantly without any formal editorial oversight, users must be highly critical and skeptical of the information they consume. Furthermore, psychologists increasingly warn about the severe impact of social media on adolescent and adult self-esteem. Many users constantly compare their everyday lives to the carefully curated and filtered images posted by influencers, which can lead to feelings of inadequacy and depression. The relentless pursuit of digital validation through "likes" and "shares" is causing a modern mental health crisis.

Despite these significant issues, social media undeniably remains an essential, deeply integrated part of modern communication. When used properly, it provides marginalized groups with a powerful voice and helps raise funds for charitable causes worldwide. Ultimately, the overall impact of these massive digital platforms depends entirely on how responsibly individuals and societies choose to use them.`,
  questions: [
    {
      id: "p9_q1", order: 1, wordLimit: 1,
      questionText: "Social networks were initially built to help people connect with {{GAP_1}} friends.",
      correctAnswer: ["distant"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes the type of friends." },
      synonyms: [{ questionKeyword: "initially", options: [{ text: "originally", isCorrect: true, meaning: "in the beginning" }, { text: "finally", isCorrect: false, meaning: "at the end" }] }],
      distractors: [{ text: "active", type: "Context Trap", explanation: "Active describes users today, not the friends they wanted to connect with originally." }]
    },
    {
      id: "p9_q2", order: 2, wordLimit: 1,
      questionText: "On social media, information and news can travel at an incredible {{GAP_2}}.",
      correctAnswer: ["speed"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "Refers to the rate at which something moves." },
      synonyms: [{ questionKeyword: "travel", options: [{ text: "spread", isCorrect: true, meaning: "to reach a wider area" }, { text: "stay", isCorrect: false, meaning: "remain in one place" }] }],
      distractors: [{ text: "distribution", type: "Synonym Trap", explanation: "Networks are tools for news distribution, but they travel at an unprecedented speed." }]
    },
    {
      id: "p9_q3", order: 3, wordLimit: 1,
      questionText: "The fast sharing of false news can easily cause public {{GAP_3}}.",
      correctAnswer: ["confusion", "panic"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A state of mind or feeling affecting the public." },
      synonyms: [{ questionKeyword: "false news", options: [{ text: "rumors", isCorrect: true, meaning: "information that may not be true" }, { text: "facts", isCorrect: false, meaning: "true information" }] }],
      distractors: [{ text: "oversight", type: "Vocabulary Trap", explanation: "There is no editorial oversight, which is why confusion happens." }]
    },
    {
      id: "p9_q4", order: 4, wordLimit: 1,
      questionText: "Looking at perfect pictures of influencers can negatively affect a person's {{GAP_4}}.",
      correctAnswer: ["self-esteem"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Adverb"], correctType: "Noun", explanation: "A personal psychological attribute." },
      synonyms: [{ questionKeyword: "pictures", options: [{ text: "images", isCorrect: true, meaning: "visual representations" }, { text: "texts", isCorrect: false, meaning: "written words" }] }],
      distractors: [{ text: "lives", type: "Context Trap", explanation: "Users compare their everyday lives, but what is negatively affected is self-esteem." }]
    },
    {
      id: "p9_q5", order: 5, wordLimit: 1,
      questionText: "Social media can be used positively to raise {{GAP_5}} for charity.",
      correctAnswer: ["funds"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Something that is collected or gathered for a cause." },
      synonyms: [{ questionKeyword: "charity", options: [{ text: "causes", isCorrect: true, meaning: "principles or movements supported by people" }, { text: "businesses", isCorrect: false, meaning: "commercial organizations" }] }],
      distractors: [{ text: "voice", type: "Detail Trap", explanation: "It provides a voice for groups, but it raises funds for charity." }]
    }
  ]
};
