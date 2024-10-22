import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

export default function Blog({blog, handleBookmarksAdding, handleReadingTime}) {
    const {title,cover, author, author_img ,reading_time,posted_date, hashtags} = blog;
  return (
    <div className=" mb-20">
        <img className=" w-full mb-8 rounded-xl" src={cover} alt={`Cover picture of the title ${title}`} />
    <div className=" flex justify-between">
        <div className="flex justify-center mb-4">
            <div>
                <img className="w-14" src={author_img} alt="" />
                </div>
                <div className=" ml-6">
                    <h3 className=" text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            
            </div>
            <div className="flex items-center">
                <span>{reading_time} Min Read</span>
                <button
                onClick={()=> handleBookmarksAdding(blog)}
                 className="ml-2 text-red-500 text-2xl" ><FaBookmark></FaBookmark></button>
            </div>
        </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span className=" ml-2" key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button
      onClick={()=>handleReadingTime(reading_time)}
      className=" text-purple-800 font-bold underline m-3">Mark As Read</button>
    </div>
  )
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksAdding: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
