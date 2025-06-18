import React from 'react'

const MenuIcon = ({width, height}) => {
    return (
        <svg width={width} height={height}><use xlinkHref="#offcanvas-menu-icon">
            <symbol id="offcanvas-menu-icon" viewBox="0 0 44 44">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.5C0 1.567 1.09441 0 2.44444 0H22C23.35 0 24.4444 1.567 24.4444 3.5C24.4444 5.433 23.35 7 22 7H2.44444C1.09441 7 0 5.433 0 3.5ZM0 22.1667C0 20.2337 1.09442 18.6667 2.44444 18.6667H41.5556C42.9056 18.6667 44 20.2337 44 22.1667C44 24.0997 42.9056 25.6667 41.5556 25.6667H2.44444C1.09442 25.6667 0 24.0997 0 22.1667ZM2.44444 37C1.09442 37 0 38.567 0 40.5C0 42.433 1.09442 44 2.44444 44H41.5556C42.9056 44 44 42.433 44 40.5C44 38.567 42.9056 37 41.5556 37H2.44444Z" />
            </symbol>
        </use></svg>
    )
}

export default MenuIcon