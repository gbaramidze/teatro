import { FaExpand, FaTheaterMasks, } from 'react-icons/fa'
import {GiDualityMask, GiLaserburn, GiMusicalNotes} from "react-icons/gi";
import {RiVipDiamondLine} from "react-icons/ri";
import {LiaCocktailSolid} from "react-icons/lia";
import {IoHeadset} from "react-icons/io5";

const iconSize = 80; // Define a constant for icon size

export const highlightsData = [
    {
        id: 1,
        title: "Vibrant Music",
        desc: "Dance to live DJs and bands playing EDM, hip-hop, and hits.",
        icon: <GiMusicalNotes size={iconSize} className="text-yellow-400" />
    },
    {
        id: 2,
        title: "VIP Experience",
        desc: "Enjoy exclusive VIP tables and premium services.",
        icon: <RiVipDiamondLine  size={iconSize} className="text-gold-500" />
    },
    {
        id: 3,
        title: "Light Shows",
        desc: "Experience mesmerizing laser and light displays synced with music.",
        icon: <GiLaserburn size={iconSize} className="text-blue-400" />
    },
    {
        id: 4,
        title: "Craft Cocktails",
        desc: "Savor crafted cocktails and premium spirits at stylish bars.",
        icon: <LiaCocktailSolid  size={iconSize} className="text-purple-500" />
    },
    {
        id: 5,
        title: "Themed Nights",
        desc: "Join unique themed events, from burlesque to masquerade parties.",
        icon: <GiDualityMask   size={iconSize} className="text-red-500" />
    },
    {
        id: 6,
        title: "Dance Floor",
        desc: "Move freely on our expansive dance floor for self-expression.",
        icon: <FaExpand size={iconSize} className="text-green-500" />
    },
    {
        id: 7,
        title: "Live Acts",
        desc: "Enjoy captivating performances, from dancers to live acts.",
        icon: <FaTheaterMasks size={iconSize} className="text-orange-400" />
    },
    {
        id: 8,
        title: "Guest DJs",
        desc: "Experience special nights with world-renowned guest DJs, events.",
        icon: <IoHeadset  size={iconSize} className="text-pink-500" />
    }
]