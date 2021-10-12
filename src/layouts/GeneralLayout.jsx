import React from 'react'
import GeneralNavbar from '../components/navigation/GeneralNavbar'

function GeneralLayout({children}) {
    return (
        <div>
            <div className="header">
                <GeneralNavbar/>
            </div>
            <div className="lg:px-32 md:px-16 px-2 bg-gray-100 min-h-screen">
                <p className="flex text-gray-700 text-sm py-2 font-semibold">Free Shipping On All Order Over $100 Code</p>
                {children}
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    )
}

export default GeneralLayout
