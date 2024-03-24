import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getblog } from "../utility/main";
import { deleteBlog } from "../utility/main";

function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getblog();

    setBlogs(storedBlogs)

  }, []);

   const handleDelete = (id) => {
     deleteBlog(id);

      const storedBlogs = getblog();

      setBlogs(storedBlogs);
   };

 

  return (
    <div className="grid px-4 sm:px-8 py-10 justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>
      ))}
    </div>
  );
}

export default Bookmarks
