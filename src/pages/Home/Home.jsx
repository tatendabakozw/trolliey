import React from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import SearchInput from '../../components/search/SearchInput'
import GeneralLayout from '../../layouts/GeneralLayout'

function Home() {
    return (
        <GeneralLayout>
            <div className="bg-white md:p-4 p-2 rounded flex flex-row md:gap-8 gap-2">
                <div className="md:w-1/5">
                    <CategoriesDropdown />
                </div>
                <div className="flex-1">
                    <SearchInput />
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Home
