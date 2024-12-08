import Navbar from '@/components/Navbar';
import Productsafety from '@/components/Productsafety'
import Navbar2 from '@/components/Navbar2';

function Contact() {
  return (
    <div>
      <Navbar/>
      <Navbar2 name='Account' name1='My Account'/>
      <div>
        <form action=""></form>
      </div>

      <Productsafety/>
    </div>
  )
}

export default Contact;