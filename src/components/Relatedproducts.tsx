
import { StaticImageData } from 'next/image';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Data{
    id: number,
    name: string,
    price: number,
    image: StaticImageData,
    width: number,
    height: number
}

async function Realtedproducts() {
    const response = await fetch('http://localhost:3000/api/toppicks/');
    const data: Data[] = await response.json();
    console.log("params ==>", data)

  return (
    <div className='related bg-white'>
         
        <div className='related-section-one '>
            <h1 className='related-section-one-h font-medium'>Related Products</h1>
        </div>

        
        <div className='related-section-two space-x-[40px] mx-auto '>

            {data.map((product) => (
                <div key={product.id} className='related-section-two-item justify-center justify-items-center items-center ' >
                <Link href="./toppicks">
                    <div className='related-section-two-item-one bg-white '>
                        <Image height={product.height} width={product.width} src={product.image} alt="img"/>
                    </div>
                    <div className='space-y-3 '>
                        <p className='related-section-two-item-two-p'>{product.name}</p>
                        <p className='font-medium related-section-two-item-two-pp'>{product.price}</p>
                    </div>
                </Link>
                </div>
            ))}
           </div>
           <div className='justify-items-center related-section-three'>
           <p className='related-section-three-p font-medium pb-2 border-b-[1px] border-black '>View More</p>
           </div>

           

 

           
           
    
    </div>
  )
}

export default Realtedproducts;