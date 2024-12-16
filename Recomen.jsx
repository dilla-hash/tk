import React from "react";
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
    return {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
  };

const Recomen = () => {
    return (
        <div>
        <div className="row">
        <div className="col-12 mb-5">
            <motion.p 
             variants= {SlideUp(0.5)}
             initial= "hidden"
             whileInView= "show"
             className="text-sm text-blue-500 text-center">This Product For You</motion.p>
            <motion.h1
             variants= {SlideUp(0.5)}
             initial= "hidden"
             whileInView= "show"
              className="display-6 text-center text-3xl font-bold font-mono">Product</motion.h1>
              <motion.p 
               variants= {SlideUp(0.5)}
               initial= "hidden"
               whileInView= "show"
               className="text-xs text-gray-400 text-center">Pilihlah Barang yang Berkualitas di Toko Teguh</motion.p>
        </div>
    </div>
            <h2 className="ml-[20px] mb-[20px] mt-[20px] text-[20px] font-semibold font-serif">Recommended</h2>
            <div className="flex ml-[20px]">
                <button className=" border-[2px] mr-[6px] p-[5px] background-transparent br-[5px] cursor-pointer rounded-md">All Products</button>
                <button className="border-[2px] mr-[6px] p-[5px] background-transparent br-[5px] cursor-pointer rounded-md">Snack</button>
                <button className="border-[2px] mr-[6px] p-[5px] background-transparent br-[5px] cursor-pointer rounded-md">Sembako</button>
                <button className="border-[2px] mr-[6px] p-[5px] background-transparent br-[5px] cursor-pointer rounded-md">Kebutuhan Harian</button>
            </div>
        </div>
    )
};

export default Recomen;