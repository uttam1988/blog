import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Posts from './components/posts';
import PostNew from './components/postnew';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route path="posts/new" component={PostNew}/>
    </Route>
);
