import React from 'react'

const NavItems = ({ itemm }) => {
    return (
        <ul>
            <li>
                <a className="nav-link" >
                    {itemm}
                </a>
            </li>
        </ul>
    )
}
export default NavItems;