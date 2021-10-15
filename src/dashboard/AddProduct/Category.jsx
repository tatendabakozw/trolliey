import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function Category({ nextStep, handleChange, values }) {
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col">
                        Category
                    </div>

                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Choose an appropriate category</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline className="opacity-50"/>
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
