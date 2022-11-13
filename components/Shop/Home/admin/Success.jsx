import React from 'react'
import { BiCheck } from 'react-icons/bi'

function Success({message}) {
  return (
    <div>{message} <BiCheck size={25}/></div>
  )
}

export default Success