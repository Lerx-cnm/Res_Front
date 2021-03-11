import Project1 from '../components/Project1'
import { BrowserRouter as Link, Route} from 'react-router-dom';


const WorkContainer = (match) => {
    console.log(match.url)
    return(
        <div>
        {/* <Link to='/'>Home</Link> */}
        <a href={`NathanSteed/Project1`}>Project1</a><br></br>
        <a href='NathanSteed/project2'>Project2</a><br></br>
        <a href='NathanSteed/project3'>Project3</a><br></br>
        <a href='NathanSteed/project4'>Project4</a><br></br>
        <a href='NathanSteed/project5'>Project5</a><br></br>
      </div>
    )
}

export default WorkContainer