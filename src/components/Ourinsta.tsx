import Image from 'next/image';
import bgimg from '../../public/Rectangle 17.png'
function Ourinsta() {
  return (
    <div className='ourinsta r'>
        <div className='ourinsta-img'>
            <Image src={bgimg} alt=''/>
        </div>
        <div className='ourinsta-content space-y-[18px] py-24 absolute justify-items-center text-center'>
            <h2 className='text-6xl font-bold'>Our Instagram</h2>
            <p className='text-[20px]'>Follow our store on Instagram</p>
            <button className='shadow-xl w-[255px] h-[64px] rounded-[50px] bg-[#FAF4F4]'>Follow Us</button>
        </div>        
    </div>
  )
}

export default Ourinsta;