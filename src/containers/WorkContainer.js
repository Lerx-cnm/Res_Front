import Project1 from '../components/Project1'
import { BrowserRouter as Link, Route} from 'react-router-dom';
import Air from '../images/air1.jpg';
// import img from '../styles/image1.css';


const WorkContainer = (match) => {
    console.log(match.url)
    return(
        <div>
        {/* <Link to='/'>Home</Link> */}
        <img className="img" src={Air}></img>
        {/* <a href={`NathanSteed/Project1`}>Project1</a><br></br>
        <a href='NathanSteed/project2'>Project2</a><br></br>
        <a href='NathanSteed/project3'>Project3</a><br></br>
        <a href='NathanSteed/project4'>Project4</a><br></br>
        <a href='NathanSteed/project5'>Project5</a><br></br> */}
      </div>
    )
}

export default WorkContainer