import React from 'react'

function BlackButton({ outline, text, onClick, className }) {
    return (
        <button
            onClick={onClick ? onClick : () => console.log('no action available')}
            className={`${className} ${outline ? "text-black bg-white border hover:bg-gray-900 hover:text-white" : "bg-black text-white hover:bg-gray-900 "} rounded outline-none border-blue-primary `}>
            <div className="text-sm font-semibold md:p-3 p-2 capitalize">{text}</div>
        </button>
    )
}

export default BlackButton
