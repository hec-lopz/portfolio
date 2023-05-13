import '../styles/_projects.css'
import { getData } from '../js/dataFunctions'
import Card from './Card.jsx'
import React, { useState, useEffect } from 'react'
const promise = getData()
const Projects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    promise.then((arr) => {
      setData(arr)
    })
  }, [data])

  if (data.length === 0) {
    return <h1>Cargando</h1>
  } else {
    return (
      <div className='grid-container'>
        {data.map((project, i) => (
          <Card project={project} key={i}></Card>
        ))}
      </div>
    )
  }
}

export default Projects
