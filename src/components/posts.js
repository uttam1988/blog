import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const list = this.props.fetchPosts();

        return (
            <div className="well">
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-12">
                    <ul className="list-group">
                        <li className="list-group-item">Post 1</li>
                        <li className="list-group-item">Post 2</li>
                        <li className="list-group-item">Post 2</li>
                    </ul>
                </div>
                {list.map = (index) => {
                    <li>{index.id}</li>
                }}
            </div>
        );
    }
}

export default connect(null, { fetchPosts:fetchPosts })(Posts);