import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import PostGrid from './components/PostGrid';
import Post from './components/Post';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostGrid}/>
        <Route path="/post/:postid" component={Post} />
    </Route>
);