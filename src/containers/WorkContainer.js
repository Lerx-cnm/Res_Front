// import img from '../styles/image1.css';


const WorkContainer = (match) => {
    console.log(match.url)
    return(
        <div>
        {/* <img className="img" src={Air}></img> */}
        <a href='/Project1'>Project1</a><br></br>
        <a href='/project2'>Project2</a><br></br>
        <a href='/project3'>Project3</a><br></br>
        <a href='/project4'>Project4</a><br></br>
        <a href='/project5'>Project5</a><br></br>
      </div>
    )
}

export default WorkContainer