import PriceIcon1 from '@/components/common/icons/PriceIcon1';
import PriceIcon2 from '@/components/common/icons/PriceIcon2';
import PriceIcon3 from '@/components/common/icons/PriceIcon3';

export const pricingData = [
    {
        id: 1,
        card_name: "General Admission",
        icon: <PriceIcon1 />,
        price: "$42",
        link: "#",
        features: [
            {
                id: 1,
                feature_name: "Access to the Event"
            },
            {
                id: 2,
                feature_name: "Affordable Entertainment"
            },
            {
                id: 3,
                feature_name: "Shared Memories"
            },
        ]
    },
    {
        id: 2,
        card_name: "VIP Experience",
        icon: <PriceIcon2 />,
        price: "$100",
        link: "#",
        features: [
            {
                id: 1,
                feature_name: "Premium Seating"
            },
            {
                id: 2,
                feature_name: "Backstage Access"
            },
            {
                id: 3,
                feature_name: "Artist Interaction"
            },
        ]
    },
    {
        id: 3,
        card_name: "Student Discount",
        icon: <PriceIcon3 />,
        price: "$25",
        link: "#",
        features: [
            {
                id: 1,
                feature_name: "Affordable Access"
            },
            {
                id: 2,
                feature_name: "Cultural Enrichment"
            },
            {
                id: 3,
                feature_name: "Community Connection"
            },
        ]
    },
]