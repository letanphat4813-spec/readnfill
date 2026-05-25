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

import { p2, p3, p4, p5 } from './passages_2_to_5';
import { p6, p7, p8, p9 } from './passages_6_to_9';

export const mockPassage: Passage = {
  id: "p1",
  title: "Daily Nutrition Essentials",
  instruction: "Choose NO MORE THAN ONE WORD from the passage for each answer.",
  content: `Many people today want to improve their daily diet to maintain better health and vitality. In our modern, fast-paced world, it is incredibly common for individuals to neglect their nutritional needs due to tight schedules, stressful jobs, and the overwhelming availability of convenience foods. As a result, fatigue, poor concentration, and long-term health issues have become increasingly widespread. However, changing long-term eating habits can be difficult, so experts suggest starting with small, manageable adjustments rather than attempting a complete overnight transformation.

First of all, starting the day with a healthy breakfast is considered vital by nutritionists because it provides your body with the essential energy needed to work efficiently. After fasting throughout the night, your brain and muscles require fuel to function optimally. People who skip this important meal often find themselves feeling sluggish, irritable, and unable to concentrate by midday, leading to decreased productivity. A balanced breakfast, which includes whole grains, fiber, and protein, keeps you full and energized for hours, preventing mid-morning sugar cravings.

Another crucial habit is choosing the right beverages. Many people mistakenly consume empty calories through their daily drinks without realizing the negative impact on their health. Instead of drinking sugar-filled juices or carbonated sodas, it is highly recommended to choose fresh water throughout the day to stay fully hydrated. Soda and packaged juices contain high amounts of artificial sugar, which can lead to a sudden spike in blood glucose followed by a sharp drop in energy later on. Water, on the other hand, supports your digestion, flushes out toxins, and keeps your skin looking vibrant and healthy.

In addition, healthy snacks like organic fruit or almonds are perfect choices for keeping your energy levels high between main meals. Rather than relying on vending machines, taking a few minutes to pack your own snacks can make a massive difference. Having these nutritious options ready helps you avoid the temptation of eating processed junk food, which is often high in unhealthy fats and salt. These harmful ingredients contribute significantly to weight gain and lethargy. 

Expert Advice: Planning your snacks before you leave the house is an effective way to control what you eat during a busy workday. It ensures that you are never caught off guard when hunger strikes.

In conclusion, maintaining a healthy lifestyle does not mean you have to follow a strict, depriving, or boring diet. By making smarter, conscious choices about your breakfast, drinks, and daily snacks, you can significantly improve your long-term well-being, mental clarity, and physical energy.`,
  questions: [
    {
      id: "q1",
      order: 1,
      wordLimit: 1,
      questionText: "Nutritionists consider a healthy breakfast to be {{GAP_1}} because it gives the body essential energy.",
      correctAnswer: ["vital"],
      grammarHint: {
        options: ["Adjective", "Noun", "Verb", "Adverb"],
        correctType: "Adjective",
        explanation: "The word follows 'to be' and describes the breakfast, so an adjective is needed."
      },
      synonyms: [
        { 
          questionKeyword: "vital", 
          options: [
            { text: "important", isCorrect: true, meaning: "having a big effect on people's lives." },
            { text: "unnecessary", isCorrect: false, meaning: "not needed." }
          ]
        }
      ],
      distractors: [
        { text: "difficult", type: "Context Trap", explanation: "The text says changing habits can be 'difficult', but it describes breakfast as 'vital'." }
      ]
    },
    {
      id: "q2",
      order: 2,
      wordLimit: 1,
      questionText: "Instead of sugary drinks, choosing fresh water helps you stay fully {{GAP_2}}.",
      correctAnswer: ["hydrated"],
      grammarHint: {
        options: ["Adjective", "Noun", "Verb", "Preposition"],
        correctType: "Adjective",
        explanation: "The word comes after 'stay fully', requiring an adjective (or past participle acting as an adjective) to describe the state of the body."
      },
      synonyms: [
        { 
          questionKeyword: "choosing", 
          options: [
            { text: "picking", isCorrect: true, meaning: "to take or select something from a group." },
            { text: "refusing", isCorrect: false, meaning: "to say no to something." }
          ]
        }
      ],
      distractors: [
        { text: "energized", type: "Detail Trap", explanation: "Being 'energized' is related to eating breakfast, while water helps you stay 'hydrated'." }
      ]
    },
    {
      id: "q3",
      order: 3,
      wordLimit: 1,
      questionText: "For healthy snacks between main meals, organic fruit and {{GAP_3}} are perfect choices.",
      correctAnswer: ["almonds"],
      grammarHint: {
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correctType: "Noun",
        explanation: "The blank is part of a list of foods (fruit and...), so it must be a noun."
      },
      synonyms: [
        { 
          questionKeyword: "perfect", 
          options: [
            { text: "great", isCorrect: true, meaning: "very good or excellent." },
            { text: "terrible", isCorrect: false, meaning: "very bad." }
          ]
        }
      ],
      distractors: [
        { text: "protein", type: "Memory Trap", explanation: "Protein is mentioned earlier as part of breakfast, not specifically as a snack." }
      ]
    },
    {
      id: "q4",
      order: 4,
      wordLimit: 1,
      questionText: "Having nutritious snacks ready helps you avoid the temptation of eating processed {{GAP_4}} food.",
      correctAnswer: ["junk"],
      grammarHint: {
        options: ["Noun", "Adjective", "Verb", "Adverb"],
        correctType: "Noun",
        explanation: "The word describes the type of food, combining with 'food' to form a compound noun."
      },
      synonyms: [
        { 
          questionKeyword: "avoid", 
          options: [
            { text: "stop", isCorrect: true, meaning: "to not do something or prevent it from happening." },
            { text: "seek", isCorrect: false, meaning: "to look for something." }
          ]
        }
      ],
      distractors: [
        { text: "fast", type: "Common Knowledge Trap", explanation: "'Fast food' is a common phrase, but the text specifically uses the exact term 'junk food'." }
      ]
    },
    {
      id: "q5",
      order: 5,
      wordLimit: 1,
      questionText: "Planning snacks before leaving the house is an effective way to {{GAP_5}} what you eat at work.",
      correctAnswer: ["control"],
      grammarHint: {
        options: ["Verb", "Noun", "Adjective", "Adverb"],
        correctType: "Verb",
        explanation: "The blank follows 'to', indicating an infinitive verb is needed to express an action."
      },
      synonyms: [
        { 
          questionKeyword: "effective", 
          options: [
            { text: "useful", isCorrect: true, meaning: "helping to achieve a good result." },
            { text: "useless", isCorrect: false, meaning: "not helpful or not working." }
          ]
        }
      ],
      distractors: [
        { text: "improve", type: "Synonym Trap", explanation: "You 'improve' your diet generally, but the exact action for planning snacks is to 'control' what you eat." }
      ]
    }
  ]
};

export const initialPassages: Passage[] = [
  mockPassage,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9
];
