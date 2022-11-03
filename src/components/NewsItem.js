import React, { Component } from 'react'

class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, time } = this.props
    return (
      <div className='container my-3'>
        <div className="card">
          <img src={!imgUrl ? "https://image.cnbcfm.com/api/v1/image/105046003-GettyImages-915278630.jpg?v=1666849584&w=1920&h=1080" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"> {desc}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown":author} on {new Date(time).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
