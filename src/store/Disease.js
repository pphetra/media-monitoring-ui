/**
 * Created by pphetra on 11/10/2017 AD.
 */
let defaultState = {

    diseases: {
        1: {
            name: 'MERS',
            provinces: [
                {
                    name: 'province A',
                    contactInfo:'Nguyen Van A',
                    numberOfCases: 2,
                    articles: [
                        {
                            provinceName: 'province A',
                            articleId: 1123,
                            headline: 'ICD-10-CM Codes',
                            content: 'code to identify resistance to antimicrobial drugs',
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
                        },{
                            provinceName: 'province B',
                            articleId: 1123,
                            headline: 'Tuberculosis A15-A19',
                            content: 'infections due to Mycobacterium tuberculosis and Mycobacterium bovis',
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
                        },{
                            provinceName: 'province C',
                            articleId: 11234,
                            headline: 'Respiratory tuberculosis A15',
                            content: 'Mycobacterium infections of the lung',
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
                {
                    name: 'province B',
                    contactInfo:'Le Van B A',
                    numberOfCases: 10,
                    articles: [
                        {
                            provinceName: 'province C',
                            articleId: 1123,
                            headline: 'ICD-10-CM Codes',
                            content: 'code to identify resistance to antimicrobial drugs',
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
                {
                    name: 'province C',
                    contactInfo:'Hoang Dinh C',
                    numberOfCases: 100,
                    articles: [
                        {
                            provinceName: 'province B',
                            articleId: 1123,
                            headline: 'Tuberculosis A15-A19',
                            content: 'infections due to Mycobacterium tuberculosis and Mycobacterium bovis',
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
                        },{
                            provinceName: 'province C',
                            articleId: 11234,
                            headline: 'Respiratory tuberculosis A15',
                            content: 'Mycobacterium infections of the lung',
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
                }

            ],

        },
        2: {
            name: 'H3N2',
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
                },{
                    provinceName: 'province B',
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
                },{
                    provinceName: 'province C',
                    articleId: 11234,
                    headline: 'hello world 2',
                    content: 'xxxxxxx xxxxxxxdsdfasdf',
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
        }
    }
}

const diseaseStore = (state = defaultState, action) => {
    return state
}

export default diseaseStore