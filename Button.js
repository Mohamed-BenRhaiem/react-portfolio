import './Button.css'
function CvButton(props) {
  return (
    <button className='cvbtn'>{props.children}</button>
  )
}
function HireButton(props) {
  return (
    <button className='hirebtn'>{props.children}</button>
  )
}

export default CvButton
export {HireButton}