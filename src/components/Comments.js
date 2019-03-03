import React, { Component } from 'react'

export class Comments extends Component {
  // removeComment(i){
  //   const postId = this.props.match.params.postId;
  //   this.props.removeComment(i,postId);
  // }
  // constructor(){
  //   super();
  //   // this.renderComment = this.renderComment.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }
  renderComment=(comment, i)=>{
    //null is used to bind for global context
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        
          <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.match.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const postId = this.props.match.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset(); 
  }
  render() {
    return (
      <div className='comments'>
          {this.props.postComments.map(this.renderComment)} 
          <form ref="commentForm" className='comment-form' onSubmit={this.handleSubmit}>
              <input type='text' ref="author" placeholder='author'/>
              <input type='text' ref="comment" placeholder='Add Comment..'/>
              <input type="submit" hidden/>
          </form>
      </div>
    )
  }
}

export default Comments
