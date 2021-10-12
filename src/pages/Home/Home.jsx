import React from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import GeneralLayout from '../../layouts/GeneralLayout'

function Home() {
    return (
        <GeneralLayout>
            <div className="bg-white p-4 rounded flex flex-row">
                <div className="w-1/5">
                    <CategoriesDropdown />
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Home
