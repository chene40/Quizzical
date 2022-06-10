import React from 'react'
import Question from './Question'

const Questions = ({ questions }) => {

    return(
        <div className="questions-box">
            <Question data={questions[0]}/>
            <Question data={questions[1]}/>
            <Question data={questions[2]}/>
            <Question data={questions[3]}/>
            <Question data={questions[4]}/>
        </div>
    )
}

export default Questions