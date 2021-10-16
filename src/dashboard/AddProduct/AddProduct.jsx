import React from 'react'
import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'
import Category from './Category';
import Description from './Description';
import Pricing from './Pricing';
import Success from './Success';


function AddProduct() {

    const [state, setState] = useState({
        step: 1,
        category: '',
        sub_category: '',
        brand: '',
        category_picture: '',
        name: '',
        description: '',
        condition: '',
        type: '',
        subtitile: '',
        price: '',
        discount: '',
        in_stock: '',
        pictures: '',
        sub_title:''
    })

    // go back to previous page
    const prevStep = () => {
        const { step } = state;
        setState({ step: step - 1 });
    }

    // proceed to the next step
    const nextStep = () => {
        const { step } = state;
        setState({ step: step + 1 });
    }

    // handle field change
    const handleChange = input => e => {
        setState((prev) => ({ ...prev, [input]: e.target.value }));
    }

    // desctructuring values from state
    const { step } = state;

    const {
        category,
        sub_category,
        category_picture,
        name,
        description,
        condition,
        type,
        subtitile,
        price,
        discount,
        in_stock,
        pictures,
        brand,
        sub_title
    } = state;

    const values = {
        category,
        sub_category,
        category_picture,
        name,
        description,
        condition,
        type,
        subtitile,
        price,
        discount,
        in_stock,
        pictures,
        brand,
        sub_title
    }

    switch (step) {
        case 1:
            return (
                <Category
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <Description
                    nextStep={nextStep}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    values={values}
                />
            )
        case 3:
            return (
                <Pricing
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 4:
            return (
                <Success
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        default:
            return (
                <DashboardLayout>
                    <div className="grid md:grid-cols-3 grid-cols-1 flex-row items-center mb-8">
                        <p className="col-span-1 text-lg text-gray-700 font-semibold md:flex hidden">Your Inventory Page</p>
                    </div>
                </DashboardLayout>
            )
    }


}

export default AddProduct
