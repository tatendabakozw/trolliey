import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import RedButton from '../buttons/RedButton'

function ProductItem({picture, rating, name, description, price, discount_price, dicount, id}) {
    return (
        <div className="relative flex flex-col w-full">
            <div className="md:h-56 h-40 overflow-hidden rounded">
                <img src={picture} alt="product" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-full" />
            </div>
            <div className="star flex flex-row items-center my-2">
                {
                    rating?.map((rate, index)=>(
                        <StarIcon key={index} className="text-yellow-400" height={16} width={16} />
                    ))
                }
            </div>
            <div className="name overflow-ellipsis overflow-hidden">
                <p className="text-gray-400 text-sm ">{name}</p>
                <p className="line-clamp-2 text-sm text-gray-700 my-1 overflow-ellipsis font-semibold">{description}</p>
            </div>

            {/* //price */}
            <div className="flex flex-row items-center">
                <p className="text-gray-900 font-bold mr-2">${discount_price}</p>
                <p className="line-through text-gray-400 text-sm">${price}</p>
            </div>

            <div className="flex mt-1">
                <RedButton text="add to cart" />
            </div>
        </div>
    )
}

export default ProductItem
