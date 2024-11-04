import React from 'react'
import icon from "../../ultis/icons";

const { FaAngleRight, FaAngleLeft, CiSearch } = icon;
const DataPrescriptionDetail = () => {
    return (
        <>
            <section class="py-1 bg-blueGray-50">
                <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-2">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-base text-blueGray-700">
                                        Danh sách chi tiết Toa thuốc
                                    </h3>
                                </div>

                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <nav
                                        aria-label="Pagination"
                                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                    >
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"

                                        >
                                            <span className="sr-only">Previous</span>
                                            <FaAngleLeft></FaAngleLeft>
                                        </a>
                                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                        <a
                                            href="#"
                                            aria-current="page"
                                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            20/2000000
                                        </a>

                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"

                                        >
                                            <span className="sr-only">Next</span>
                                            <FaAngleRight></FaAngleRight>
                                        </a>
                                    </nav>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <label class="relative block">
                                        <span class="sr-only">Search</span>
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <CiSearch

                                            ></CiSearch>
                                        </span>
                                        <input
                                            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                            placeholder="Search for anything..."
                                            type="text"
                                            name="search"

                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse">
                                <thead>

                                </thead>

                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DataPrescriptionDetail