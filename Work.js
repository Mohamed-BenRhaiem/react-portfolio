import { FaSearch } from "react-icons/fa";
import { GitHub } from 'react-feather';
import './Work.css'
function Work(props) {
  
   return (
    <>
    <div className='container image-card-wrapper mt-5'>
        <div   className='card image-card shadow'>
          <div className='overlay-hover'>
                <div className='overlay-info'>

                    <span  >Project Title</span>
                    <ul >
                      <li><FaSearch /></li>
                      <li><GitHub /></li>
                    </ul>
                </div>
          </div>
          <img className='fs-1 work-image'src={props.src} alt='Project'/>
        </div>

        
          
       
    </div>

    </>
  )
}

export default Work


