import '../styles/image1.css'
import { Link } from 'react-router-dom';

const text= 'I am a current student attending university for Computer Engineering with a passion for Software Development.  The'
const Home = () =>{
    

    return(
        <div>
            <h1 className='heading1' style={{ textAlign: 'center'}}>I am Nathan, welcome to my portfolio.</h1>
            <p className ='para' style={{color: 'white', fontSize: '18px', textAlign: 'center'}}>{text}</p>
            <Link className='button1' to='/Work'>My Work</Link>
        </div>
    )
}
export default Home

