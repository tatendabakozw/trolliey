import { EmojiHappyIcon, CreditCardIcon, ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

export const data = {
    categories : [
        { name: 'Accessories parts', value:"accessories" },
        { name: 'components', value: 'compoents' },
        { name: 'tables', value: 'tables' },
        { name: 'software', value:'software' },
        { name: 'phones & PDAs', value:'phones' },
        { name: 'cameras', value: 'cameras' },
        { name: 'tent house', value:'tent_house' },
        { name: 'kids products', value: 'kids_products' },
        { name: 'sofa seat', value: "sofa_seat" }
    ],
    benefits : [
        { heading: 'Free shipment', details: 'Free shipment for bulk goods', icon: <ShoppingBagIcon height={32} width={32} className="mr-2" /> },
        { heading: 'Anyplace anytime', details: 'Many methods', icon: <CreditCardIcon height={32} width={32} className="mr-2" /> },
        { heading: '100% Satisfaction', details: 'great customer care', icon: <EmojiHappyIcon height={32} width={32} className="mr-2" /> },
        { heading: 'Save money', details: 'frequent discounts', icon: <CurrencyDollarIcon height={32} width={32} className="mr-2" /> },
    ]
}