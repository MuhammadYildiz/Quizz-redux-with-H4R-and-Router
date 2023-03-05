import { createReduxModule } from "hooks-for-redux"

export const initialState = {
    seeQuiz: false,
    quizStarted: false,
    showResult: false,
    alertAnswer: false,
    showAllCorrectAnswer: false,
    uppdateBtn: false,
    deleteBtn:false,
    currentQuestion: 0,
    score: 0,

    questions: [
        {
            id: 1,
            title: "What continent is Sweden in ?",
            alternative1: "Asia",
            alternative2: "Europe",
            alternative3: "Africa",
            correctAnswer: "Europe"
        },
        {
            id: 2,
            title: "What is the name of the capital in Sweden ?",
            alternative1: "Malmö",
            alternative2: "Göteborg",
            alternative3: "Stockholm",
            correctAnswer: "Stockholm"
        },
        {
            id: 3,
            title: "What day is swedish national day ?",
            alternative1: "6 june",
            alternative2: "6 may",
            alternative3: "10 june",
            correctAnswer: "6 june"
        },
        {
            id: 4,
            title: "What is the official language of Sweden ?",
            alternative1: "English",
            alternative2: "Swedish",
            alternative3: "Finnish",
            correctAnswer: "Swedish"
        },
    ],
}

export const [useQuiz, { setSeeQuiz, startQuiz, nextQuestion, prevQuestion, chnageScore, showResult, alertAnswer, showCorrectAnswer, addQuizzes, handleUpdateBtn, updateQuizzes, deletQuestion,changeDeleteBtn }] = createReduxModule("quiz", initialState, {
    setSeeQuiz: (state) => {
        return {
            ...state,
            seeQuiz: state.seeQuiz = !state.seeQuiz,
        }
    },
    startQuiz: (state) => {
        return {
            ...state,
            quizStarted: state.quizStarted = !state.quizStarted,
        }
    },
    nextQuestion: (state, number) => {
        return {
            ...state,
            currentQuestion: state.currentQuestion += number,
            alertAnswer: state.alertAnswer = false,
        }
    },
    prevQuestion: (state, number) => {
        return {
            ...state,
            currentQuestion: state.currentQuestion -= number,
        }
    },

    chnageScore: (state, value) => {
        return {
            ...state,
            score: state.score += value,
        }
    },
    showResult: (state) => {
        return {
            ...state,
            showResult: state.showResult = !state.showResult,
            quizStarted: state.quizStarted = !state.quizStarted
        }
    },
    alertAnswer: (state) => {
        return {
            ...state,
            alertAnswer: state.alertAnswer = true,
        }
    },
    showCorrectAnswer: (state) => {
        return {
            ...state,
            showAllCorrectAnswer: state.showAllCorrectAnswer = !state.showAllCorrectAnswer
        }
    },
    /* Add Quizzes */
    addQuizzes: (state, question) => {
        return {
            ...state,
            questions: [...state.questions, question]
        }
    },
    /* show Uptade */
    handleUpdateBtn: (state) => {
        return {
            ...state,
            uppdateBtn: state.uppdateBtn = !state.uppdateBtn
        }
    },
    /* Uppdate Question */
    updateQuizzes: (state, { title, id, alternative1, alternative2, alternative3, correctAnswer }) => {
        return {
            ...state,
            questions: state.questions.map((question) => {
                if (question.title == title) {
                    question.alternative1 = alternative1
                    question.alternative2 = alternative2
                    question.alternative3 = alternative3
                    question.correctAnswer = correctAnswer
                }
                return question;
            })
        }
    },
    /* Deleye Question */
    changeDeleteBtn:(state)=>{
        return{
            ...state,
            deleteBtn:state.deleteBtn = true,
        }
    },
    deletQuestion: (state, quizTitle) => {
        return {
            ...state,
            questions: state.questions.filter((question) => {
                return question.title != quizTitle
            })
        }
    }
})
