import React, { Component } from 'react';
import getUserById from '../../../api/user/getUserById';
import getImageFromPlace from '../../../api/image/getImageFromPlace';
export default class ListPlace extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, lstImage: [] };
    }
    componentDidMount() {
        const place = this.props.place;
        getUserById(place.user_id).then(detailUser => {
            this.setState({user: detailUser});
        });
        getImageFromPlace(place.id).then(lst=>{
            this.setState({lstImage: lst});
        });
    }
    render() {
        const place = this.props.place;
        const user = this.state.user;
        const lstImage = this.state.lstImage;
        return (
            <div className="custom-column-5">
                <div className="be-post">
                    <a href={"place/" + place.id} className="be-img-block">
                        <img style={{height:"170px"}} src={lstImage[0] ? lstImage[0].link : ""} alt="omg" />
                    </a>
                    <a style={{fontSize:"14pt"}} href={"place/" + place.id} className="be-post-title">{place.name}</a>
                    <span style={{marginBottom:"10px",height:"40px",overflow:"hidden"}}>
                        <a style={{fontSize:"10pt"}}  href={"place/" + place.id} className="be-post-tag"  dangerouslySetInnerHTML={{__html: place.description}}></a>
                                            
                    </span>
                    <div style={{fontSize:"10pt"}} className="author-post">
                        <img src={user.avatar} alt className="ava-author" />
                        <span>by <a href={"./user/"+user.id}>{user.last_name + ' ' + user.first_name}</a></span>
                    </div>
                    <div className="info-block">
                        <span><i className="fa fa-thumbs-o-up" /> {place.like}</span>
                        <span><i className="fa fa-eye" /> {place.view}</span>
                        {/*<span><i className="fa fa-comment-o" /> 20</span>*/}
                    </div>
                </div>
            </div>
        );
    }
}

