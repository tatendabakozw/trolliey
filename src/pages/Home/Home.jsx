import React from 'react'
import CategoriesDropdown from '../../components/categories_dropdown/CategoriesDropdown'
import SearchInput from '../../components/search/SearchInput'
import GeneralLayout from '../../layouts/GeneralLayout'
import banner from '../../assets/main-banner.jpg'
import { data } from '../../utils/data'

function Home() {
    return (
        <GeneralLayout>
            <div className="bg-white md:p-8 p-2 rounded">

                {/* // banner and categories */}
                <div className="top w-full flex flex-row md:gap-8 gap-2">
                    <div className="md:w-1/5 md:flex hidden">
                        <CategoriesDropdown />
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                        <div className="flex content-center items-center overflow-hidden mt-4 rounded w-full max-h-96 bg-green-100">
                            <img src={banner} alt="banner showing ads for the home page" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-auto" />
                        </div>
                    </div>
                </div>

                {/* //benefits */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:py-16 pt-16 pb-4 md:border-b border-b-none border-gray-200 items-center">
                    {
                        data.benefits.map((benefit, index) => (
                            <div key={index} className="col-span-1 flex md:flex-row flex-col md:border-none border-b border-gray-200 md:pb-0 pb-4 text-red-400 hover:text-blue-primary cursor-pointer">
                                {benefit.icon}
                                <div className="flex flex-col">
                                    <p className="text-gray-700 font-semibold capitalize">{benefit.heading}</p>
                                    <p className="text-gray-500 text-sm capitalize">{benefit.details}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* //two exclusive categories */}
                <div className="grid grid-cols-2 md:gap-8 gap-4 md:pt-16 pt-8">
                    <div className="col-span-1 bg-blue-200 rounded h-40"></div>
                    <div className="col-span-1 bg-yellow-200 rounded h-40"></div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Home
