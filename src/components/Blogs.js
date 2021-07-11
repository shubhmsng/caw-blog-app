import React, { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CardComponent from './CardComponent';
import Header from './Header';
import CONSTANTS from '../constants/CONSTANTS';
import { setBlogs, setFilteredBlogs, setSearchText } from '../store/actions';

const useStyles = makeStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      margin: '0 auto'
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
});

function Blogs() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const filteredBlog = useSelector(state => state.filteredBlog);
    const searchBlogText = useSelector(state => state.searchBlog);

    useEffect(() => {
        fetch(CONSTANTS.BLOG_URL)
        .then(res => res.json())
        .then(blogs => {
            batch(() => {
                dispatch(setBlogs(blogs));
                dispatch(setFilteredBlogs(blogs));
            });
        })
        .catch(err => console.log(err));
    }, [dispatch]);

    const filterBlogs = (e) => {
        if (!e.key || e.key === 'Enter') {
            if(!searchBlogText) {
                dispatch(setFilteredBlogs(blogs));
            } else {
                const payload = blogs.filter(blog => blog.title?.toLocaleLowerCase().includes(searchBlogText.toLocaleLowerCase()));
                dispatch(setFilteredBlogs(payload));
            }
        }
    }

    return(
        <React.Fragment>
            <Header >
                <h1 className="header" align="center">Blogs</h1>
            </Header>
            <div className="searchbar">
                <Paper className={classes.root}>            
                    <InputBase 
                        className={classes.input}
                        placeholder="Search Blogs"
                        onKeyDown={filterBlogs}
                        aria-label="Search Blogs"
                        onChange={e => dispatch(setSearchText(e.target.value))}/>
                    <IconButton className={classes.iconButton} aria-label="Search" onClick={filterBlogs}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>

            { filteredBlog.length > 0 && filteredBlog.map(blog => <CardComponent 
                title={blog?.title} 
                body={blog?.body} 
                id={blog?.id} 
                key={blog?.id}
                clickable />) }
        </React.Fragment>
    );
}

export default Blogs;