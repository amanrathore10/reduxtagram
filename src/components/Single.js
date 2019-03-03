import React, { Component } from 'react'
import Photo from './Photo';
import { Comments } from './Comments';

export default class Single extends Component {
  render() {
    const postId = this.props.match.params.postId;
    console.log('single',this.props);
    const i = this.props.posts.findIndex(post=>post.code===postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [] ;
    
      return (
        <div>
          <div className='single-photo'>
              <Photo i={i} post={post} {...this.props} />
              <Comments  postComments={postComments} {...this.props}   />
          </div>
        </div>
      )
    
  }
}

