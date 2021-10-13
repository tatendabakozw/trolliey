import React from 'react'
import Footer from '../components/navigation/Footer'
import GeneralNavbar from '../components/navigation/GeneralNavbar'

function GeneralLayout({children}) {
    return (
        <div>
            <div className="z-50 sticky top-0 w-full">
                <GeneralNavbar/>
            </div>
            <div className="lg:px-32 md:px-16 px-2 bg-gray-100 min-h-screen w-full pb-8">
                <p className="flex text-gray-700 text-sm py-2 font-semibold lg:px-8 md:px-4 px-2">Free Shipping On All Order Over $100 Code</p>
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout
