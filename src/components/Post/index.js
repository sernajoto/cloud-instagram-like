import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const image = this.props.image;
        const caption = this.props.caption;

        return (
            <article className="Post" ref="Post">
                <div>
                    <header>
                        <div className="Post-user">
                            <div className="Post-user-avatar">
                                <img src="https://goo.gl/9EGiXj" alt="God" />
                            </div>
                            <div className="Post-user-nickname">
                                <span>God</span>
                            </div>
                        </div>
                    </header>
                    <div className="Post-image">
                        <div className="Post-image-bg">
                            <img alt={caption} src={image} />
                        </div>
                    </div>
                    <div className="Post-caption">
                        {caption}
                    </div>
                </div>
            </article>
        );
    }
}
export default Post;