import './Added.css'
import Check from './images/check.png'
const Added = () => {
    return (<div className="added-overlay">
        <div className="added-content">
        <div className="add-img">
        <img src={Check} alt="hhh" />
        </div>
        <div className='informed'>Item Added to Cart!</div>
        </div>
    </div> );
}
 
export default Added;