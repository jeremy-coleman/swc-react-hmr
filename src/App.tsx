import React from 'react'
import {hot} from 'react-hot-loader/root'


function AppContainer() {
  return <h1>JSX is working!</h1>
}

export const App = hot(AppContainer)

//nope qq
// import {observable} from 'mobx'
// class DecoratorCheck{
//   @observable message = 'JSX is working'
// }
// const store = new DecoratorCheck()

// function AppContainer() {
//   return <h1>`${store.message}`</h1>
// }