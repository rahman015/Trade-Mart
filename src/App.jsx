import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import Vision from './Components/Vision and Mission/Vision'
import Grid from './Components/Grid/Grid'
import Faqs from './Components/Faqs/Faqs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Vision/>
      <Grid/>
      <Faqs/>
    </div>
  )
}

export default App
