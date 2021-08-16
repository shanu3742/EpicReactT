

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() =>{
  document.body.innerHTML=''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div =  document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<Counter />,div)
  //console.log(document.body.innerHTML)
  const message = div.firstChild.querySelector('div')
 // console.log(message.textContent)
  expect(message.textContent).toBe('Current count: 0')
 

//  get a reference to the increment and decrement buttons:
  const [decrement,increment] =document.body.querySelectorAll('button')
//onclick on increment output value should be equal to expected  value 


const incrementClickEvent =  new MouseEvent('click',{
  bubbles:true,
  cancelable:true,
  button:0
})
  increment.dispatchEvent(incrementClickEvent)
  expect(message.textContent).toBe('Current count: 1')
  //console.log(message.textContent)
   
  //decrement.click()
  const decrementClickEvent = new MouseEvent('click',{
    bubbles:true,
    cancelable:true,
    button:0
  })
  decrement.dispatchEvent(decrementClickEvent)
  expect(message.textContent).toBe('Current count: 0')
  //console.log(message.textContent)

  
})

/* eslint no-unused-vars:0 */
