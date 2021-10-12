import React, { useState } from 'react'
import { MenuIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'

const categories = [
    { name: 'Accessories parts' },
    { name: 'components' },
    { name: 'tables' },
    { name: 'software' },
    { name: 'phones & PDAs' },
    { name: 'cameras' },
    { name: 'tent house' },
    { name: 'kids products' },
    { name: 'sofa seat' }
]

function CategoriesDropdown() {
    const [show_categories, setShowCategories] = useState(true)
    return (
        <div onClick={show_categories ? () => setShowCategories(false) : () => setShowCategories(true)} className=" transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none flex flex-col">
            <button className="flex flex-row items-center w-full justify-between bg-blue-700 p-3 rounded outline-none border-none">
                <MenuIcon className="text-white mr-3" height={16} width={16} />
                <p className="capitalize text-white text-sm">shop by categories</p>
            </button>
            {
                show_categories ? (
                    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border border-gray-300 rounded mt-2">
                        {
                            categories.map((category, index) => (
                                <div key={index} className="flex flex-row items-center p-2 border-b border-gray-20">
                                    <ArrowRightIcon className="text-gray-700 mr-3" height={12} width={12} />
                                    <p className="text-gray-700 text-sm font-semibold">{category.name}</p>
                                    <div className="flex-1"></div>
                                    <ChevronRightIcon className="text-gray-700" height={16} width={16} />
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default CategoriesDropdown
