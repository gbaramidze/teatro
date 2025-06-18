"use client"
import React, { useEffect } from 'react'

const useStickyHeader = (pathName) => {
    useEffect(() => {

        const dropdown_item = document.querySelectorAll(".dropdown-item")
        const nav_link = document.querySelectorAll(".nav-link")
        const dropdown_toggle = document.querySelectorAll(".dropdown-toggle")

        // remove bootstrap default dropdown clikable behavior in dropdown menu
        dropdown_toggle.forEach((e) => {
            e.addEventListener("click", () => {
                return null
            })
        })

        // add active main menu when her dropdown menu active
        dropdown_item.forEach((e) => {
            let url = new URL(e.href);
            let urlPathname = url.pathname;

            if (urlPathname === pathName && !e.external) {
                e.parentNode.parentNode.previousSibling.classList.add("active");
            }
        })

        // active manin menu
        nav_link.forEach((e) => {
            let url = new URL(e.href);
            let urlPathname = url.pathname;
            if (urlPathname === pathName && e.href !== 'https://teatro.eat-me.online/') {
                e.classList.add("active")
            }
        })

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    // scroll page header active on top 
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        if (scrollTop >= 50) {
            header.classList.add('sticky')
        }
        else {
            header.classList.remove('sticky')
        }
    };
}

export default useStickyHeader