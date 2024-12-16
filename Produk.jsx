import React, { useEffect, useState } from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";
import Image8 from "../assets/image8.png";
import Image9 from "../assets/image9.png";
import Image10 from "../assets/image10.png";
import Image11 from "../assets/image11.png";
import Image12 from "../assets/image12.png";
import { motion } from "framer-motion";
import {AiFillStar} from 'react-icons/ai';
import { BsCartPlus } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";

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

const Produk = () => {
    return (
 <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image1} alt="sembako" className="w-[13rem] mb-1"/>
            <div className="card-details">
                <h3 className="mb 1">Beras</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.70.000</del>50.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image2} alt="sembako" className="mb-1 w-[150px] h-[210px]"/>
            <div className="card-details">
                <h3 className="mb-1">Oreo</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.4.000</del>2.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image3} alt="sembako" className="w-[13rem] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Tepung</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.16.000</del>15.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image4} alt="sembako" className="w-[250px] h-[200px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Indomie Goreng</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.3.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image5} alt="sembako" className="w-[200px] h-[200px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Lays</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.12.000</del>10.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image6} alt="sembako" className="w-[250px] h-[200px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Pocky</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.10.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image7} alt="sembako" className="w-[240px] h-[200px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">kecap Bangau</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.8.000</del>5.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image8} alt="sembako" className="w-[13rem] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Chiki Balls</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400">Rp.12.000</del>8.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image9} alt="sembako" className="w-[250px] h-[210px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Gula</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.18.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image10} alt="sembako" className="w-[250px] h-[210px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Siip</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.6.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image11} alt="sembako" className="w-[250px] h-[210px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Pepsodent</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.12.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>

        
        <section className="m-[20px] border-[2px] p-[20px] cursor-pointer shadow-md">
            <img src={Image12} alt="sembako" className="w-[250px] h-[210px] mb-1"/>
            <div className="card-details">
                <h3 className="mb-1">Shampo Head & Shoulders</h3>
                <section className="flex mb-1">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    <span className="text-1 ml-[9px]">4</span>
                </section>
                <section className="flex flex-auto justify-center">
                    <div className="price">
                        <del className="text-red-400"></del>Rp.8.000
                    </div>
                    <div className="flex">
                        <button className="justify-end ml-20">
                            <BsCartPlus/>
                        </button>
                        <button className="ml-4">
                        <CiShare1/>
                        </button>
                    </div>
                </section>
            </div>
        </section>
    </section>
    )
};

export default Produk;