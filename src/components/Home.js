import '../styles/image1.css'
import { Link } from 'react-router-dom';
// import Stair from '../images/stair.jpg';
const text= 'I am a current student attending university for Computer Engineering with a passion for Software Development.\n  The'
const Home = () =>{
    

    return(
        <div>
            <p className='heading1' style={{ textAlign: 'center'}}>I am Nathan, welcome to my portfolio.</p>
            <p style={{color: 'white', fontSize: '18px', textAlign: 'center'}}>{text}</p>
            <Link className='button1' to='/Work'>My Work</Link>
        </div>
    )
}
export default Home

