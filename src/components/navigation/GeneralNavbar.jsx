import React,{useState} from 'react'
import { ShoppingCartIcon, UserIcon, HeartIcon, MenuIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import CartSidebar from '../cart_sidebar/CartSidebar'
import { useHistory } from 'react-router'

function GeneralNavbar() {

    const _add_to_cart = useSelector(state => state.add_to_cart)
    const {basket} =_add_to_cart
    const [open_cart, setOpenCart] = useState(false)
    const history = useHistory()

    return (
        <div className="bg-white shadow flex flex-row items-center h-16 lg:px-32 md:px-16 px-2 space-x-4">
            <div onClick={() => history.push('/')} className="uppercase cursor-pointer font-bold text-gray-700">logo</div>
            <div className="flex-1"></div>
            <div className="md:flex hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
                <UserIcon height={20} width={20} className="text-gray-700" />
            </div>
            <div className="md:flex hidden relative p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <HeartIcon height={20} width={20} className="text-gray-700" />
                <span className="absolute right-0 top-0 rounded-full bg-red-400 w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                    0
                </span>
            </div>
            <div onClick={()=> setOpenCart(true)} className="relative flex p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <ShoppingCartIcon height={20} width={20} className="text-gray-700" />
                <span className="absolute right-0 top-0 rounded-full bg-red-400 w-4 h-4 top right p-0 m-0 text-white text-xs font-semibold text-center">
                    {basket?.length}
                </span>
            </div>
            <div className="md:hidden flex">
                <MenuIcon height={20} width={20} className="text-gray-700" />
            </div>
            <>
                <CartSidebar open={open_cart} setOpen={setOpenCart} cart={basket} />   
            </>
        </div>
    )
}

export default GeneralNavbar
