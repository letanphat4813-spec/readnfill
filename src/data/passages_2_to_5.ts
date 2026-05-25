import { Passage } from './mockData';

export const p2: Passage = {
  id: 'p2',
  title: 'The Benefits Of Home Cooking',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Cooking at home is becoming an increasingly popular choice for many families who want to improve their lifestyle and take charge of their well-being. In recent years, the fast-paced nature of modern life has led many people to rely heavily on pre-packaged foods and takeout. While eating out is undoubtedly convenient, especially after a long and exhausting day at work, preparing meals in your own kitchen brings numerous advantages that far outweigh the temporary convenience. 

First and foremost, home cooking is usually much healthier. Fast food restaurants and casual dining establishments often prioritize flavor over nutrition, frequently using excessive amounts of butter, deep-frying oils, and hidden sweeteners. When you cook, you can control exactly how much oil, sugar, and salt goes into your food. This high level of personal customization helps prevent long-term health problems like obesity, high blood pressure, and severe heart disease. 

Second, cooking at home is an excellent way to save money. Dining out frequently can quickly drain a household's financial resources without the family even noticing. Restaurant meals include the cost of service and preparation, making them significantly more expensive than buying fresh ingredients from a local market. By purchasing seasonal produce and bulk staples, families can create delicious, restaurant-quality dishes for a fraction of the price. Furthermore, by planning meals in advance, families can reduce food waste and keep their budget under control.

Finally, cooking can be a wonderful, stress-relieving bonding activity. In many households, the kitchen serves as the social heart of the home. Preparing a meal together allows family members to communicate, share stories, and relax after a busy day. It transforms a routine, mundane chore into an enjoyable and deeply fulfilling shared experience. Therefore, dedicating just a little extra time to cook at home is highly beneficial for both physical health and interpersonal family relationships.`,
  questions: [
    {
      id: "p2_q1", order: 1, wordLimit: 1,
      questionText: "Cooking meals at home allows people to easily {{GAP_1}} the amount of unhealthy ingredients in their food.",
      correctAnswer: ["control"],
      grammarHint: { options: ["Verb", "Noun", "Adjective", "Adverb"], correctType: "Verb", explanation: "Follows 'to easily' indicating an infinitive verb." },
      synonyms: [{ questionKeyword: "allow", options: [{ text: "permit", isCorrect: true, meaning: "give permission" }, { text: "forbid", isCorrect: false, meaning: "refuse to allow" }] }],
      distractors: [{ text: "prevent", type: "Context Trap", explanation: "Prevent is used with health problems, but you control ingredients." }]
    },
    {
      id: "p2_q2", order: 2, wordLimit: 1,
      questionText: "Eating at restaurants is often much more {{GAP_2}} because you pay for the service.",
      correctAnswer: ["expensive"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes the cost comparison after 'more'." },
      synonyms: [{ questionKeyword: "restaurants", options: [{ text: "cafes", isCorrect: true, meaning: "places to eat" }, { text: "homes", isCorrect: false, meaning: "places to live" }] }],
      distractors: [{ text: "convenient", type: "Detail Trap", explanation: "Eating out is convenient, but paying for service makes it expensive." }]
    },
    {
      id: "p2_q3", order: 3, wordLimit: 1,
      questionText: "Buying fresh food from the local {{GAP_3}} is a great way to save money.",
      correctAnswer: ["market"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "Names a place." },
      synonyms: [{ questionKeyword: "buying", options: [{ text: "purchasing", isCorrect: true, meaning: "to buy something" }, { text: "selling", isCorrect: false, meaning: "to give something for money" }] }],
      distractors: [{ text: "kitchen", type: "Location Trap", explanation: "You cook in the kitchen, but you buy food from the market." }]
    },
    {
      id: "p2_q4", order: 4, wordLimit: 1,
      questionText: "Families can reduce their food {{GAP_4}} by organizing their meals beforehand.",
      correctAnswer: ["waste"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Forms a compound noun with 'food'." },
      synonyms: [{ questionKeyword: "beforehand", options: [{ text: "advance", isCorrect: true, meaning: "done ahead of time" }, { text: "afterward", isCorrect: false, meaning: "at a later time" }] }],
      distractors: [{ text: "budget", type: "Vocabulary Trap", explanation: "You keep budget under control, but you reduce food waste." }]
    },
    {
      id: "p2_q5", order: 5, wordLimit: 1,
      questionText: "Preparing food with others is a great way for families to {{GAP_5}} and relax together.",
      correctAnswer: ["communicate"],
      grammarHint: { options: ["Verb", "Noun", "Adjective", "Adverb"], correctType: "Verb", explanation: "An action word that pairs with 'relax'." },
      synonyms: [{ questionKeyword: "relax", options: [{ text: "rest", isCorrect: true, meaning: "stop working to gather energy" }, { text: "worry", isCorrect: false, meaning: "feel anxious" }] }],
      distractors: [{ text: "share", type: "Part of Speech Trap", explanation: "They share stories, but the verb matching the sentence structure is communicate." }]
    }
  ]
};

export const p3: Passage = {
  id: 'p3',
  title: 'The Fast Food Industry',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `The fast food industry has grown tremendously over the past few decades, fundamentally transforming how people eat on a global scale. From its humble beginnings in the mid-twentieth century, the concept of rapid, standardized food service has expanded into a multi-billion dollar empire that spans across nearly every country in the world. Initially designed for busy workers looking for a quick meal, fast food chains have now become an unavoidable part of modern urban landscapes. The primary appeal of these restaurants is their incredible speed, consistent taste, and affordability, allowing customers to get a hot meal in minutes without spending a fortune.

However, the convenience of fast food comes with significant, well-documented drawbacks. Medical experts and dietitians frequently warn that typical fast food items like double cheeseburgers, deep-fried fries, and giant sodas are packed with extremely high levels of unhealthy saturated fats, sodium, and artificial preservatives. Regular consumption of these meals is strongly linked to a higher risk of obesity, diabetes, and cardiovascular diseases. This public health crisis has placed a massive financial burden on medical systems worldwide. Furthermore, the massive scale of fast food production negatively impacts the environment, leading to increased plastic waste and greenhouse gas emissions from massive cattle farms.

In response to growing public awareness and intense pressure from health advocacy groups, many major fast food companies are actively trying to adapt their business models. They are reformulating their classic recipes to reduce harmful trans fats and hidden sugars. Some have introduced healthier menu options, such as salads and grilled chicken, while others are switching to biodegradable packaging. Despite these positive changes, nutritionists still advise consumers to limit their intake of fast food and prioritize balanced, home-cooked meals whenever possible. Ultimately, moderation remains the key to maintaining a healthy lifestyle in today's fast-paced environment.`,
  questions: [
    {
      id: "p3_q1", order: 1, wordLimit: 1,
      questionText: "Fast food was originally created for busy people who needed a {{GAP_1}} meal.",
      correctAnswer: ["quick"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes the type of meal." },
      synonyms: [{ questionKeyword: "created", options: [{ text: "designed", isCorrect: true, meaning: "planned or made for a purpose" }, { text: "destroyed", isCorrect: false, meaning: "damaged beyond repair" }] }],
      distractors: [{ text: "hot", type: "Detail Trap", explanation: "They get a hot meal, but it was originally designed for a 'quick' meal." }]
    },
    {
      id: "p3_q2", order: 2, wordLimit: 1,
      questionText: "Eating fast food too often can increase the {{GAP_2}} of getting serious diseases.",
      correctAnswer: ["risk"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A thing that can increase or decrease." },
      synonyms: [{ questionKeyword: "often", options: [{ text: "regular", isCorrect: true, meaning: "happening frequently" }, { text: "rarely", isCorrect: false, meaning: "not happening often" }] }],
      distractors: [{ text: "drawbacks", type: "Context Trap", explanation: "Drawbacks are general disadvantages, risk specifically relates to diseases here." }]
    },
    {
      id: "p3_q3", order: 3, wordLimit: 1,
      questionText: "The large cattle farms used by the industry create a lot of greenhouse gas {{GAP_3}}.",
      correctAnswer: ["emissions"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "Refers to gases released into the air." },
      synonyms: [{ questionKeyword: "large", options: [{ text: "massive", isCorrect: true, meaning: "very big" }, { text: "tiny", isCorrect: false, meaning: "very small" }] }],
      distractors: [{ text: "waste", type: "Topic Trap", explanation: "Plastic waste is mentioned, but greenhouse gases are 'emissions'." }]
    },
    {
      id: "p3_q4", order: 4, wordLimit: 1,
      questionText: "To attract health-conscious customers, some restaurants now offer {{GAP_4}} chicken.",
      correctAnswer: ["grilled"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes how the chicken is cooked." },
      synonyms: [{ questionKeyword: "attract", options: [{ text: "appeal", isCorrect: true, meaning: "to be interesting or attractive" }, { text: "bore", isCorrect: false, meaning: "to make someone uninterested" }] }],
      distractors: [{ text: "salads", type: "List Trap", explanation: "Salads are an option, but the blank needs to modify 'chicken'." }]
    },
    {
      id: "p3_q5", order: 5, wordLimit: 1,
      questionText: "Experts suggest that people should {{GAP_5}} the amount of fast food they eat.",
      correctAnswer: ["limit"],
      grammarHint: { options: ["Verb", "Noun", "Adjective", "Adverb"], correctType: "Verb", explanation: "An action word following 'should'." },
      synonyms: [{ questionKeyword: "suggest", options: [{ text: "advise", isCorrect: true, meaning: "to give a recommendation" }, { text: "force", isCorrect: false, meaning: "to make someone do something" }] }],
      distractors: [{ text: "adapt", type: "Subject Trap", explanation: "Companies adapt, but people should limit their intake." }]
    }
  ]
};

export const p4: Passage = {
  id: 'p4',
  title: 'Countryside Rail Journeys',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Taking a train through the picturesque countryside is widely regarded as one of the most romantic and relaxing ways to travel. In an era where speed is often prioritized over the actual journey, traveling by rail allows people to disconnect from their hectic routines and truly appreciate their surroundings. Unlike airplanes or cars, rail journeys offer passengers the chance to sit back and enjoy stunning landscapes moving slowly past their windows. From rolling green hills and dense forests to quiet village stations and sparkling rivers, a scenic train ride provides a unique, uninterrupted perspective on a country's natural beauty that cannot be experienced from thirty thousand feet in the air.

One of the greatest, most celebrated advantages of rail travel is the ample physical space provided to every ticket holder. Passengers can easily walk around the carriages, stretch their legs, or visit the dining car for a hot drink. This level of freedom is entirely absent in modern air travel, where individuals are largely confined to cramped, narrow seats for hours on end. This level of comfort makes trains particularly appealing for older travelers or families with young children who might find long car journeys stressful. Moreover, modern trains are increasingly equipped with extra-large panoramic windows, free wireless internet, and highly comfortable ergonomic seating, dramatically enhancing the overall viewing and traveling experience.

However, a successful, hassle-free rail journey still requires some careful preparation and forethought. It is highly recommended to book your tickets in advance, especially during the summer holiday season when popular routes are often crowded. Waiting until the last minute can result in exorbitant prices or completely sold-out trains. Additionally, passengers should pack light luggage because storage space on trains can be surprisingly limited. By planning ahead and packing smartly, travelers can ensure their countryside rail journey is a peaceful, enchanting, and deeply memorable adventure.`,
  questions: [
    {
      id: "p4_q1", order: 1, wordLimit: 1,
      questionText: "Traveling by train allows people to view beautiful {{GAP_1}} through the window.",
      correctAnswer: ["landscapes"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A plural noun representing scenery." },
      synonyms: [{ questionKeyword: "view", options: [{ text: "enjoy", isCorrect: true, meaning: "take pleasure in" }, { text: "ignore", isCorrect: false, meaning: "refuse to notice" }] }],
      distractors: [{ text: "hills", type: "Detail Trap", explanation: "Hills are an example, but the general term used for the view is landscapes." }]
    },
    {
      id: "p4_q2", order: 2, wordLimit: 1,
      questionText: "Passengers can visit the dining car if they want to get a hot {{GAP_2}}.",
      correctAnswer: ["drink"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "An object you can consume." },
      synonyms: [{ questionKeyword: "visit", options: [{ text: "go", isCorrect: true, meaning: "to move to a place" }, { text: "leave", isCorrect: false, meaning: "to go away from" }] }],
      distractors: [{ text: "meal", type: "Assumption Trap", explanation: "Dining cars serve meals, but the text specifically mentions a 'hot drink'." }]
    },
    {
      id: "p4_q3", order: 3, wordLimit: 1,
      questionText: "Trains are a comfortable option for families who find long trips by {{GAP_3}} stressful.",
      correctAnswer: ["car"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "A mode of transportation." },
      synonyms: [{ questionKeyword: "comfortable", options: [{ text: "relaxing", isCorrect: true, meaning: "reducing tension" }, { text: "painful", isCorrect: false, meaning: "causing physical pain" }] }],
      distractors: [{ text: "airplanes", type: "Context Trap", explanation: "Airplanes are mentioned in the intro, but the text compares stressful trips to car journeys." }]
    },
    {
      id: "p4_q4", order: 4, wordLimit: 1,
      questionText: "During the summer, train routes can get very {{GAP_4}}, so buy tickets early.",
      correctAnswer: ["crowded"],
      grammarHint: { options: ["Adjective", "Noun", "Verb", "Adverb"], correctType: "Adjective", explanation: "Describes the condition of the train routes." },
      synonyms: [{ questionKeyword: "early", options: [{ text: "advance", isCorrect: true, meaning: "done before the usual time" }, { text: "late", isCorrect: false, meaning: "doing something after the deadline" }] }],
      distractors: [{ text: "popular", type: "Adjective Trap", explanation: "Routes are popular, but the reason you book early is because they get crowded." }]
    },
    {
      id: "p4_q5", order: 5, wordLimit: 1,
      questionText: "Because train storage is small, it is smart to bring only light {{GAP_5}}.",
      correctAnswer: ["luggage"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Something passengers bring with them." },
      synonyms: [{ questionKeyword: "small", options: [{ text: "limited", isCorrect: true, meaning: "restricted in size or amount" }, { text: "huge", isCorrect: false, meaning: "extremely large" }] }],
      distractors: [{ text: "preparation", type: "Meaning Trap", explanation: "Preparation is needed, but 'light' describes the luggage." }]
    }
  ]
};

export const p5: Passage = {
  id: 'p5',
  title: 'Sustainable Eco-Tourism',
  instruction: 'Choose NO MORE THAN ONE WORD from the passage for each answer.',
  content: `Eco-tourism is an increasingly popular travel trend that focuses on visiting natural areas while minimizing environmental impact. In recent years, millions of globally conscious travelers have actively begun seeking out destinations that prioritize sustainability over sheer profit and endless expansion. Unlike traditional mass tourism, which often damages local ecosystems, eco-tourism aims to protect wildlife and preserve the natural beauty of a region. This highly responsible approach to travel encourages tourists to interact with nature in a respectful, highly educational, and entirely non-destructive manner.

One of the core, foundational principles of eco-tourism is deeply supporting the local economy. Instead of staying in massive, internationally owned luxury hotel chains that funnel profits overseas, eco-tourists often consciously choose smaller accommodations owned directly by local residents. They also hire local guides and purchase handmade crafts, ensuring that the financial benefits of tourism stay within the community. This direct economic injection is absolutely vital for developing rural regions that rely heavily on foreign visitors. Most importantly, this income helps fund local conservation projects, creating a positive cycle of environmental protection and economic growth.

However, true eco-tourism requires strict regulations and constant, vigilant oversight. Without proper management, even well-intentioned tourists can accidentally harm fragile habitats by stepping on rare plants or disturbing animal nesting sites. Simply walking off a designated trail or taking a flash photograph of a nocturnal creature can cause irreversible ecological damage. Therefore, national parks must limit visitor numbers and enforce clear rules. Authorities must heavily penalize those who leave trash behind or attempt to feed wild animals. By traveling responsibly and following all established guidelines, eco-tourists can help ensure that beautiful natural destinations remain unspoiled for future generations to enjoy.`,
  questions: [
    {
      id: "p5_q1", order: 1, wordLimit: 1,
      questionText: "The main goal of eco-tourism is to protect nature and minimize the environmental {{GAP_1}}.",
      correctAnswer: ["impact"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "The object of minimize, referring to an effect." },
      synonyms: [{ questionKeyword: "protect", options: [{ text: "preserve", isCorrect: true, meaning: "maintain something in its original state" }, { text: "destroy", isCorrect: false, meaning: "ruin completely" }] }],
      distractors: [{ text: "trend", type: "Context Trap", explanation: "It is a trend, but what is minimized is the impact." }]
    },
    {
      id: "p5_q2", order: 2, wordLimit: 1,
      questionText: "To support the local community, eco-tourists often prefer to hire local {{GAP_2}}.",
      correctAnswer: ["guides"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Preposition"], correctType: "Noun", explanation: "People that can be hired." },
      synonyms: [{ questionKeyword: "community", options: [{ text: "residents", isCorrect: true, meaning: "people who live somewhere" }, { text: "foreigners", isCorrect: false, meaning: "people from another country" }] }],
      distractors: [{ text: "crafts", type: "Verb Trap", explanation: "Tourists purchase crafts, they hire guides." }]
    },
    {
      id: "p5_q3", order: 3, wordLimit: 1,
      questionText: "Money from eco-tourism is frequently used to fund environmental {{GAP_3}} projects.",
      correctAnswer: ["conservation"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Modifies 'projects' to describe what kind they are." },
      synonyms: [{ questionKeyword: "fund", options: [{ text: "support", isCorrect: true, meaning: "give financial assistance" }, { text: "steal", isCorrect: false, meaning: "take without permission" }] }],
      distractors: [{ text: "protection", type: "Synonym Trap", explanation: "The text says 'environmental protection' later, but it specifically says 'conservation projects'." }]
    },
    {
      id: "p5_q4", order: 4, wordLimit: 1,
      questionText: "Tourists can accidentally damage nature by walking on rare {{GAP_4}}.",
      correctAnswer: ["plants"],
      grammarHint: { options: ["Noun", "Adjective", "Verb", "Adverb"], correctType: "Noun", explanation: "Something found in nature that can be stepped on." },
      synonyms: [{ questionKeyword: "walking", options: [{ text: "stepping", isCorrect: true, meaning: "putting a foot down" }, { text: "flying", isCorrect: false, meaning: "moving through air" }] }],
      distractors: [{ text: "habitats", type: "Scope Trap", explanation: "Habitats are harmed generally, but specifically they step on rare plants." }]
    },
    {
      id: "p5_q5", order: 5, wordLimit: 1,
      questionText: "National parks need to enforce strict {{GAP_5}} to manage tourist activities properly.",
      correctAnswer: ["rules"],
      grammarHint: { options: ["Noun", "Verb", "Adjective", "Adverb"], correctType: "Noun", explanation: "Something that authorities enforce." },
      synonyms: [{ questionKeyword: "strict", options: [{ text: "clear", isCorrect: true, meaning: "easy to understand and definite" }, { text: "vague", isCorrect: false, meaning: "unclear" }] }],
      distractors: [{ text: "regulations", type: "Synonym Trap", explanation: "The text says 'requires strict regulations' but 'enforce clear rules'." }]
    }
  ]
};
