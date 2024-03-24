// import React from 'react'
// import PropTypes from 'prop-types'
import Markdown from 'react-markdown';
import PlaceholdeImage from '../assets/404.jpg'

import { useLoaderData } from "react-router-dom"
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData();

    const { cover_image, title, tags, body_html } =
      blog;

  return (
    <div className="mx-auto group border-2 border-primary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50">
      <figure className="p-2">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500"
          src={cover_image || PlaceholdeImage}
        />
      </figure>

      <div>
        <div className="flex flex-wrap py-6 px-2 gap-x-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div className="w-full max-w-3xl">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {}

export default Content
