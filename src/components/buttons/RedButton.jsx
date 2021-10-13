import React from 'react'

function RedButton({outline, text, onClick, className}) {
    return (
        <button 
        onClick={onClick ? onClick : ()=> console.log('no action available')} 
        className={`${className} ${outline ? "text-red-400 bg-white border hover:bg-red-400 hover:text-white" : "bg-red-400 text-white hover:bg-blue-primary "} rounded outline-none border-red-400 `}>
        <p className="text-sm font-semibold md:p-3 p-2 capitalize">{text}</p>
    </button>
    )
}

export default RedButton
