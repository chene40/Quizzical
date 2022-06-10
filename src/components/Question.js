import React from 'react'
import he from 'he'

export default function Question({ data }){

    const randNum = Math.floor(Math.random() * data.incorrect_answers.length)
    const answersArray = data.incorrect_answers
    answersArray.splice(randNum, 0, data.correct_answer)

    const answers = answersArray.map(answer => 
        <button className={`answer-button ${answer === data.correct_answer ? 'correct' : ''}`} key={answer}> {answer} </button>
    )

    const decodedQuestion = he.decode(data.question)

    return(
        <div className="individual-question">
            <h3 className="question"> {decodedQuestion} </h3>
            <div className="answers">
                {answers}
            </div>
            <hr/>
        </div>
    )   
}