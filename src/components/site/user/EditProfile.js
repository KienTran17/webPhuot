import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserByUserName from '../../../api/user/getUserByUserName';
import editAvatar from '../../../api/user/editAvatar';
import getListPlaceFromUser from '../../../api/user/getListPlaceFromUser';
import changePassword from '../../../api/user/changePassword';
import changeBasicInfor from '../../../api/user/changeBasicInfor';
import changeAboutMe from '../../../api/user/changeAboutMe';
import ListPlaceUser from './ListPlaceUser';
import $ from 'jquery';
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, lstPlace: [], first_name: '', last_name: '', description: '', email: '', mobile: '', hobby: '' };
  }

  componentDidMount() {
    const token = getCookie('tk');
    getUserByUserName(token).then(user => {

      this.setState({
        user: user, first_name: user.first_name, last_name: user.last_name, email: user.email,
        mobile: user.mobile, description: user.description, hobby: user.hobby
      });
    });

  }

  handleFileUpload(e) {
    const token = getCookie('tk');
    const { dispatch } = this.props;
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    editAvatar(formData).then(res => {
      dispatch({ type: "USER", item: res })
    });
  }
  aboutMe() {
    const { dispatch } = this.props;
    const { hobby, description } = this.state;
    const token = getCookie('tk');
    changeAboutMe(token, hobby, description)
      .then(r => {
        if (r) {
          alert('Cập nhật thông tin thành công!');
          dispatch({ type: "USER", item: r })
        }
      })
      .catch(e => console.log('' + e))
  }

  basicInfor() {
    const { dispatch } = this.props;
    if (!this.state.mobile / 2) return alert('Vui lòng nhập lại số điện thoại!');
    changeBasicInfor(getCookie('tk'), this.state.mobile, this.state.first_name, this.state.last_name)
      .then(r => {
        if (r) {
          alert('Cập nhật thông tin thành công!');
          dispatch({ type: "USER", item: r })
        }
      })
  }
  password() {
    const { txtOldPass, txtNewPass, txtRepeatPass } = this.refs;
    if (txtNewPass.value === '' || txtNewPass.value === '' || txtRepeatPass.value === '') return alert('Vui Lòng Nhập Đầy Đủ Mật Khẩu!')
    if (txtNewPass.value.length < 6 || txtNewPass.value.length < 6 || txtRepeatPass.value.length < 6) return alert('Mật Khẩu Phải Lớn Hơn 6 Ký Tự')
    if (txtNewPass.value !== txtRepeatPass.value) return alert('Mật Khẩu Mới Không Trùng Khớp! Vui Lòng Xác Nhận Lại Mật Khẩu!')
    changePassword(getCookie('tk'), txtNewPass.value, txtOldPass.value)
      .then(r => {
        if (r) {
          alert('Đổi Thành Công');
          txtNewPass.value = "";
          txtNewPass.value = "";
          txtRepeatPass.value = "";
        }
      })
  }
  social() {

  }
  handleHobby(event) {
    this.setState({ hobby: event.target.value });
  }

  handleMobile(event) {
    this.setState({ mobile: event.target.value });
  }
  handleFirstName(event) {
    this.setState({ first_name: event.target.value });
  }
  handleLastName(event) {
    this.setState({ last_name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    var btnCust = '';
      $("#avatar-1").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="fa fa-trash-o"></i> ',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src=' + this.state.user.avatar + ' alt="Your Avatar" style="width:160px">',
        layoutTemplates: { main2: '{preview} ' + '  {browse}' },//{remove}
        allowedFileExtensions: ["jpg", "png", "gif", "jpeg"]
      });

    const user = this.state.user;
    return (
      <div id="content-block">
        <div className="container be-detail-container">
          <div className="row">
            <div className="col-xs-12 col-md-3 left-feild">
              <div className="be-vidget back-block">
                <a href="/profile" className="btn full color-1 size-1 hover-1"><i className="fa fa-chevron-left" />Quay Lại Trang Cá Nhân</a>
              </div>
              <div className="be-vidget hidden-xs hidden-sm" id="scrollspy">
                <h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="letf-menu-article">
                  Chọn Thông Tin
                </h3>
                <div style={{ fontSize: "10pt" }} className="creative_filds_block">
                  <ul className="ul nav">
                    <li><a id="basicInfor" href="#" >Thông Tin Cơ Bản</a></li>
                    <li><a id="password" href="#">Thay Đổi Mật Khẩu</a></li>
                    {/*<li><a id="social" href="#">Mạng Xã Hội Của Tôi</a></li>*/}
                    <li><a id="aboutMe" href="#">Vài Nét Về Tôi</a></li>
                  </ul>
                </div>
                {/*<a className="btn full color-1 size-1 hover-1 add_section"><i className="fa fa-plus" />add sections</a>	*/}
              </div>
            </div>
            <div className="col-xs-12 col-md-9 _editor-content_">
              <div className="affix-block" id="basic-information">
                <div id="tagBasic" className="be-large-post">
                  <form id="myForm" className="uploader" encType="multipart/form-data">
                    <div className="info-block style-2">
                      <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Thông Tin Cơ Bản</h3></div>
                    </div>
                    <div className="be-large-post-align">
                      <div className="be-change-ava">
                        <a className="be-ava-user style-2" >
                          <div className="kv-avatar center-block text-center" style={{ width: 200, height: 300 }}>
                            <input ref="file" style={{ marginTop: "0" }} id="avatar-1" name="avatar-1" type="file" className="file-loading" onChange={this.handleFileUpload.bind(this)} required />
                          </div>
                        </a>
                      </div>
                    </div>
                  </form>
                  {/*<div className="col-sm-4">
                    <div className="kv-avatar center-block text-center" style={{ width: 200, height: 300 }}>
                      <input id="avatar-1" name="avatar-1" type="file" className="file-loading" required />
                    </div>
                  </div>*/}
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group fg_icon focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Email</div>
                          <input className="form-input" type="text" value={this.state.email} disabled />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group fg_icon focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Số Điện Thoại</div>
                          <input className="form-input" type="text" onChange={this.handleMobile.bind(this)} value={this.state.mobile} />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group fg_icon focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Họ</div>
                          <input className="form-input" type="text" onChange={this.handleFirstName.bind(this)} value={this.state.first_name} />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Tên</div>
                          <input className="form-input" type="text" onChange={this.handleLastName.bind(this)} value={this.state.last_name} />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <a onClick={this.basicInfor.bind(this)} className="btn color-1 size-2 hover-1 btn-right">Lưu Thay Đổi</a>
                      </div>
                      {/*<div className="input-col col-xs-12 col-sm-6">
                        <div className="form-label">Country</div>
                        <div className="be-drop-down icon-none">
                          <span className="be-dropdown-content"> United Kingdom </span>
                          <ul className="drop-down-list">
                            <li><a>USA</a></li>
                            <li><a>India</a></li>
                            <li><a>Mexica</a></li>
                            <li><a>Russia</a></li>
                            <li><a>Italy</a></li>
                          </ul>
                        </div>
                      </div>*/}

                      {/*<div className="col-xs-12 col-sm-3">
                        <div className="be-drop-down color-2">
                          <i className="fa fa-picture-o" />
                          <span className="be-dropdown-content"> Call to action </span>
                          <ul className="drop-down-list" style={{ display: 'none', height: 208, paddingTop: 0, marginTop: 0, paddingBottom: 0, marginBottom: 0 }}>
                            <li><a>Featured</a></li>
                            <li><a>Most Appreciated</a></li>
                            <li><a>Most Viewed</a></li>
                            <li><a>Most Discussed</a></li>
                            <li><a>Most Recent</a></li>
                          </ul>
                        </div>
                      </div>*/}

                    </div>
                  </div>
                </div>
              </div>
              <div className="affix-block" id="edit-password">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Thay Đổi Mật Khẩu</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Nhập Mật Khẩu Củ</div>
                          <input ref="txtOldPass" style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Nhập Mật Khẩu củ" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Nhập Mật Khẩu Mới</div>
                          <input ref="txtNewPass" style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Nhập Mật Khẩu Mới" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Xác Nhận Lại Mật Khẩu</div>
                          <input ref="txtRepeatPass" style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Xác Nhận Lại Mật Khẩu" />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <a onClick={this.password.bind(this)} className="btn color-1 size-2 hover-1 btn-right">Lưu Thay Đổi</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="affix-block" id="on-the-web">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Mạng Xã Hội Của Tôi</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-1" href="#"><i className="fa fa-facebook" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// facebook.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-2" href="#"><i className="fa fa-twitter" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// twitter.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-3" href="#"><i className="fa fa-google-plus" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// googleplus.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-4" href="#"><i className="fa fa-pinterest-p" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// pinterest.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-5" href="#"><i className="fa fa-instagram" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// instagram.com/taylor" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="col-xs-12">
                    <a onClick={this.social.bind(this)} className="btn color-1 size-2 hover-1 btn-right">Lưu Thay Đổi</a>
                  </div>
                </div>*/}

              {/*</div>*/}
              <div className="affix-block" id="about-me">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Vài Nét Về Tôi</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      {/*<div className="input-col col-xs-12">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Section Title</div>
                          <input className="form-input" type="text" placeholder="About Me" />
                        </div>
                      </div>*/}
                      <div className="input-col col-xs-12 col-sm-12">
                        <div className="form-group fg_icon focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Sở Thích</div>
                          <input className="form-input" type="text" onChange={this.handleHobby.bind(this)} value={this.state.hobby} />
                        </div>
                      </div>
                      {/*<div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Sở Trường</div>
                          <input className="form-input" type="text" />
                        </div>
                      </div>*/}
                      <div className="input-col col-xs-12">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Giới Thiệu Về Tôi</div>
                          <textarea className="form-input" required onChange={this.handleDescription.bind(this)} value={this.state.description} />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <a onClick={this.aboutMe.bind(this)} className="btn color-1 size-2 hover-1 btn-right">Lưu Thay Đổi</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="affix-block" id="web-references">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 className="info-block-label">Web References</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-5">
                        <div className="form-group focus-2">
                          <div className="form-label">Link Title</div>
                          <input className="form-input" type="text" placeholder="Enter title" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-5">
                        <div className="form-group focus-2">
                          <div className="form-label">Link descriprion</div>
                          <input className="form-input" type="text" placeholder="Enter descriprion" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <a href="#" className="btn full btn-input color-1 size-4 hover-1">add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/*<a className="btn full color-1 size-1 hover-1 add_section"><i className="fa fa-plus" />add sections</a>																				*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(EditProfile)