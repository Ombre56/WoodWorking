import React from 'react'
import Image from 'next/image'

export const ReviewItem = ({reviewDetail}) => {
  const { id, name, text, image, rate } = reviewDetail;
  return (
    <div className='item'>
      <div className="shadow-effect">
        <Image src={image} width={84} height={84} alt={id} className="img-circle" />
        <p>{text}</p>
        <p className='customer-rate'>{rate}</p>
      </div>
      <div className="customer-name">
        <h5>{name}</h5>
      </div>
    </div>
  )
}
