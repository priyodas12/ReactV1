import React from 'react'

export function Props(props) {


  return (
    <>
      <h1>Hello {props.name}</h1>
      {props.children}
    </>
  )
}

