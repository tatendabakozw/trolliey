import React from 'react'

function GeneralLayout({children}) {
    return (
        <div>
            <div className="header">
                header
            </div>
            <div className="body">
                {children}
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    )
}

export default GeneralLayout
