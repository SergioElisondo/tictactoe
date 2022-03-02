import React from 'react'

export default function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
        {props.value}
    </button>
  )
}

// props == parent component

// rfc "react functional component" gets you the template above