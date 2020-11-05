import React from 'react'

export function Jsxelement(props) {

  return (
    //<h1>Hi, I am JSX element</h1>
    React.createElement('div', { id: 'hello1', className: 'test1' }, React.createElement('h1', { id: 'hello2', className: 'test2' }, 'Hi, I am JSX element'))
  )
}


