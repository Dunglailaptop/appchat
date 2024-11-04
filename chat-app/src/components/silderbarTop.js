import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuTop } from '../ultis/menu';

const classnamevalue = "inline-block p-4 border-b-2 rounded-t-lg"


const silderbarTop = () => {
    return (
        <>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                {MenuTop.map((item) => (

                    <li className="me-2" role="presentation">
                        <NavLink to={item.path}>
                            <button className={classnamevalue}>{item.Name}</button>

                        </NavLink>

                    </li>


                ))}



            </ul>
        </>
    )
}

export default silderbarTop