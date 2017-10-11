/**
 * Created by pphetra on 11/10/2017 AD.
 */
let defaultState = {
    groupA: [
        {
            id: 1,
            name: 'MERS',
            numberOfCases: 1
        },
        {
            id: 2,
            name: 'H3N2',
            numberOfCases: 7
        }
    ],
    groupB: [
        {
            id: 12,
            name: 'Influenza',
            numberOfCases: 10
        }
    ],
    groupC: [
        {
            id: 22,
            name: 'rash',
            numberOfCases: 2,

        }
    ],
    diseases: {
        1: {
            provinces: [
                {
                    name: 'province A',
                    numberOfCases: 2
                }
            ],
            articles: [
                {
                    provinceName: 'province A',
                    articleId: 1123,
                    headline: 'hello world'
                }
            ]
        },
        2: {
            provinces: [
                {
                    name: 'province A',
                    numberOfCases: 2
                }
            ]
        }
    }
}

const diseaseStore = (state = defaultState, action) => {
    return state
}

export default diseaseStore