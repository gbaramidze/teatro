import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const pathName = usePathname();

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        // document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light")
        document.documentElement.setAttribute("data-bs-theme", "dark")
        // add dark and light mode base on path Name

        const elementWithClass = document.querySelector('body');
        elementWithClass.classList.add("Teatro-landing");

        elementWithClass.classList.add("home-1")
        function firstClassAdd(callback) {
            // by default add Teatro-landing class in bobdy
            callback();
        }

        function reloadClassAdd() {
            // first find previous body class and remove this calss
            const currentClassName = elementWithClass.className;
            const findClass = currentClassName.split(' ')
            elementWithClass.classList.remove(...findClass);
            elementWithClass.classList.add("home-1")

        }
        firstClassAdd(reloadClassAdd)
        // Hover for card border
        document.querySelectorAll('.blog-content').forEach((e) => {
            e.addEventListener("mouseover", () => {
                if (document.querySelector("html").getAttribute('data-bs-theme') === 'dark') {
                    e.classList.add('blog-gradient-border');
                }
                else {
                    e.classList.remove('blog-gradient-border');
                }
            })
        })

    }, [pathName])

    return (
        <ThemeContext.Provider value={{ toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

