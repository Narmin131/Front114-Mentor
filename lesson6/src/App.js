import React from 'react'
import FunctionComp from './FunctionComp'
import ClassComp from './ClassComp'
import Section1 from './Section1'
import Section2 from './Section2'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header/>
      <FunctionComp/>
      <h1>sectionlarimiz basliyir</h1>
      <Section1/>
      <Section2/>
      <ClassComp/>
    </div>
  )
}

export default App