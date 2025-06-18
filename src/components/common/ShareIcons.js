"use client"
import React, { useState } from 'react'
import SocialIcon2 from '@/components/common/icons/SocialIcon2'
import SocialIcon3 from '@/components/common/icons/SocialIcon3'
import SocialIcon4 from '@/components/common/icons/SocialIcon4'
import ShareIcon1 from '@/components/common/icons/ShareIcon1'
import ShareIcon5 from '@/components/common/icons/ShareIcon5'
import Link from 'next/link'

const ShareIcons = () => {
    const [iconToggle, setIconToggle] = useState(false)
    const handleEventClick = (e) => {
        e.preventDefault()
        setIconToggle(!iconToggle)
    }
    return (
        <div className="social-share-icons d-flex align-items-center gap-30">
            <div>
                <Link href="#" className="social-share-icon-5 d-none d-lg-block"><ShareIcon5 /></Link>
                <Link href="#" onClick={handleEventClick} className="share-link social-share-icon-5 d-lg-none"><ShareIcon5 /></Link>
            </div>
            <div className={`social-icons-list ${iconToggle ? "social-icons-toggle" : ""}`}>
                <a href="#" className="social-share-icon-1 mb-0 mb-lg-40"><ShareIcon1 /></a>
                <a href="#" className="social-share-icon-2"><SocialIcon2 height={"26"} width={"28"} /></a>
                <a href="#" className="social-share-icon-3"><SocialIcon3 height={"26"} width={"28"} /></a>
                <a href="#" className="social-share-icon-4"><SocialIcon4 height={"26"} width={"28"} /></a>
            </div>
        </div>
    )
}

export default ShareIcons