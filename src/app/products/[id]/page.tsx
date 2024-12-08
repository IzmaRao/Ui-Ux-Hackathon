import React from 'react'
import Navbar from '@/components/Navbar';
import Image,{ StaticImageData } from 'next/image';
import { FaGreaterThan } from "react-icons/fa6";
import stars from '../../../../public/Group 88.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import soffa1 from '../../../../public/Cloud sofa three seater + ottoman_2 1.png';
import soffa2 from '../../../../public/Cloud sofa three seater + ottoman_1 1.png';
import Realtedproducts from '../../../components/Relatedproducts'

interface Data{
    id: number,
    name: string,
    price: number,
    image: StaticImageData,
    width: number,
    height: number,
    detailimg: {
        img1: StaticImageData,
        img2: StaticImageData,
        img3: StaticImageData,
        img4: StaticImageData,
    }
}

async function Detailpageshop({ params }: { params: { id: string } }) {
    const response = await fetch(`http://localhost:3000/api/products/${params.id}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const product: Data = await response.json();
    console.log("Data ==>", product);
    return (
    <div>
        <Navbar/>
        <div className='flex items-center space-x-[25px] w-[1440px] h-[100px] px-32 '><span className='text-[#9f9f9f]'>Home</span> <span><FaGreaterThan size={13}/></span> <span className='text-[#9f9f9f]'>Shop</span> <span><FaGreaterThan size={13}/></span> <span>{'|'}</span> <span>{product.name}</span></div>

        <div key={product.id} className='flex w-[1241px] h-[730px] place-content-center mx-24'>
            <div className='space-y-[32px]'>
                <div className='w-[76px] h-[80px] bg-[#FFF9E5] place-content-center'>
                    <Image width={83} height={55} src={product.detailimg.img1} alt=""/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#FFF9E5] place-content-center'>
                    <Image width={99} height={66} src={product.detailimg.img2} alt=""/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#FFF9E5] place-content-center'>
                    <Image width={77} height={115} src={product.detailimg.img3} alt=""/>
                </div>
                <div className='w-[76px] h-[80px] bg-[#FFF9E5] place-content-center'>
                    <Image width={74} height={44} src={product.detailimg.img4} alt=""/>
                </div>
            </div>
            <div className='mx-10 w-[423px] h-[500px] place-content-center  items-center bg-[#FFF9E5]'>
                <Image width={product.width} height={product.height} src={product.image} alt=''/>
            </div>

            <div className='space-y-[18px] w-[606.01px] h-[730.87px] pl-10'>
                <h1 className='text-[42px] '>{product.name}</h1>
                <p className='text-xl font-medium text-[#9f9f9f]'>Rs. {product.price}</p>
                <div className='flex items-center gap-3'>
                    <Image src={stars} alt=''/>
                    <p className='text-[#9f9f9f]'>|</p>
                    <p>% Customer Review</p>
                </div>
                <p className='w-[424px] h-[80px] text-[15px] font-normal'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                <div className='w-[123px] h-[63px] space-y-[16px]'>
                    <p className='text-sm text-[#9f9f9f]'>Size</p>
                    <div className='flex gap-[16px]'>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#FBEBB5] text-[13px] text-center'>L</button>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#f4f4f4] text-[13px] text-center'>XL</button>
                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#f4f4f4] text-[13px] text-center'>SS</button>
                    </div>
                </div>

                <div className='w-[123px] h-[63px] space-y-[16px]'>
                    <p className='text-sm text-[#9f9f9f]'>Color</p>
                    <div className='flex gap-[16px]'>
                    <button className='w-[30px] h-[30px] rounded-full bg-[#816DFA] text-[13px] text-center'></button>
                    <button className='w-[30px] h-[30px] rounded-full bg-[#000000] text-[13px] text-center'></button>
                    <button className='w-[30px] h-[30px] rounded-full bg-[#CDBA7B] text-[13px] text-center'></button>
                    </div>
                </div>

                <div className='flex gap-[18px] border-b-[1px] border-[#D9D9D9] pb-14'>
                    <button className=' flex text-center justify-between items-center px-4 font-medium border-[#9f9f9f] border-[1px] rounded-[15px] h-[64px] w-[123px]'><p>-</p> <p>1</p> <p>+</p></button>
                    <button className='w-[215px] h-[64px] text-center items-center border-[#9f9f9f] border-[1px] rounded-[15px]'>Add To Cart</button>
                </div>

                <div>
                    <table>
                        <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                        <tr  className='text-[#9f9f9f] space-y-3'>
                            <td className='pr-3'>SKU</td> 
                            <td>:</td>
                            <td className='pl-3'>SS001</td>
                        </tr>
                        <tr className='text-[#9f9f9f] space-y-3'>
                            <td className='pr-3'>Catogory </td>
                            <td>:</td>
                            <td className='pl-3'>Sofas</td>
                        </tr>
                        <tr className='text-[#9f9f9f] space-y-3'>
                            <td className='pr-3'>Tags</td>
                            <td>:</td>
                            <td className='pl-3'>Sofa, Chair, Home, Shop</td>
                        </tr>
                        <tr className='space-y-3'>
                            <td className='text-[#9f9f9f] pr-3 pt-2'>Share</td>
                            <td className='text-[#9f9f9f] pt-2'>:</td>
                            <td className='flex space-x-5  pl-1 '><FaFacebook/><FaLinkedin/><AiFillTwitterCircle/></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>



        <div className=' justify-items-center w-[1440px] h-[744px] space-y-10'>
            <div className='flex space-x-[53px]'>
                <p className='text-2xl text-black'>Description</p>
                <p className='text-2xl text-[#9f9f9f]'>Additional Information</p>
                <p className='text-2xl text-[#9f9f9f]'>Reviews[5]</p>
            </div>
            <div className='w-[1028px] h-[174px] text-[#9f9f9f]'>
                <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road</p>
                <br />
                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
            <div className='flex space-x-[29px] mt-8'>
                <div className='bg-[#FFF9E5] w-[605px] h-[348px]'>
                    <Image src={soffa1} alt='soffa1'/>
                </div> 
                <div className='bg-[#FFF9E5] w-[605px] h-[348px]'>
                    <Image width={605} height={348} src={soffa2} alt='soffa2'/>
                </div> 
            </div>
        </div>


        <div>
            <Realtedproducts/>
        </div>

    </div>
  )
}

export default Detailpageshop;