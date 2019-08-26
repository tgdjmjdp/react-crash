import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../spinner/spinner'
import { getPost } from '../../actions/action-post'
import PostItem from '../post/postItem'
import CommentForm from './commentForm'
import CommentItem from './commentItem'

const Post = ({
    getPost,
    post: {
        post,
        loading
    },
    match
}) => {

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);

    return (
        loading || post === null ? <Spinner /> : <Fragment>
            <Link to="/posts" className="btn" >ກັບຄືນ</Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <div className="comments">
                {
                    post.comments.map(
                        comment => (
                            <CommentItem
                                postId={post._id}
                                key={comment._id}
                                comment={comment}
                            />
                        )
                    )
                }
            </div>
        </Fragment>
    )
}

Post.propTypes = {
    postId: PropTypes.string.isRequired,
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
