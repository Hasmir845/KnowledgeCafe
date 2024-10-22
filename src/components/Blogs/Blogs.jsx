import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


export default function Blogs({handleBookmarksAdding,handleReadingTime}) {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl my-3">Blogs : {blogs.length}</h1>
      {
        blogs.map(blog => <Blog key={blog.id} 
          blog={blog}
          handleBookmarksAdding ={handleBookmarksAdding}
          handleReadingTime = {handleReadingTime}
          >
            
          </Blog>)
      }
    </div>
  )
}
Blogs.propTypes = {
  handleBookmarksAdding: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired
}
