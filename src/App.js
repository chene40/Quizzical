import React, { useState, useEffect } from 'react'
import StartPage from './components/StartPage'
import BlueBlob from './images/BlueBlob.svg'
import YellowBlob from './images/YellowBlob.svg'
import Questions from './components/Questions'

{/* https://opentdb.com/api_config.php */}
{/* https://www.figma.com/file/boFdwjzOLUzxmgWCzCRvdT/Quizzical-App-(Copy)?node-id=8%3A2 */}

export default function App(){

  const [quizStart, setQuizStart] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=5&difficulty=medium').then(res => res.json())
      setData(response.results)
    }
    fetchData()
  }, [])     // fetch api data

  console.log(data)

  return(
    <div className="body">
      {/* <StartPage /> */}
      <img src={BlueBlob} alt="blue blob" className="blueblob"/>
      <img src={YellowBlob} alt="yellow blob" className="yellowblob"/>
      { data && <Questions questions={data}/>}
    </div>
  )
}