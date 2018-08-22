import React, { Component } from 'react';
import Post from '../Post'

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            pics: []
        };
    };

    componentDidMount() {
        require('isomorphic-fetch');
        // For local server use: 'http://localhost:4000/'
        fetch('https://cloud-graphql-server.herokuapp.com/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ cloud { name link } }' }),
        })
            .then(res => res.json())
            .then(res => {
                let pic = res.data.cloud.map(p => p);
                this.setState({ pics: pic });
            });
    }

    render() {
        return (
            <div className="Posts">
                {this.state.pics.map(
                    p => <Post image={p.link} caption={p.name} />)
                }
            </div>
        );
    }
}

export default Posts;