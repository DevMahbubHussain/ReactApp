import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { blogsData } from '../../data';

const Blog = () => {
  const [blogpost, setBlogPosts] = useState(blogsData);
  //console.log(blogpost)

  const readMore = (str,num) => {
    if (str.length > num) return str.slice(0, num) + '...';
    else
      return str;

 }

  return (
    <div>
      <h2>All Blog Posts</h2>
      <section>
        {blogpost.map((blog) => {
          const { id, title, body } = blog;
          return <article key={id}>
            <h2>{title}</h2>
            <p>{readMore(body, 100)}</p>
            <Link to={title} state={{ id,title,body }}>Read More</Link>
          </article>
        })}
      </section>
    </div>
  );
}

export default Blog
