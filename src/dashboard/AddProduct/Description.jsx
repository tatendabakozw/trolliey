import React from 'react'
import BlueButton from '../../components/buttons/BlueButton'
import DashboardLayout from '../../layouts/DashboardLayout'

function Description({ nextStep, handleChange, values, prevStep }) {
    return (
        <DashboardLayout>
            <div className="p-4 h-full flex">
                <div className="bg-white rounded flex-1">
                    <div className="flex-1 p-4 flex flex-col">
                        desciption
                    </div>
                    <div className="border-t border-gray-200 p-4 flex flex-row items-center ">
                        <div className="flex w-full justify-between flex-row">
                            <div className="text-blue-primary text-sm">
                                <p className="font-semibold">Tips</p>
                                <p className="text-gray-400 text-xs">Price plays a major role in the success business</p>
                            </div>
                            <div className="ml-auto flex flex-row items-center">
                                <BlueButton text="Previous" outline onClick={() => prevStep()} />
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

export default Description
