import '../styles/image1.css'
import { Link } from 'react-router-dom';
// import Stair from '../images/stair.jpg';
const text= 'I am a current student attending university for Computer Engineering with a passion for Software Development.\n  The'
const Home = () =>{
    

    return(
        <div>
            {/* <img className="img" src={Stair}></img> */}
            <p className='heading1' style={{ textAlign: 'center'}}>I am Nathan, welcome to my portfolio.</p>
            <p style={{color: 'white', fontSize: '18px', textAlign: 'center'}}>{text}</p>
            <Link className='button1' to='/Work'>My Work</Link>
            {/* <a className='button1' href='/Work'>Work</a> */}
            {/* <a href='/project1'>Project1</a><br></br>
            <a href='/project2'>Project2</a><br></br>
            <a href='/project3'>Project3</a><br></br>
            <a href='/project4'>Project4</a><br></br>
            <a href='/project5'>Project5</a><br></br> */}
        </div>
    )
}
export default Home