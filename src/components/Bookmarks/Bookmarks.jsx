import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"

export default function Bookmarks({bookmarks, readingTime}) {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 rounded-xl p-4 mb-2">
        <div className=" text-center mb-2">
            <h3 className="text-4xl text-purple-900 py-2">Reading Time : {readingTime}</h3>
        </div>
      <h2 className=" text-3xl text-center">Bookmarks Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx}
            bookmark={bookmark} 
        ></Bookmark>)
      }
    </div>
  )
}

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
