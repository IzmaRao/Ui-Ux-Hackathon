import Image from 'next/image';
import sofa from '../../public/Asgaard sofa 1.png';


function Asgardsofa() {
  return (
    <div className='asgaardo  bg-[#FFF9E5] justify-items-center justify-center items-center'>
        <div>
            <Image width={983} height={789} src={sofa} alt='asgard sofa'/>
        </div>
        <div className='asgaardo-content space-y-[33px] '>
            <h2 className='asgaardo-content-h-two  font-medium'>New Arrivals</h2>
            <h1 className='asgaardo-content-h-one font-bold '>Asgaard Sofa</h1>
            <button className='asgaardo-content-btn  border-2 border-black justify-items-center'>Order Now</button>
        </div>
    </div>
  )
}

export default Asgardsofa;