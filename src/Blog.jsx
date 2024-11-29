import React from 'react'

const Blog = () => {
  return (
    <>
        <div className="blog-container">
      <form className="blog-form">

            <label>Blog Name</label>
            <input type='text' placeholder='Blog Name'/>
            <label>Blog Description</label>
            <textarea placeholder='Blog Description'/>
            <label>Author</label>
            <input type='text' placeholder='Author'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
)
}

export default Blog