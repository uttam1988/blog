import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit, fields: { title, categories, content } } = this.props;
        return (
          <form className="form-horizontal" onSubmit={handleSubmit(this.props.createPost)}>
              <h3>Create a New Post</h3>
              <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" {...title} />
              </div>
              <div className="form-group">
                  <label>Categories</label>
                  <input type="text" className="form-control" {...categories} />
              </div>
              <div className="form-group">
                  <label>Comment</label>
                  <textarea className="form-control" {...content} />
              </div>
              <div className="buttons">
                  <button className="btn btn-primary" type="submit">Save</button>
              </div>
          </form>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title','categories','content']
}, null, { createPost })(PostNew);