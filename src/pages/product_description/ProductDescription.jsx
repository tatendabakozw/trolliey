import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'
import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import BlueButton from '../../components/buttons/BlueButton'
import RedButton from '../../components/buttons/RedButton'
import {useDispatch} from 'react-redux'
import {add_to_cart_Action} from '../../redux/actions/cartActions'

const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
        {
            name: 'Features',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        // More sections...
    ],
    id: 1
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductDescription() {

    const dispatch = useDispatch()

    const add_to_basket = () =>{
        const item = {
            picture : product.images[0], 
            rating:product.rating, 
            description:product.description, 
            price:product.price, 
            id: product.id, 
            name: product.name
        }
        dispatch(add_to_cart_Action(item))
    }

    return (
        <GeneralLayout>
            <div className="flex bg-white md:p-8 px-4 w-full rounded">
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto md:py-16 py-4  lg:max-w-7xl lg:px-8 md:px-0 px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                            {/* Image gallery */}
                            <Tab.Group as="div" className="flex flex-col-reverse">
                                {/* Image selector */}
                                <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                    <Tab.List className="grid grid-cols-4 gap-6">
                                        {product.images.map((image) => (
                                            <Tab
                                                key={image.id}
                                                className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="sr-only">{image.name}</span>
                                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                                            <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-blue-primary' : 'ring-transparent',
                                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>

                                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                                    {product.images.map((image) => (
                                        <Tab.Panel key={image.id}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-center object-cover sm:rounded-lg"
                                            />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                                <div className="mt-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl text-gray-900">{product.price}</p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-3">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="sr-only">Description</h3>

                                    <div
                                        className="text-base text-gray-700 space-y-6"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                </div>

                                <div className="mt-6">
                                    {/* Colors */}
                                    <div className="mt-10 flex sm:flex-col1">
                                        <BlueButton text="Add to cart" className="flex-1" onClick={add_to_basket} />
                                        <div className="mx-1"></div>
                                        <RedButton text={<HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />} outline />
                                        
                                    </div>
                                </div>

                                <section aria-labelledby="details-heading" className="mt-12">
                                    <h2 id="details-heading" className="sr-only">
                                        Additional details
                                    </h2>

                                    <div className="border-t divide-y divide-gray-200">
                                        {product.details.map((detail) => (
                                            <Disclosure as="div" key={detail.name}>
                                                {({ open }) => (
                                                    <>
                                                        <h3>
                                                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                                                <span
                                                                    className={classNames(open ? 'text-blue-primary' : 'text-gray-900', 'text-sm font-medium')}
                                                                >
                                                                    {detail.name}
                                                                </span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusSmIcon
                                                                            className="block h-6 w-6 text-blue-primary group-hover:text-blue-primary"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <PlusSmIcon
                                                                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                                            <ul>
                                                                {detail.items.map((item) => (
                                                                    <li key={item}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ProductDescription
