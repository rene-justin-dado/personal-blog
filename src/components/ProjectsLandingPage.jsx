import React from 'react'
import request from 'superagent'

const url = 'http://localhost:3000'

export default React.createClass({
  getInitialState () {
    return {
      projects: []
    }
  },
  componentWillMount () {
    request
      .get(`${url}/v1/projects`)
      .end((err, res) => {
        if (err) {
          res.send('Whoops! Something went wrong!')
          return
        }
        this.setState({
          projects: res.body.data
        })
      })
  },
  render () {
    const projects = this.state.projects.map((elem, i) => {
      return (
        <div key={i} className="project-info">
          <em><strong><h4>{elem.name}</h4></strong></em>
          <a href={elem.github_link}>
            <img src="images/octocats/classic-octocat.png"
                 alt="octocat"
                 height="100px"
                 width="100px"/>
             Github Link
          </a>
          <br/>
          <h5><a href={elem.deployment_link || elem.github_link}>{elem.deployment_link || "Nothing but Github"}</a></h5>
        </div>
      )
    })
    return (
      <div className='projects-landing-page'>
        <h1>Here's some projects I've contributed to.</h1>
        {projects}
      </div>
    )
  }
})