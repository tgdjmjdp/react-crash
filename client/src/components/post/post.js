import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/action-post'
import Spinner from '../spinner/spinner'
import PostItem from './postItem'
import PostForm from './postForm'

const Post = ({
    getPosts,
    post: {
        posts,
        loading
    }
}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts])
    return (
        <div>
            {
                loading ? <Spinner /> : (
                    <Fragment>
                        <h1 className="large text-primary">
                            Posts
                        </h1>
                        <p className="lead">
                            Welcome To Community
                        </p>
                        <PostForm />
                        <div className="posts">
                            {
                                posts.length > 0 ? (
                                    posts.map(post => (
                                        <PostItem key={post._id} post={post} />
                                    ))
                                ) : (
                                        <div>
                                            <p>
                                                <strong>
                                                    No Posts Yet
                                                </strong>
                                            </p>
                                        </div>
                                    )

                            }
                        </div>
                    </Fragment>
                )
            }
        </div>
    )
}

Post.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    post: state.post
});

export default connect(mapStateToProp, { getPosts })(Post)
