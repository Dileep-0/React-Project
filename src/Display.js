import React from 'react'

export default function Display(props){ 
  return (
    <div className="display-container">
        <h1 className="display-message">Hello, {props.showname}</h1>
    </div>
  )
}
