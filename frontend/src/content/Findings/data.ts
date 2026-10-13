export type City = 'burnaby' | 'courtenay';

export const cities: City[] = ['burnaby', 'courtenay'];

export const posterLanguages = [
    { id: "en", file: "en", native: "English", hreflang: "en" },
    { id: "zh", file: "zh-hans", native: "中文", hreflang: "zh-Hans" },
    { id: "ti", file: "ti", native: "ትግርኛ", hreflang: "ti" },
    { id: "pa", file: "pa", native: "ਪੰਜਾਬੀ", hreflang: "pa" },
    { id: "ko", file: "ko", native: "한국어", hreflang: "ko" },
    { id: "fa", file: "fa", native: "فارسی", hreflang: "fa", rtl: true },
    { id: "uk", file: "uk", native: "Українська", hreflang: "uk" },
] as const;

export const posterBytes: Record<City, Record<(typeof posterLanguages)[number]["id"], number>> = {
    burnaby: { en: 459958, zh: 859789, ti: 521154, pa: 487854, ko: 666957, fa: 471687, uk: 504360 },
    courtenay: { en: 427849, zh: 852333, ti: 476830, pa: 453500, ko: 655640, fa: 427055, uk: 472931 },
};

export const findingsData = {
    burnaby: {
        n: { total: 196, newcomers: 78 },
        ethnicity: [
            { id: 'chinese', value: 31.5 },
            { id: 'westAsian', value: 27.4 },
            { id: 'white', value: 12.3 },
            { id: 'southAsian', value: 9.6 },
            { id: 'latinAmerican', value: 5.5 },
            { id: 'black', value: 4.1 },
            { id: 'korean', value: 4.1 },
            { id: 'southeastAsian', value: 2.7 },
            { id: 'japanese', value: 2.7 },
        ],
        gender: [
            { id: 'woman', value: 76.6 },
            { id: 'man', value: 20.8 },
            { id: 'nonBinary', value: 1.3 },
            { id: 'transgender', value: 1.3 },
        ],
        age: [
            { id: 'under18', value: 1.3 },
            { id: 'age18to24', value: 6.5 },
            { id: 'age25to34', value: 27.2 },
            { id: 'age35to44', value: 35 },
            { id: 'age45to54', value: 14.3 },
            { id: 'age55plus', value: 15.6 },
        ],
        timeInBC: [
            { id: 'underOneYear', value: 31.2 },
            { id: 'oneToThreeYears', value: 35 },
            { id: 'fourToSixYears', value: 33.8 },
        ],
        questions: [
            {
                id: 'infoSources',
                items: [
                    { id: 'friendsFamily', value: 47.4 },
                    { id: 'socialMedia', value: 47.4 },
                    { id: 'cityWebsite', value: 34.0 },
                ],
            },
            {
                id: 'reasons',
                items: [
                    { id: 'enjoyNature', value: 65.38 },
                    { id: 'haveFun', value: 58.9 },
                    { id: 'familyFriends', value: 56.4 },
                ],
            },
            {
                id: 'activities',
                items: [
                    { id: 'parks', value: 67.9 },
                    { id: 'swimming', value: 50 },
                    { id: 'events', value: 39.7 },
                ],
            },
            {
                id: 'barriers',
                items: [
                    { id: 'lackAwareness', value: 24.4 },
                    { id: 'lackInformation', value: 21.8 },
                    { id: 'language', value: 20.5 },
                ],
            },
        ],
        feelings: [
            {
                id: 'belonging',
                items: [
                    { id: 'welcome', value: 5 },
                    { id: 'seeThemselves', value: 5 },
                ],
            },
            {
                id: 'belongingDignity',
                items: [
                    { id: 'fitIn', value: 4 },
                    { id: 'shareIdeas', value: 5 },
                ],
            },
            {
                id: 'dignityJustice',
                items: [
                    { id: 'enoughActivities', value: 4 },
                    { id: 'rightActivities', value: 4 },
                ],
            },
        ],
        swimming: [
            { id: 'canSwim', value: 5 },
            { id: 'comfortable', value: 3 },
        ],
        swimBarriers: [
            { id: 'safety', value: 24.4 },
            { id: 'cannotSwim', value: 16.7 },
            { id: 'swimwear', value: 7.7 },
        ],
    },
    courtenay: {
        n: { total: 111, newcomers: 47 },
        ethnicity: [
            { id: 'white', value: 30.9 },
            { id: 'chinese', value: 14.3 },
            { id: 'southAsian', value: 11.9 },
            { id: 'black', value: 9.5 },
            { id: 'southeastAsian', value: 7.1 },
            { id: 'westAsian', value: 7.1 },
            { id: 'latinAmerican', value: 7.1 },
            { id: 'korean', value: 4.8 },
            { id: 'japanese', value: 4.8 },
            { id: 'indigenous', value: 2.38 },
        ],
        gender: [
            { id: 'woman', value: 54.4 },
            { id: 'man', value: 45.6 },
        ],
        age: [
            { id: 'under18', value: 10.6 },
            { id: 'age18to24', value: 17 },
            { id: 'age25to34', value: 6.4 },
            { id: 'age35to44', value: 31.9 },
            { id: 'age45to54', value: 19.2 },
            { id: 'age55plus', value: 14.9 },
        ],
        timeInBC: [
            { id: 'underOneYear', value: 21.3 },
            { id: 'oneToThreeYears', value: 65.9 },
            { id: 'fourToSixYears', value: 12.8 },
        ],
        questions: [
            {
                id: 'infoSources',
                items: [
                    { id: 'friendsFamily', value: 59.6 },
                    { id: 'socialMedia', value: 40.4 },
                    { id: 'culturalGroups', value: 34.0 },
                ],
            },
            {
                id: 'reasons',
                items: [
                    { id: 'relax', value: 72.3 },
                    { id: 'enjoyNature', value: 70.2 },
                    { id: 'haveFun', value: 59.6 },
                ],
            },
            {
                id: 'activities',
                items: [
                    { id: 'parks', value: 63.8 },
                    { id: 'swimming', value: 44.7 },
                    { id: 'events', value: 34.0 },
                ],
            },
            {
                id: 'barriers',
                items: [
                    { id: 'lackInformation', value: 27.7 },
                    { id: 'language', value: 27.7 },
                    { id: 'lackTime', value: 27.7 },
                ],
            },
        ],
        feelings: [
            {
                id: 'belonging',
                items: [
                    { id: 'welcome', value: 5 },
                    { id: 'seeThemselves', value: 5 },
                ],
            },
            {
                id: 'belongingDignity',
                items: [
                    { id: 'fitIn', value: 5 },
                    { id: 'shareIdeas', value: 5 },
                ],
            },
            {
                id: 'dignityJustice',
                items: [
                    { id: 'enoughActivities', value: 4 },
                    { id: 'rightActivities', value: 4 },
                ],
            },
        ],
        swimming: [
            { id: 'canSwim', value: 5 },
            { id: 'comfortable', value: 3 },
        ],
        swimBarriers: [
            { id: 'cannotSwim', value: 21.3 },
            { id: 'safety', value: 17.0 },
            { id: 'alone', value: 14.9 },
        ],
    },
} as const;
