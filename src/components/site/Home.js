import React, { Component } from 'react';
import Register from '../login/ButtonRegister';
import { connect } from 'react-redux';
import ListPlace from './place/ListPlace';
import getAllPlace from '../../api/place/getAllPlace';
import getUserByUserName from '../../api/user/getUserByUserName';
import Facebook from '../login/Facebook';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        $(".drop-down-list li").on("click", function () {
            var new_value = $(this).find("a").text();
            $(this).parent().parent().find(".be-dropdown-content").text(new_value);
            // $.ajax({
            //     type: "GET",
            //     async: true,
            //     url: 'ajax_for_index.html',
            //     success: function (msg) {
            //         $("._post-container_").html(msg).delay(100).animate({ 'opacity': 1 }, 500, function () {
            //             updateContentFinish = 0;
            //         });
            //     }
            // });
            return false;
        });
        //const { isAuthen, arrAllPlace, dispatch } = this.props;
    }

    render() {
        const { isAuthen, arrAllPlace } = this.props;
        return (
            <div id="content-block">
                <div className="head-bg">
                    <div className="head-bg-img" />
                    <div style={{ backgroundImage: ` url('../asset/img/background.jpg')`, backgroundRepeat: "no-reapeat", backgroundSize: "1267px 450px" }} className="head-bg-content">
                        <h1>Website Phượt</h1>
                        <p>Nơi chia sẻ những địa điểm, hành trình thú vị ta đã đi qua</p>
                        {isAuthen ? "" : <Facebook />}
                        {isAuthen ? "" : <Register />}
                    </div>
                </div>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-2 be-drop-down left-feild">
                            <div className="">
                                <i className="icon-creative" />
                                <span className="be-dropdown-content">Địa Điểm</span>
                                <ul className="drop-down-list">
                                    <li><a>Địa Điểm</a></li>
                                    <li><a>Hành Trình</a></li>
                                    <li><a>Hình Ảnh Đẹp</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="for-be-dropdowns">
                                {/*<div className="be-drop-down">
                                    <i className="icon-projects" />
                                    <span className="be-dropdown-content drop">Lọc theo</span>
                                    <ul className="drop-down-list list">
                                        <li><a>Địa Điểm</a></li>
                                        <li><a>Hành Trình</a></li>
                                        <li><a>Item - 3</a></li>
                                    </ul>
                                </div>*/}
                                    <form action="./" className="input-search">
                                        <input type="text" required placeholder="Enter keyword" />
                                        <i className="fa fa-search" />
                                        <input type="submit" defaultValue />
                                    </form>
                                {/*<div className="be-drop-down">
                                    <i className="icon-features" />
                                    <span className="be-dropdown-content">Leo núi</span>
                                    <ul className="drop-down-list">
                                        <li><a>Có Leo núi</a></li>
                                        <li><a>Không Leo núi</a></li>
                                    </ul>
                                </div>
                                <div className="be-drop-down">
                                    <i className="icon-worldwide" />
                                    <span className="be-dropdown-content">Treckking</span>
                                    <ul className="drop-down-list">
                                        <li><a>Có Treckking</a></li>
                                        <li><a>Không Treckking</a></li>
                                    </ul>
                                </div>
                                <div className="be-drop-down">
                                    <i className="icon-worldwide" />
                                    <span className="be-dropdown-content">Cắm trại</span>
                                    <ul className="drop-down-list">
                                        <li><a>Có cắm trại</a></li>
                                        <li><a>Không cắm trại</a></li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-2 left-feild">
                            {/*<div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Popular Creative Filds
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
                            </div>*/}
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Filter By
                </h3>
                                <div className="filter-block">
                                    <ul>
                                        <li><a><i className="fa fa-location-arrow" />Địa điểm</a>
                                            <div className="be-popup">
                                                <h3 className="letf-menu-article">
                                                    Nhập tên địa điểm
                        </h3>
                                                <form action="/profile" className="input-search">
                                                    <input type="text" required placeholder="Nhập vào để tìm kiếm" />
                                                </form>
                                                <i className="fa fa-times" />
                                            </div>
                                        </li>
                                        {/*<li><a><i className="fa fa-wrench" />Tools Used</a>
                                            <div className="be-popup">
                                                <h3 className="letf-menu-article">
                                                    Tools
                        </h3>
                                                <form action="./" className="input-search">
                                                    <input type="text" required placeholder="Start typing to see list" />
                                                </form>
                                                <i className="fa fa-times" />
                                            </div>
                                        </li>*/}
                                        {/*<li><a><i className="fa fa-paint-brush" />Color</a>
                                            <div className="be-popup be-color-picker">
                                                <h3 className="letf-menu-article">Choose color</h3>
                                                <div className="for-colors">
                                                    <ul className="colors cfix">
                                                        <li className="color color-0-0" />
                                                        <li className="color color-0-1" />
                                                        <li className="color color-0-2" />
                                                        <li className="color color-0-3" />
                                                        <li className="color color-0-4" />
                                                        <li className="color color-0-5" />
                                                        <li className="color color-0-6" />
                                                        <li className="color color-0-7" />
                                                        <li className="color color-0-8" />
                                                        <li className="color color-0-9" />
                                                        <li className="color color-0-10" />
                                                        <li className="color color-0-11" />
                                                        <li className="color color-1-0" />
                                                        <li className="color color-1-1" />
                                                        <li className="color color-1-2" />
                                                        <li className="color color-1-3" />
                                                        <li className="color color-1-4" />
                                                        <li className="color color-1-5" />
                                                        <li className="color color-1-6" />
                                                        <li className="color color-1-7" />
                                                        <li className="color color-1-8" />
                                                        <li className="color color-1-9" />
                                                        <li className="color color-1-10" />
                                                        <li className="color color-1-11" />
                                                        <li className="color color-2-0" />
                                                        <li className="color color-2-1" />
                                                        <li className="color color-2-2" />
                                                        <li className="color color-2-3" />
                                                        <li className="color color-2-4" />
                                                        <li className="color color-2-5" />
                                                        <li className="color color-2-6" />
                                                        <li className="color color-2-7" />
                                                        <li className="color color-2-8" />
                                                        <li className="color color-2-9" />
                                                        <li className="color color-2-10" />
                                                        <li className="color color-2-11" />
                                                        <li className="color color-3-0" />
                                                        <li className="color color-3-1" />
                                                        <li className="color color-3-2" />
                                                        <li className="color color-3-3" />
                                                        <li className="color color-3-4" />
                                                        <li className="color color-3-5" />
                                                        <li className="color color-3-6" />
                                                        <li className="color color-3-7" />
                                                        <li className="color color-3-8" />
                                                        <li className="color color-3-9" />
                                                        <li className="color color-3-10" />
                                                        <li className="color color-3-11" />
                                                        <li className="color color-4-0" />
                                                        <li className="color color-4-1" />
                                                        <li className="color color-4-2" />
                                                        <li className="color color-4-3" />
                                                        <li className="color color-4-4" />
                                                        <li className="color color-4-5" />
                                                        <li className="color color-4-6" />
                                                        <li className="color color-4-7" />
                                                        <li className="color color-4-8" />
                                                        <li className="color color-4-9" />
                                                        <li className="color color-4-10" />
                                                        <li className="color color-4-11" />
                                                        <li className="color color-5-0" />
                                                        <li className="color color-5-1" />
                                                        <li className="color color-5-2" />
                                                        <li className="color color-5-3" />
                                                        <li className="color color-5-4" />
                                                        <li className="color color-5-5" />
                                                        <li className="color color-5-6" />
                                                        <li className="color color-5-7" />
                                                        <li className="color color-5-8" />
                                                        <li className="color color-5-9" />
                                                        <li className="color color-5-10" />
                                                        <li className="color color-5-11" />
                                                        <li className="color color-6-0" />
                                                        <li className="color color-6-1" />
                                                        <li className="color color-6-2" />
                                                        <li className="color color-6-3" />
                                                        <li className="color color-6-4" />
                                                        <li className="color color-6-5" />
                                                        <li className="color color-6-6" />
                                                        <li className="color color-6-7" />
                                                        <li className="color color-6-8" />
                                                        <li className="color color-6-9" />
                                                        <li className="color color-6-10" />
                                                        <li className="color color-6-11" />
                                                        <li className="color color-7-0" />
                                                        <li className="color color-7-1" />
                                                        <li className="color color-7-2" />
                                                        <li className="color color-7-3" />
                                                        <li className="color color-7-4" />
                                                        <li className="color color-7-5" />
                                                        <li className="color color-7-6" />
                                                        <li className="color color-7-7" />
                                                        <li className="color color-7-8" />
                                                        <li className="color color-7-9" />
                                                        <li className="color color-7-10" />
                                                        <li className="color color-7-11" />
                                                        <li className="color color-8-0" />
                                                        <li className="color color-8-1" />
                                                        <li className="color color-8-2" />
                                                        <li className="color color-8-3" />
                                                        <li className="color color-8-4" />
                                                        <li className="color color-8-5" />
                                                        <li className="color color-8-6" />
                                                        <li className="color color-8-7" />
                                                        <li className="color color-8-8" />
                                                        <li className="color color-8-9" />
                                                        <li className="color color-8-10" />
                                                        <li className="color color-8-11" />
                                                        <li className="color color-9-0" />
                                                        <li className="color color-9-1" />
                                                        <li className="color color-9-2" />
                                                        <li className="color color-9-3" />
                                                        <li className="color color-9-4" />
                                                        <li className="color color-9-5" />
                                                        <li className="color color-9-6" />
                                                        <li className="color color-9-7" />
                                                        <li className="color color-9-8" />
                                                        <li className="color color-9-9" />
                                                        <li className="color color-9-10" />
                                                        <li className="color color-9-11" />
                                                    </ul>
                                                </div>
                                                <i className="fa fa-times" />
                                            </div>
                                        </li>*/}
                                        <li><a><i className="fa fa-camera-retro" />Tin tức - lễ hội</a>
                                            <div className="be-popup">
                                                <h3 className="letf-menu-article">Galerry</h3>
                                                <form action="./" className="input-search">
                                                    <input type="text" required placeholder="Start typing to see list" />
                                                </form>
                                                <i className="fa fa-times" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="row _post-container_">
                                {arrAllPlace.map((e, i) =>
                                    <ListPlace place={e} key={i} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Home)