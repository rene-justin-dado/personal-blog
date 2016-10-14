import React from 'react'

import AboutExcerpt from '../components/AboutExcerpt'
import BlogsExcerpt from '../components/BlogsExcerpt'
import ProjectsExcerpt from '../components/ProjectsExcerpt'

export default React.createClass({
  render () {
    return (
      <section className="excerpts-container">
        <ProjectsExcerpt />
        <BlogsExcerpt />
        <AboutExcerpt />
      </section>
    )
  }
})
