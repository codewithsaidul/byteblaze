import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import PlaceholdeImage from '../assets/404.jpg';
import { MdDeleteForever } from "react-icons/md";


function BlogCard({ blog, deletable, handleDelete }) {
  const { id, cover_image, title, published_at, description } = blog;

  return (
    <div className="flex relative">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 duration-700 hover:scale-105 border-primary border-opacity-30 hover:border-secondary hover:no-underline focus:no-underline dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50"
      >
        <figure className="p-2">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500"
            src={cover_image || PlaceholdeImage}
          />
        </figure>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600 dark:text-gray-600 dark:text-gray-600 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute -top-5 -right-5 bg-primary p-3 rounded-full cursor-pointer hover:scale-105 overflow-hidden z-10"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />{" "}
        </div>
      )}
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func
};

export default BlogCard
