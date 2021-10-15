import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function Category({ nextStep, handleChange, values }) {
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1 overflow-hidden">
                    <div className="flex-1 p-4 flex flex-col">
                        <p className="text-gray-700 mb-4">Category and branding</p>
                        <div>
                            <div className="flex md:flex-row flex-col gap-4 w-full mb-8">
                                <div className="flex-1">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        value={values.category}
                                        onChange={handleChange('category')}
                                        name="category"
                                        className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                    >
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="sub-category" className="block text-sm font-medium text-gray-700">
                                        Sub-Category
                                    </label>
                                    <select
                                        id="sub-category"
                                        name="sub-category"
                                        value={values.sub_category}
                                        onChange={handleChange('sub_category')}
                                        className="mt-1 block w-full pl-3 pr-10 p-2 text-base border border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    >
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1">
                                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                        product brand
                                    </label>
                                    <input
                                        id="brand"
                                        value={values.brand}
                                        onChange={handleChange('brand')}
                                        name="brand"
                                        className="mt-1 w-full p-2 text-base border border-gray-200 focus:outline-none sm:text-sm rounded-md"
                                        placeholder="e.g Nike"
                                    />
                                </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Choose an appropriate category</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline className="opacity-50" />
                                <div className="mx-2"></div>
                                <BlueButton text="Next" onClick={() => nextStep()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Category
