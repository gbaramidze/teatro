"use client"
import React, { useEffect, useState } from 'react'

const useHoverDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState();

    useEffect(() => {

    }, [])

    return [isDropdownOpen, setDropdownOpen]
}

export default useHoverDropdown