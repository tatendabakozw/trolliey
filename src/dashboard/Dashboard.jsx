import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    MenuAlt1Icon,
    ScaleIcon
} from '@heroicons/react/outline'
import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    SearchIcon,
} from '@heroicons/react/solid'
import DashboardSidebar from '../components/dashboard_sidebar/DashboardSidebar'
import UserAvatar from '../components/user_avatar/UserAvatar'
import Username from '../components/username/Username'
import BlueButton from '../components/buttons/BlueButton'

const cards = [
    { name: 'Account balance', href: '/account', icon: ScaleIcon, amount: '$30,659.45' },
    // More items...
]
const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '/transactions',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    // More transactions...
]
const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="relative h-screen flex overflow-hidden bg-gray-100">
            <div className="h-full">
                <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>

            {/* // the body of the dashboard */}

            <div className="flex-1 overflow-auto focus:outline-none">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Search bar */}
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 outline-none sm:text-sm"
                                        placeholder="Search transactions"
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                        <UserAvatar size="sm" />
                                        <span className="hidden text-gray-700 text-sm font-medium lg:block">
                                            <span className="sr-only">Open user menu for </span>
                                            <Username name="tatendaZw" />
                                        </span>
                                        <ChevronDownIcon
                                            className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/account"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/dashboard/settings"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Logout
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                    {/* Page header */}
                    <div className="bg-white shadow">
                        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                                <div className="flex-1 min-w-0">
                                    {/* Profile */}
                                    <div className="flex items-center">
                                        <div className="sm:block hidden rounded-full">
                                            <UserAvatar size="lg" />
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <div className="sm:hidden rounded-full">
                                                    <UserAvatar size="lg" />
                                                </div>
                                                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                                    Good morning, Emilia Birch
                                                </h1>
                                            </div>
                                            <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                                <dt className="sr-only">Account status</dt>
                                                <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                                    <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400" aria-hidden="true" />
                                                    Verified account
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">

                                    <div className="flex mr-2">
                                        <BlueButton text="Add Product" outline />
                                    </div>
                                    <div className="flex">
                                        <BlueButton text="Manage Account" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Card */}
                                {cards.map((card) => (
                                    <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                                        <div className="p-5">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <div className="ml-5 w-0 flex-1">
                                                    <dl>
                                                        <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                                                        <dd>
                                                            <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-5 py-3">
                                            <div className="text-sm">
                                                <a href={card.href} className="font-medium text-blue-primary hover:text-blue-secondary">
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                            Recent activity
                        </h2>

                        {/* Activity list (smallest breakpoint only) */}
                        <div className="shadow sm:hidden">
                            <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                                {transactions.map((transaction) => (
                                    <li key={transaction.id}>
                                        <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                                            <span className="flex items-center space-x-4">
                                                <span className="flex-1 flex space-x-2 truncate">
                                                    <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    <span className="flex flex-col text-gray-500 text-sm truncate">
                                                        <span className="truncate">{transaction.name}</span>
                                                        <span>
                                                            <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                                                            {transaction.currency}
                                                        </span>
                                                        <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                    </span>
                                                </span>
                                                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <nav
                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                                aria-label="Pagination"
                            >
                                <div className="flex-1 flex justify-between">
                                    <div className="flex mr-2">
                                        <BlueButton text="Previous" outline />
                                    </div>
                                    <div className="flex">
                                        <BlueButton text="Next" />
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Activity table (small breakpoint and up) */}
                        <div className="hidden sm:block">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col mt-2">
                                    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Transaction
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Amount
                                                    </th>
                                                    <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                                        Status
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {transactions.map((transaction) => (
                                                    <tr key={transaction.id} className="bg-white">
                                                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex">
                                                                <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                                                    <CashIcon
                                                                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <p className="text-gray-500 truncate group-hover:text-gray-900">{transaction.name}</p>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                            <span className="text-gray-900 font-medium">{transaction.amount} </span>
                                                            {transaction.currency}
                                                        </td>
                                                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                                            <span
                                                                className={classNames(
                                                                    statusStyles[transaction.status],
                                                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                                                )}
                                                            >
                                                                {transaction.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                            <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {/* Pagination */}
                                        <nav
                                            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                            aria-label="Pagination"
                                        >
                                            <div className="hidden sm:block">
                                                <p className="text-sm text-gray-700">
                                                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                    <span className="font-medium">20</span> results
                                                </p>
                                            </div>
                                            <div className="flex-1 flex justify-between sm:justify-end">
                                                <div className="flex mr-2">
                                                    <BlueButton text="Previous" outline />
                                                </div>
                                                <div className="flex">
                                                    <BlueButton text="Next" />
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
