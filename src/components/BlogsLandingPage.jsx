import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="blogs-landing-page">
        <h1>Blogs</h1>
        <input type="text" placeholder="Name your new blog post" />
        <Link className="cultural-blogs-link" to="/blogs/cultural">
          <h1>Cultural Blogs</h1>
        </Link>
        <Link className="" to="">
          <h1></h1>
        </Link>
      </div>
    )
  }
})
