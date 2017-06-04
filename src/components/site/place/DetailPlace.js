import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserById from '../../../api/user/getUserById';
import getImageFromPlace from '../../../api/image/getImageFromPlace';
import getPlaceFromId from '../../../api/place/getPlaceFromId';
import getCommentPlace from '../../../api/comment/getCommentPlace';
import Comment from './Comment';
import $ from 'jquery';

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class DetailPlace extends Component {
    constructor(props) {
        super(props);
        this.state = { place: {}, user: {}, lstImage: [], comment: [], like: '', view: '' };

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getCommentPlace(id).then(comment => this.setState({ comment }))
        getPlaceFromId(id).then(detailPlace => {
            this.setState({ place: detailPlace, like: detailPlace.like, view: detailPlace.view });
            getUserById(this.state.place.user_id).then(detailUser => {
                this.setState({ user: detailUser });
                getImageFromPlace(this.state.place.id).then(lst => {
                    this.setState({ lstImage: lst });
                });
            });
        });
        const socket = io.connect();
        socket.on('COMMENT',comments => {
            this.setState({comment: this.state.comment.concat(comments)});
        });
    }
    insertComment(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const user = this.props.user;
        const socket = io.connect();
        $(document).ready(() => {
            if (getCookie('tk')) {
                socket.emit('INSERT_COMMENT',{content: this.refs.txtComment.value, place_id: id, user_id: user.id});
            }
            else alert('Bạn phải đăng nhập trước!')
        });
    }

    render() {
        const key = this.props.key;
        const place = this.state.place;
        const like = this.state.like;
        const view = this.state.view;
        const comment = this.state.comment;
        const user = this.state.user;
        const lstImage = this.state.lstImage;

        return (

            <div id="content-block">
                <div className="container be-detail-container">
                    <h2 className="content-title">
                        {place.name}
                    </h2>
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <div className="blog-wrapper blog-list">
                                <div style={{ paddingBottom: "0px", marginBottom: "0px" }} className="blog-post be-large-post">
                                    <div className="info-block clearfix">
                                        <div className="be-large-post-align">
                                            <span><i className="fa fa-thumbs-o-up" />  {like}</span>
                                            <span><i className="fa fa-eye" />  {view}</span>
                                            {/*<span><i className="fa fa-comment-o" /> 50</span>*/}
                                        </div>
                                    </div>
                                    <div className="be-large-post-align">
                                        <h3 className="be-post-title">
                                            {place.name}
                                        </h3>
                                        <span className="be-text-tags clearfix">
                                            <div className="post-date">
                                                <i className="fa fa-clock-o" />  {place.date_create};
                      </div>
                                            <div className="author-post">
                                                <img src={user.avatar} alt className="ava-author" />
                                                <span>by <a href="#">{user.first_name + ' ' + user.last_name}; </a></span>
                                            </div>
                                        </span>
                                        <div className="clear" />
                                    </div>

                                    {/*<div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            {lstImage.map((e, i) =>
                                                <li data-target="#myCarousel" data-slide-to={i} />
                                            )}
                                        </ol>
                                        <div className="carousel-inner">
                                            {lstImage.map((e, i) =>
                                                <div key={i} className={i == 0 ? "item active" : "item"} >
                                                    <img src={"/" + e.link} alt="ok" />
                                                </div>
                                            )}


                                        </div>
                                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                            <span className="fa fa-chevron-left" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                            <span className="fa fa-chevron-right" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>*/}

                                    <div className="post-preview be-large-post-slider">
                                        <div className="swiper-container" data-autoplay={0} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                            <div className="swiper-wrapper">
                                                {lstImage.map((e, i) =>
                                                    <div key={i} className="swiper-slide active" data-val={i}>
                                                        <img className="img-responsive img-full" src={e.link} alt />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="pagination hidden" />
                                            <div className="swiper-arrow-left type-3" />
                                            <div className="swiper-arrow-right type-3" />
                                        </div>
                                    </div>
                                    <div className="blog-content be-large-post-align">
                                        <div className="post-text " dangerouslySetInnerHTML={{ __html: place.description }}>

                                        </div>
                                    </div>
                                    <div className="info-block clearfix">
                                        <div className="be-large-post-align  pull-right">
                                            <span><i className="fa fa-thumbs-o-up" />  {like}</span>
                                            <span><i className="fa fa-eye" />  {view}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="be-comment-block">
                                    <h1 className="comments-title">Comments </h1>
                                    {!comment[0] ? <h3>Chưa có bình luận nào, hãy là người đầu tiên bình luận bài viết nào</h3> : comment.map((e, i) => <Comment content={e} key={i} />)}
                                    <form className="form-block">
                                        <div className="row">
                                            {/*<div className="col-xs-12 col-sm-6">
                                                <div className="form-group fl_icon">
                                                    <div className="icon"><i className="fa fa-user" /></div>
                                                    <input className="form-input" type="text" placeholder="Your name" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 fl_icon">
                                                <div className="form-group fl_icon">
                                                    <div className="icon"><i className="fa fa-envelope-o" /></div>
                                                    <input className="form-input" type="text" placeholder="Your email" />
                                                </div>
                                            </div>*/}
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <textarea ref="txtComment" className="form-input" required placeholder="Your text" defaultValue={""} />
                                                </div>
                                            </div>
                                            <a onClick={this.insertComment.bind(this)} className="btn color-1 size-2 hover-1 pull-right">Bình luận</a>
                                        </div>
                                    </form>
                                </div>


                            </div>
                            <h3 style={{ fontSize: '20pt' }} className="letf-menu-article">Tham khảo các hành trình đã từng đi qua địa điểm này</h3>
                            <div className="blog-post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-7">
                                        <div className="post-preview">
                                            <div className="swiper-container" data-autoplay={0} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide active" data-val={0}>
                                                        <img className="img-responsive img-full" src="../asset/img/blog_2.jpg" alt />
                                                    </div>
                                                    <div className="swiper-slide" data-val={1}>
                                                        <img className="img-responsive img-full" src="../asset/img/blog_3.jpg" alt />
                                                    </div>
                                                    <div className="swiper-slide" data-val={2}>
                                                        <img className="img-responsive img-full" src="../asset/img/blog_1.jpg" alt />
                                                    </div>
                                                </div>
                                                <div className="pagination hidden" />
                                                <div className="swiper-arrow-left type-2 type-3" />
                                                <div className="swiper-arrow-right type-2 type-3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-5">
                                        <div className="post-desc">
                                            <a className="post-label" href>Street Art on the London big wall</a>
                                            <div className="post-text">Morbi efficitur feugiat erat a efficitur. Donec interdum, nunc ac elementum auctor, dui nisl placerat odio, eget
                          sed mattis.</div>
                                            <div className="author-post">
                                                <img src="../asset/img/a1.png" alt className="ava-author" />
                                                <span>by <a href="#">Hoang Nguyen</a>, April 23, 2015</span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <span><i className="fa fa-comment-o" /> 20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-3">
                            <form action="./" className="input-search">
                                <input type="text" required placeholder="Enter keyword" />
                                <i className="fa fa-search" />
                                <input type="submit" defaultValue />
                            </form>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Categories
                </h3>
                                <div className="creative_filds_block">
                                    <div className="ul">
                                        <a href="#">Graphic Design		</a>
                                        <a href="#">Photography			</a>
                                        <a href="#">Interaction Design	</a>
                                        <a href="#">Art Direction		</a>
                                        <a href="#">Illustration		</a>
                                    </div>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Popular Posts
                </h3>
                                <div className="be-post style-2">
                                    <a href="#" className="be-post-title">Arctic monkeys. Space adventures in the action</a>
                                    <a href="#" className="be-img-block">
                                        <img src="../asset/img/be_post_1.jpg" alt="omg" />
                                    </a>
                                    <span>
                                        Pellentesque consectetur, est vel efficitur posuere, neque dolor accumsan
                  </span>
                                </div>
                                <div className="be-post style-2">
                                    <a href="#" className="be-post-title">Cubism as art direction</a>
                                    <a href="#" className="be-img-block">
                                        <img src="../asset/img/be_post_2.jpg" alt="omg" />
                                    </a>
                                    <span>
                                        Cras pellentesque blandit arcu eget laoreet. Nulla finibus non.
                  </span>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Popular Tags
                </h3>
                                <div className="tags_block clearfix">
                                    <ul>
                                        <li><a href="#">photoshop</a></li>
                                        <li><a href="#">graphic</a></li>
                                        <li><a href="#">art</a></li>
                                        <li><a href="#">website</a></li>
                                        <li><a href="#">logo</a></li>
                                        <li><a href="#">identity</a></li>
                                        <li><a href="#">logo design</a></li>
                                        <li><a href="#">interactive</a></li>
                                        <li><a href="#">blue</a></li>
                                        <li><a href="#">branding</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="letf-menu-article">
                                Slider widget
              </h3>
                            <div className="swiper-container" data-autoplay={5000} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                        <a href="#" className="be-post-tag">Web Design</a>,
                        <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                        <a href="#" className="be-post-tag">Web Design</a>,
                        <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                        <a href="#" className="be-post-tag">Web Design</a>,
                        <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                        <a href="#" className="be-post-tag">Web Design</a>,
                        <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination">
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Archive
                </h3>
                                <div className="accordion style-1">
                                    <div className="acc-panel">
                                        <div className="acc-title">2015</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="#">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                    <div className="acc-panel">
                                        <div className="acc-title">2014</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="#">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                    <div className="acc-panel">
                                        <div className="acc-title">2013</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="#">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="#">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Gallery
                </h3>
                                <div className="gal-vidget">
                                    <div className="row row20">
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_1.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_2.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_3.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_4.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_5.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="#"><img className="img-responsive img-full" src="../asset/img/be_gal_6.jpg" alt /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => ({ user: state.user }))(DetailPlace)
