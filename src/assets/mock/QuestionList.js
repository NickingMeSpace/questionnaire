const QuestionList = [
    {
        name: 'Название теста',
        config: {
            isRequired: false,
            isAccess: true,
            countAttempts: -1
        },
        info: {
            subject: 'ИТ ОС',
            teacher: 'Тимохин И.О.',
            time: 60,
            countAttempts: 1,
            countQuestions: 20,
            percentOfPassage: 63
        },
        showQuestions: true,
        questions: [
            {
                id: 1,
                name: 'вопрос 1',
                complexity: 'hard',
                type: 'selectTrueAnswer',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                id: 2,
                name: 'вопрос 2',
                complexity: 'hard',
                type: 'selectTrueAnswers',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                name: 'вопрос 3',
                complexity: 'easy',
                type: 'inputAnswer',
                hideAnswers: false,
            },
            {
                name: 'вопрос 4',
                complexity: 'very hard',
                type: 'selectTrueAnswers',
                hideAnswers: true,
            },
        ]
    },
    {
        name: 'Название теста 2',
        config: {
            isRequired: true,
            isAccess: true,
            countAttempts: -1
        },
        info: {
            subject: 'ИТ ИС',
            teacher: 'Букин И.О.',
            time: 0,
            countAttempts: 0,
            countQuestions: 20
        },
        result: 89,
        showQuestions: true,
        questions: [
            {
                id: 1,
                name: 'вопрос 1',
                complexity: 'hard',
                type: 'selectTrueAnswer',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                id: 2,
                name: 'вопрос 2',
                complexity: 'hard',
                type: 'selectTrueAnswers',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                name: 'вопрос 3',
                complexity: 'easy',
                type: 'inputAnswer',
                hideAnswers: false,
            },
            {
                name: 'вопрос 4',
                complexity: 'very hard',
                type: 'selectTrueAnswers',
                hideAnswers: true,
            },
        ]
    },
    {
        name: 'Название теста 3',
        config: {
            isRequired: false,
            isAccess: false,
            countAttempts: -1
        },
        info: {
            time: 0,
            countAttempts: 1,
            countQuestions: 20,
            percentOfPassage: 12
        },
        result: 12,
        showQuestions: false,
        questions: []
    }
];

export default QuestionList;