import React from 'react'

export const Card = () => {
  const cardStyle = {
    width: '18rem',
  }

  return (
    <div className='card ' style={cardStyle}>
      <img
        src='https://picsum.photos/500/325'
        className='card-img-top'
        alt='...'
      />
      <div className='card-body px-0 py-0'>
        <h5 className='card-title p-3 text-center'>Card title</h5>
        <p className='card-text px-3 py-1 text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className='card-footer text-body-secondary text-center p-4'>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}
