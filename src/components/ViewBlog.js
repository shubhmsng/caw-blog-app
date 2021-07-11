import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core';
import CONSTANTS from '../constants/CONSTANTS';
import CardComponent from './CardComponent';
import { setPost, setComments } from '../store/actions';

function ViewBlog() {
    const dispatch = useDispatch();
    const blog = useSelector(state => state.post);
    const comments = useSelector(state => state.comments);

    const location = useLocation()
    let blogId = location.pathname;
    blogId = blogId.split("/");
    blogId = blogId[1];

    useEffect(() => {
        fetch(CONSTANTS.BLOG_URL + blogId)
        .then(res => res.json())
        .then(blog =>dispatch(setPost(blog)))
        .catch(err => console.log(err));
    }, [blogId, dispatch])

    const loadComments = useCallback(() => {
        fetch(CONSTANTS.COMMENTS_URL + blogId)
        .then(res => res.json())
        .then(comments =>dispatch(setComments(comments)))
        .catch(err => console.log(err));
    }, [blogId, dispatch]);

    return (
        blog.title ? <div>
            <Helmet>
                <title>{blog.title}</title>
            </Helmet>

            <h2 aria-label="blog name">{blog.title}</h2>
            <p aria-label="blog content">{blog.body}</p>
            
            { comments.length > 0 ?
                <React.Fragment>
                    <h3>{CONSTANTS.COMMENTS}</h3>
                    {comments.map(comment => <CardComponent
                        body={comment.body}
                        title={comment.name}
                        email={comment.email}
                        id={comment.id}
                        key={comment.id} />)}
                </React.Fragment>
                :
                <Button aria-label="load comments" variant="contained" color="primary" onClick={loadComments}>{CONSTANTS.LOAD_COMMENTS}</Button>
            }
        </div> 
        : 
        <></>
    );
}

export default ViewBlog;