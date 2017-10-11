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
    ]
}

const groupStore = (state = defaultState, action) => {
    return state
}

export default groupStore