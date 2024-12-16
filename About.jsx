import React from "react";
import Bakwan from "../assets/bakwan.png";
import { motion } from "framer-motion";
import Bg from "../assets/bg.jpg";

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


const About = () => {
    return (
        <section>
      <div className="container py-24 bg-white/60 backdrop-blur-md min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
          <motion.img
          initial={{
            opacity: 0,
            x: -100,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 15,
            x: 50,
            y: -50,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            scale: {duration: 0.5},
          }}
           src={Bakwan} alt="" className="relative z-10 w-full lg:max-w-[350px] img-shadow"/>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[-47%] right-[4%] transform translate-x-[-5%] translate-y-[50%]
          h-[320px] w-[320px] bg-blue-200 rounded-full"></motion.div>
          </div>
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1 
            variants={SlideUp(1)}
            initial= "hidden"
            whileInView= "show"
            className="text-6xl uppercase font-semibold font-league">About TKT</motion.h1>
            <motion.p
            variants={SlideUp(1.3)}
                initial="hidden"
                whileInView="show">
             Website ini bermula dari keinginan untuk memberikan ruang yang lebih luas dan inklusif bagi penjual 
             untuk menjual produk-produk mereka. Di era digital, akses terhadap seni dan seniman semakin terbuka, 
             namun banyak seniman independen masih kesulitan menemukan platform yang dapat memfasilitasi transaksi 
             jual beli karya seni secara profesional dan aman.
            </motion.p>
            <motion.button 
            variants={SlideUp(1.6)}
            initial="hidden"
            whileInView="show"
            className="bg-gradient-to-r from-sky-200 to-blue-400 py-3 px-4 rounded-full flex items-center gap-3 group">Selengkapnya</motion.button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;