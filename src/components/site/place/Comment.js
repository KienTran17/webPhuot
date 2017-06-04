import React, { Component } from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
         const {content, first_name, last_name, avatar, date_created} = this.props.content;
        return (
            <div className="be-comment">
                <div className="be-img-comment">
                    <a href="#">
                        <img src={avatar} alt className="be-ava-comment" />
                    </a>
                </div>
                <div className="be-comment-content">
                    <span className="be-comment-name">
                        <a href="#">{first_name + ' ' + last_name}</a>
                    </span>
                    <span className="be-comment-time">
                        <i className="fa fa-clock-o" />
                        {/*May 27, 2015 at 3:14am         */}
                        {date_created}
                        </span>
                    <p className="be-comment-text">{content}</p>
                </div>
            </div>
        );
    }
}
