import Image from 'next/image'
import bgimg from '../../public/Rectangle 1.png'
import logo from '../../public/Meubel House_Logos-05.png'

interface name{
    name: string
    name1: string
}
function Navbar2(props: name) {
  return (
    <div className='place-content-center flex justify-items-center'>
        <div className='z-0 relative'>
            <Image src={bgimg} alt=''/>
        </div>
        <div className=' py-14 z-1 absolute justify-items-center text-center'>
            <Image src={logo} alt=''/>
            <h2 className='-mt-[17] text-[48px] font-medium'>{props.name1}</h2>
            <p className='text-[16px] font-medium'>Home {'>'} {props.name}</p>
        </div>        
    </div>
  )
}

export default Navbar2