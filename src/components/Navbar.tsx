import Image from 'next/image';
import icon1 from '../../public/mdi_account-alert-outline.png';
import icon2 from '../../public/akar-icons_search.png';
import icon3 from '../../public/akar-icons_heart.png';
import icon4 from '../../public/ant-design_shopping-cart-outlined.png';
import Link from 'next/link';
function Navbar() {
  return (
    <div className='navbar '>
        <ul className='navbarlist '>
            <Link href="./"><li>Home</li></Link>
            <Link href="./shop/"><li>Shop</li></Link>
            <Link href="./about/"><li>About</li></Link>
            <Link href="./contact/"><li>Contact</li></Link>
        </ul>
        <div className='navbaricons space-x-[45px]'>
            <div>
                <Image src={icon1} alt='icon1'/>
            </div>
            <div>
                <Image src={icon2} alt='icon2'/>
            </div>
            <div>
                <Image src={icon3} alt='icon3'/>
            </div>
            <div>
                <Image src={icon4} alt='icon4'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;