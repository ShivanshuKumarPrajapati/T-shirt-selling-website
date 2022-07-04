import React from 'react'
import Nav from './Nav'

const Base = ({
    title = 'My title',
    description = 'My description',
    className = 'bg-dark text-white p-4',
    children
}) => {
  return (
      <div>
      <Nav/>
          <div className="container-fluid">
              <div className="jumbotron bg-dark text-white text-center">
                  <h2 className="display-4">{title}</h2>
                  <p className="lead">{description}</p>
              </div>
              <div className={className}>
                  {children}
              </div>
              <footer className="footer bg-dark mt-auto py-3">
                  <div className="container-fluid bg-success text-white text-center py-3">
                      <h4>If you get question, feel freee to reach out</h4>
                      <button className="btn btn-warning btn-lg my-3">Contact us</button>
                  </div>
                  <div className="container">
                      <span className="text-muted">
                      An amazing place to buy proudcts</span></div>
              </footer>
          </div>
      </div>
  )
}

export default Base