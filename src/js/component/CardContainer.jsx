import React from 'react'
import { Card } from './Card'
export const CardContainer = () => {
  return (
    <div className='row mt-3'>
      <div className='col-10 col-md-3 ms-auto mt-3'>
        <Card />
      </div>
      <div className='col-10 col-md-3 ms-auto mt-3'>
        <Card />
      </div>
      <div className='col-10 col-md-3 ms-auto mt-3'>
        <Card />
      </div>
      <div className='col-10 col-md-3 ms-auto mt-3'>
        <Card />
      </div>
    </div>
  )
}
