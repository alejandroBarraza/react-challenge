import React from 'react'

export const Jumbotron = () => {
  return (
    <div className='jumbotron bg-light px-4 pb-5 pt-2'>
      <h1 className='display-4'>A Warm Welcome!</h1>
      <p className='lead'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        voluptatibus atque tenetur rerum est explicabo fuga aliquid consequuntur
        eos repellendus!
      </p>

      <a className='btn btn-primary btn-lg' href='#' role='button'>
        Call to action!
      </a>
    </div>
  )
}
