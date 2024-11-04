import React from 'react'
import {
    silderbarTop as Top
} from '../../components'
import { Outlet } from 'react-router'

const PublicPrescription = () => {
    return (
        <>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 m-2.5 bg-white">
                <Top></Top>
            </div>
            <div id="default-tab-content">
                 <Outlet></Outlet>
            </div>
        </>
    )
}

export default PublicPrescription