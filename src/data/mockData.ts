export interface GapQuestion {
  id: string;
  order: number;
  wordLimit: number;
  questionText: string; // The sentence containing {{GAP_X}}
  correctAnswer: string[];
  grammarHint: {
    options: string[];
    correctType: string;
    explanation: string;
  };
  synonyms: {
    questionKeyword: string;
    options: {
      text: string;
      isCorrect: boolean;
      meaning: string;
    }[];
  }[];
  distractors: {
    text: string;
    type: string;
    explanation: string;
  }[];
}

export interface Passage {
  id: string;
  title: string;
  content: string; // The complete text content without gaps
  instruction: string; // e.g. "NO MORE THAN TWO WORDS"
  questions: GapQuestion[];
}

export const mockPassage: Passage = {
  id: "p1",
  title: "The Global Impact of the Coffee Industry",
  instruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
  content: `Coffee is one of the world's most popular beverages, consumed by millions of people every day. However, its journey from a small cherry on a shrub to the steaming cup on your breakfast table is a complex process that significantly impacts global economies, cultures, and environments. The origins of coffee can be traced back to the ancient coffee forests on the Ethiopian plateau. According to legend, a goat herder named Kaldi first discovered the potential of these beloved beans when he noticed that his goats became unusually energetic after eating berries from a certain tree. From these humble beginnings, coffee cultivation and trade spread across the Arabian Peninsula, and by the 16th century, it was known in Persia, Egypt, Syria, and Turkey.

Today, the coffee industry is a massive global enterprise. It is primarily grown in the "Bean Belt," an equatorial band that spans across Latin America, Africa, and the Asia-Pacific region. These areas provide the ideal conditions for coffee plants to thrive: a tropical climate, rich soil, and high altitudes. Brazil currently holds the title of the world's largest coffee producer, responsible for supplying approximately a third of all coffee consumed globally. Vietnam and Colombia follow closely behind, each known for their distinct flavor profiles and unique processing methods. The economic significance of coffee cannot be overstated. For many developing nations, it is a crucial export commodity that supports the livelihoods of millions of smallholder farmers and their families.

Despite its economic benefits, the rapid expansion of the coffee industry has raised serious environmental concerns. Traditional coffee farming methods often involved cultivating plants under a canopy of shade trees, which preserved local biodiversity and maintained soil health. However, in an effort to increase yields, many farmers have transitioned to "sun cultivation." This method requires clearing large tracts of forest to plant coffee bushes in direct sunlight. While it boosts short-term production, sun cultivation leads to deforestation, soil erosion, and a heavy reliance on chemical fertilizers and pesticides. In response to these environmental challenges, there has been a growing movement towards sustainable coffee production. Initiatives such as Fair Trade and Rainforest Alliance aim to promote environmentally friendly farming practices and ensure fair compensation for farmers.

Furthermore, the impact of climate change poses a significant threat to the future of coffee. Rising temperatures and changing precipitation patterns are making many traditional coffee-growing regions unsuitable for cultivation. This has led to the spread of diseases such as coffee leaf rust, which can devastate entire crops. To mitigate these risks, researchers are actively working on developing new, resilient coffee varieties that can withstand harsher climates. As consumers become more aware of these issues, there is an increasing demand for ethically sourced and sustainably produced coffee. Ultimately, the future of this beloved beverage will depend on our ability to balance economic growth with environmental stewardship, ensuring that the coffee industry can continue to thrive for generations to come.`,
  questions: [
    {
      id: "q1",
      order: 1,
      wordLimit: 2,
      questionText: "The earliest known coffee plants originated on a plateau in {{GAP_1}}.",
      correctAnswer: ["ethiopia"],
      grammarHint: {
        options: ["Adjective", "Noun", "Verb", "Adverb"],
        correctType: "Noun",
        explanation: "The blank comes after the preposition 'in', indicating a location. Therefore, a noun (specifically a proper noun) is required."
      },
      synonyms: [
        { 
          questionKeyword: "earliest known", 
          options: [
            { text: "origins", isCorrect: true, meaning: "the point or place where something begins, arises, or is derived." },
            { text: "destinations", isCorrect: false, meaning: "the places to which someone or something is going or being sent." }
          ]
        }
      ],
      distractors: [
        { text: "arabian peninsula", type: "Location Trap", explanation: "Coffee spread to the Arabian Peninsula later; it did not originate there." }
      ]
    },
    {
      id: "q2",
      order: 2,
      wordLimit: 2,
      questionText: "Coffee is mainly cultivated in a region known as the {{GAP_2}}.",
      correctAnswer: ["bean belt"],
      grammarHint: {
        options: ["Noun", "Verb", "Adjective", "Preposition"],
        correctType: "Noun",
        explanation: "The article 'the' indicates that a noun or noun phrase is needed to name the specific region."
      },
      synonyms: [
        { 
          questionKeyword: "cultivated", 
          options: [
            { text: "grown", isCorrect: true, meaning: "to produce crops or plants." },
            { text: "destroyed", isCorrect: false, meaning: "to damage something so badly that it cannot be used." }
          ]
        },
        { 
          questionKeyword: "mainly", 
          options: [
            { text: "primarily", isCorrect: true, meaning: "for the most part; mainly." },
            { text: "rarely", isCorrect: false, meaning: "not often; seldom." }
          ]
        }
      ],
      distractors: [
        { text: "equatorial band", type: "Detail Trap", explanation: "While it is an equatorial band, the specific name known for this region is the 'Bean Belt'." }
      ]
    },
    {
      id: "q3",
      order: 3,
      wordLimit: 2,
      questionText: "The country that produces the highest amount of coffee in the world is {{GAP_3}}.",
      correctAnswer: ["brazil"],
      grammarHint: {
        options: ["Noun", "Adjective", "Verb", "Adverb"],
        correctType: "Noun",
        explanation: "The sentence requires the name of a country acting as the subject complement after 'is'."
      },
      synonyms: [
        { 
          questionKeyword: "highest amount", 
          options: [
            { text: "largest", isCorrect: true, meaning: "of considerable or relatively great size, extent, or capacity." },
            { text: "smallest", isCorrect: false, meaning: "of a size that is less than normal or usual." }
          ]
        }
      ],
      distractors: [
        { text: "vietnam", type: "Runner-up Trap", explanation: "Vietnam is a major producer but follows behind Brazil, which is the largest." }
      ]
    },
    {
      id: "q4",
      order: 4,
      wordLimit: 2,
      questionText: "Many farmers in developing countries depend on coffee as an important {{GAP_4}} to support their families.",
      correctAnswer: ["export commodity", "export"],
      grammarHint: {
        options: ["Adjective", "Noun", "Verb", "Adverb"],
        correctType: "Noun",
        explanation: "The article 'an' and adjective 'important' require a noun to complete the phrase."
      },
      synonyms: [
        { 
          questionKeyword: "depend on", 
          options: [
            { text: "crucial", isCorrect: true, meaning: "decisive or critical, especially in the success or failure of something." },
            { text: "trivial", isCorrect: false, meaning: "of little value or importance." }
          ]
        }
      ],
      distractors: [
        { text: "global enterprise", type: "Context Trap", explanation: "The industry is a global enterprise, but for the farmers themselves, it is an export commodity." }
      ]
    },
    {
      id: "q5",
      order: 5,
      wordLimit: 2,
      questionText: "Traditional farming methods grew coffee plants underneath {{GAP_5}} to protect biodiversity.",
      correctAnswer: ["shade trees", "a canopy"],
      grammarHint: {
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correctType: "Noun",
        explanation: "The preposition 'underneath' needs an object (a noun) representing what the plants were grown under."
      },
      synonyms: [
        { 
          questionKeyword: "protect", 
          options: [
            { text: "preserved", isCorrect: true, meaning: "maintain (something) in its original or existing state." },
            { text: "endangered", isCorrect: false, meaning: "put (someone or something) at risk or in danger." }
          ]
        },
        { 
          questionKeyword: "underneath", 
          options: [
            { text: "under", isCorrect: true, meaning: "extending or directly below something." },
            { text: "above", isCorrect: false, meaning: "in extended space over and not touching." }
          ]
        }
      ],
      distractors: [
        { text: "direct sunlight", type: "Opposite Trap", explanation: "Direct sunlight is used in modern 'sun cultivation', not traditional methods." }
      ]
    },
    {
      id: "q6",
      order: 6,
      wordLimit: 2,
      questionText: "To achieve higher crop yields, farmers often clear forests for a practice called {{GAP_6}}.",
      correctAnswer: ["sun cultivation"],
      grammarHint: {
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correctType: "Noun",
        explanation: "The word 'called' introduces the specific name of a practice, which functions as a noun."
      },
      synonyms: [
        { 
          questionKeyword: "higher crop yields", 
          options: [
            { text: "increase yields", isCorrect: true, meaning: "to produce a larger amount of an agricultural product." },
            { text: "reduce yields", isCorrect: false, meaning: "to produce a smaller amount of an agricultural product." }
          ]
        }
      ],
      distractors: [
        { text: "deforestation", type: "Result Trap", explanation: "Deforestation is the result of clearing the land, but the practice itself is called sun cultivation." }
      ]
    },
    {
      id: "q7",
      order: 7,
      wordLimit: 2,
      questionText: "A negative consequence of modern farming techniques is the increased use of chemical {{GAP_7}}.",
      correctAnswer: ["fertilizers", "pesticides"],
      grammarHint: {
        options: ["Noun", "Adjective", "Verb", "Preposition"],
        correctType: "Noun",
        explanation: "The adjective 'chemical' must modify a plural noun in this context."
      },
      synonyms: [
        { 
          questionKeyword: "negative consequence", 
          options: [
            { text: "leads to", isCorrect: true, meaning: "to cause something to happen or exist." },
            { text: "prevents", isCorrect: false, meaning: "to stop something from happening." }
          ]
        }
      ],
      distractors: [
        { text: "soil erosion", type: "List Trap", explanation: "Soil erosion is a consequence, but it is not preceded by the word 'chemical'." }
      ]
    },
    {
      id: "q8",
      order: 8,
      wordLimit: 2,
      questionText: "Certifications like Fair Trade focus on promoting farming practices that are {{GAP_8}}.",
      correctAnswer: ["sustainable", "environmentally friendly"],
      grammarHint: {
        options: ["Adjective", "Noun", "Verb", "Adverb"],
        correctType: "Adjective",
        explanation: "The linking verb 'are' needs an adjective to describe the farming practices."
      },
      synonyms: [
        { 
          questionKeyword: "promoting", 
          options: [
            { text: "promote", isCorrect: true, meaning: "support or actively encourage (a cause, venture, etc.)." },
            { text: "discourage", isCorrect: false, meaning: "cause (someone) to lose confidence or enthusiasm about doing something." }
          ]
        }
      ],
      distractors: [
        { text: "fair compensation", type: "Detail Trap", explanation: "They ensure fair compensation, but the practices themselves are described as environmentally friendly." }
      ]
    },
    {
      id: "q9",
      order: 9,
      wordLimit: 2,
      questionText: "Global warming has caused diseases like {{GAP_9}} to spread and destroy crops.",
      correctAnswer: ["leaf rust", "coffee rust"],
      grammarHint: {
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correctType: "Noun",
        explanation: "The preposition 'like' is used here to introduce an example of a disease, which is a noun."
      },
      synonyms: [
        { 
          questionKeyword: "global warming", 
          options: [
            { text: "rising temperatures", isCorrect: true, meaning: "an increase in the overall temperature of the earth's atmosphere." },
            { text: "cooling temperatures", isCorrect: false, meaning: "a decrease in the overall temperature." }
          ]
        },
        { 
          questionKeyword: "destroy", 
          options: [
            { text: "devastate", isCorrect: true, meaning: "destroy or ruin (something)." },
            { text: "protect", isCorrect: false, meaning: "keep safe from harm or injury." }
          ]
        }
      ],
      distractors: [
        { text: "precipitation patterns", type: "Cause Trap", explanation: "Changing precipitation causes issues, but it is not a disease." }
      ]
    },
    {
      id: "q10",
      order: 10,
      wordLimit: 2,
      questionText: "Scientists are creating new {{GAP_10}} of coffee that can survive in difficult weather conditions.",
      correctAnswer: ["varieties", "resilient varieties"],
      grammarHint: {
        options: ["Noun", "Adjective", "Verb", "Adverb"],
        correctType: "Noun",
        explanation: "The adjective 'new' modifies a plural noun indicating types of coffee."
      },
      synonyms: [
        { 
          questionKeyword: "scientists", 
          options: [
            { text: "researchers", isCorrect: true, meaning: "a person who carries out academic or scientific research." },
            { text: "amateurs", isCorrect: false, meaning: "a person who engages in a pursuit on an unpaid rather than a professional basis." }
          ]
        },
        { 
          questionKeyword: "survive", 
          options: [
            { text: "withstand", isCorrect: true, meaning: "remain undamaged or unaffected by; resist." },
            { text: "succumb", isCorrect: false, meaning: "fail to resist pressure, temptation, or some other negative force." }
          ]
        }
      ],
      distractors: [
        { text: "entire crops", type: "Reading Trap", explanation: "Entire crops are what get devastated, not what scientists are creating to solve the problem." }
      ]
    }
  ]
};
