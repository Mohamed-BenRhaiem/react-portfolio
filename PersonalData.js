import Title,{ SubTitle } from '../title/Title'
import './PersonalData.css'
import { FaAddressCard } from 'react-icons/fa'
function PersonalData(props) {
  return (
    <>
    <div className='personalData container'>
        
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
        <FaAddressCard className='contact-icon' />
    </div>
    </>
  )
}

export default PersonalData