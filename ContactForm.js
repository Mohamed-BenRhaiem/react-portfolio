import './ContactForm.css'
import CvButton from '../button/Button'
import Title, { SubTitle } from '../title/Title'
import PersonalData from '../personalData/PersonalData'
function ContactForm() {
  const Location =[
    {title : 'Location' ,subtitle : '12345 Fake ST NoWhere AB Country'},
    {title : 'Phone Number' ,subtitle : '(216) 52097207'},
    {title : 'Email Address' ,subtitle : 'mohamedbenrhayemm@gmail.com'}
  ]
 const mapInfos = Location.map(mapInfo=><PersonalData title = {mapInfo.title} subtitle ={mapInfo.subtitle} />)
  return (
    <div className='shadow container contact-card-wrapper'>
        <form >
        <SubTitle>Available 24/7</SubTitle>
        <Title>Get In Touch</Title>

            <input className='form-control' type={'email'} placeholder='Email'/>
            <input className='form-control' type={'password'} placeholder='Password' />
            <textarea className='form-control' type={'text'} placeholder='Message' />
            <CvButton>Send Message</CvButton>
        </form>
        {mapInfos}
    </div>
     
  )
}
export default ContactForm