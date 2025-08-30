import React from 'react'
import { MdOutlineInfo } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

const Card = () => {
  return (
    <div className='mb-3'>
         <div className="bg-gray-100 rounded-xl">
                              <div className="py-3 px-3">
                                <p className="font-sans text-gray-400 text-lg pb-0">
                                  Total Cases
                                </p>
                                <h1
                                  className="font-bold text-2xl font-sans"
                                  style={{ lineHeight: "1.5rem" }}
                                >
                                  $12,000(10)
                                </h1>
                                <div className="flex justify-between pt-3">
                                  <div className="d-flex align-items-center">
                                    <MdArrowDropUp color="red" size={25} />
                                    <p className="text-red-500 font-sans text-lg font-bold">
                                      35%
                                    </p>
                                  </div>
                                  <div className="d-flex text-center align-items-center">
                                    <span>🔥</span>
                                    <p className="text-green-400 text-lg font-sans font-bold me-3">
                                      10
                                    </p>
                                    <MdOutlineInfo color="gray" size={20} />
                                  </div>
                                </div>
                              </div>
                            </div>
    </div>
  )
}

export default Card