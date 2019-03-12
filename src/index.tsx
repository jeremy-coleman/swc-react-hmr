import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './App'

// function App() {
//   return <h1>JSX is working!</h1>
// }

ReactDOM.render(<App />, document.getElementById('root'))

// @ts-ignore
if(module.hot){module.hot.accept()}