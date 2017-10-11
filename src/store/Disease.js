/**
 * Created by pphetra on 11/10/2017 AD.
 */
let defaultState = {

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
                    headline: 'hello world',
                    content: 'xxxxxxx xxxxxxx',
                    detected: [
                        {
                            type: 'time',
                            word: '28 jul 2013'
                        },
                        {
                            type: 'place',
                            word: 'province A'
                        }
                    ]
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