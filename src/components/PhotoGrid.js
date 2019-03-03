import React, { Component } from 'react'
import Photo from './Photo'
export default class PhotoGrid extends Component {
  render() {
    const {posts} = this.props;
      console.log(this.props);
    return (
      <div className='photo-grid'>
        {posts.map((post, i)=>{
          return(
            <Photo  post={post} key={i} i={i} {...this.props}></Photo>
          )
        })}
      </div>
    )
  }
}

