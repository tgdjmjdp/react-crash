import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connet } from 'react-redux'
import { Link } from 'react-router-dom'

const CommentItem = ({
    postId,
    comment: {
        _id,
        text,
        name,
        avatar,
        user,
        date
    }
}) => {
    return (
        <div className="pst">
            <Link to={"/profile/" + user} >
                <img 
                    className="round-img"
                    src={avatar}
                    alt=""
                    />
                    <h4>
        </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { })(CommentItem)
