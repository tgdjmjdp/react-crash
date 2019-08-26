import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/action-post'

const CommentForm = ({ postId, addComment }) => {
    
    const [text, setText] = useState('');

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Comment Something...</h3>
            </div>
            <form className="form my-1"onSubmit={
                e => {
                    e.preventDefault();
                    addComment(postId, {text});
                    setText('');
                }
            }>
                <textarea
                    name="text"
                    col="30"
                    rows="5"
                    value={text}
                    onChange={ e => setText(e.target.value)}
                    placeholder="Create a post"
                    required></textarea>
                <input type="submit" className="btn btn-dark my-1" value="submit" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm)
