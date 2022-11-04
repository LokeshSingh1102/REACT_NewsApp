import React, { Component } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


class News extends Component {
  static defaultProps = {
    pageSize: 6,
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResult: 0
    }
  }

  async Update() {
    this.props.setProgress(10)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)

    this.setState({
      loading: true
    })
    this.props.setProgress(30)
    let response = await data.json();
    this.props.setProgress(70)
    // console.log(response)
    this.setState({
      article: response.articles,
      totalResult: response.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.Update()
  }
  // Next = async () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.Update();
  // }
  // Previous = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.Update();
  // }
  
  fetchData =async () => {
    this.setState({
      page:this.state.page+1
    })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)

    this.setState({
      loading: true
    })
    let response = await data.json();
    // console.log(response)
    this.setState({
      article: this.state.article.concat(response.articles),
      totalResult: response.totalResults,
      loading: false
    })

  };

  render() {
    return (
      <>
        <div className="container">
          <h3 style={{ textAlign: "center", margin: "10px" }}>NEWS</h3>
          {/* <Loading /> */}
          {/* {this.state.loading && <Loading />} */}
          <InfiniteScroll
            dataLength={this.state.article.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.page!==this.state.totalResult}
            loader={<Loading />}
          >

            <div className="row">
              {this.state.article.map((element,i) => {
                return <div className="col-md-3" key={i}>
                  <NewsItem title={element.title ? element.title.slice(0, 40) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} />
                </div>
              })}
            </div>
          </InfiniteScroll>
        </div>

      </>
    )
  }
}

export default News
