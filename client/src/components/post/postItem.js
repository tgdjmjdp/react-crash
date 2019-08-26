import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLikes, removeLikes, deletePost } from '../../actions/action-post'

const PostItem = ({
    addLikes,
    removeLikes,
    deletePost,
    auth,
    post: {
        _id,
        text,
        name,
        avatar,
        user,
        likes,
        comments,
        date
    },
    showActions
}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={"/profile/" + user}>
                    <img className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <p className="my-1">
                {text}
            </p>
            <p className="post-date">
                Posted on &nbsp;
                <Moment format="DD-MM-YYYY">
                    {date}
                </Moment>
            </p>
            {
                showActions && <Fragment>
                    <button
                        onClick={e => addLikes(_id)}
                        type="button"
                        className="btn btn-light">
                        Likes {
                            likes.length > 0 && (
                                <span className="comment-count">
                                    {likes.length}
                                </span>
                            )
                        }
                    </button>
                    <button
                        onClick={e => removeLikes(_id)}
                        type="button"
                        className="btn btn-light">
                        Dislikes
                    </button>
                    <Link to={'/post/' + _id} className="btn btn-primary">
                        Comments {
                            comments.length > 0 && (
                                <span className="comment-count">
                                    {comments.length}
                                </span>
                            )
                        }
                    </Link>
                    {
                        !auth.loading && user === auth.user._id && (
                            <button
                                onClick={e => deletePost(_id)}
                                type="button"
                                className="btn btn-danger">
                                DELELTE THIS POST
                    </button>
                        )
                    }
                </Fragment>
            }
        </div>
    )
}

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    addLikes: PropTypes.func.isRequired,
    removeLikes: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
})

export default connect(mapStateToProp, { addLikes, removeLikes, deletePost })(PostItem)
