import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllCity from '../../../api/place/getAllCity';
import getAllWard from '../../../api/place/getAllWard';
import insertPlace from '../../../api/user/insertPlace';
import $ from 'jquery';
import './../../../../public/asset/js/fileinput';
//import './../../../../public/asset/css/fileinput.css';
import './../../../../public/asset/js/fileinput.min';
//import './../../../../public/asset/js/locales/fr';
// import './../../../../public/asset/js/locales/es';
// import './../../../../public/asset/themes/explorer/theme';
//import './../../../../public/asset/css/fileinput.min.css';
import './../../../../public/asset/js/bootstrap_modal.min';

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class CreatePlace extends Component {
    constructor(props) {
        super(props);
        this.state = { city: [], ward: [], wardCommon: [] };
    }
    componentDidMount() {

        $('#btnSentPlace').on('click', () => {
            var name = document.getElementById('txtNamePlace').value;
            var valName = document.getElementById('valName');
            var address = document.getElementById('txtAddress').value;
            var valAddress = document.getElementById('valAddress');
            var desc = document.getElementById('editor1').value;
            var valDesc = document.getElementById('valDesc');
            var cbClaimb = document.getElementById('cbClaimb').value;
            var seeView = document.getElementById('seeView').value;
            var cbTreckking = document.getElementById('cbTreckking').value;
            var camping = document.getElementById('camping').value;
            var city = document.getElementById('ddlCity').value;
            var valCity = document.getElementById('valCity');
            var ward = document.getElementById('ddlProvinces').value;
            if (name === "") {
                valName.innerHTML = "Nhập tên địa điểm"
                $('html, body').animate({ scrollTop: $('#txtNamePlace').offset().top - 80 }, 1);
                return false;
            }
            else
                if (address === "") {
                    valName.innerHTML = "";
                    valAddress.innerHTML = "Nhập địa chỉ";
                    $('html, body').animate({ scrollTop: $('#txtAddress').offset().top - 80 }, 1);
                    return false;
                }
                else
                    if (city === '0' || ward === '0') {
                        valName.innerHTML = "";
                        valAddress.innerHTML = "";
                        valCity.innerHTML = "Chọn Thành phố/ Tỉnh sau đó chọn Quận/Huyện";
                        $('html, body').animate({ scrollTop: $('#ddlCity').offset().top - 80 }, 1);
                        return false;
                    }
                    // else
                    //     if (desc === "") {
                    //         valName.innerHTML = "";
                    //         valAddress.innerHTML = "";
                    //         valCity.innerHTML = "";
                    //         valDesc.innerHTML = "Nhập mô tả địa điểm";
                    //         $('html, body').animate({ scrollTop: $('#valDesc').offset().top - 300 }, 1);
                    //         return false;
                    //     }
                    else
                        return alert(`Cám ơn những chia sẽ của bạn!  Chúc bạn có những hành trình phượt thật là thú vị và khó quên nhé ^^`);
        })
        $('#file-3').fileinput({
            showUpload: false,
            showCaption: false,
            browseClass: "btn btn-primary btn-lg",
            allowedFileExtensions: ["jpg", "png", "gif"],
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            overwriteInitial: false,
            initialPreviewAsData: true
        });
        CKEDITOR.replace('editor1');
        getAllCity().then(city => this.setState({ city }));
        getAllWard().then(ward => this.setState({ ward, wardCommon: ward }));

    }
    selectCity(event) {
        const cityId = event.target.value;
        this.setState({ ward: this.state.wardCommon.filter(e => e.city_id == cityId) });

    }
    submit(e) {
        e.preventDefault();
        var form = document.getElementById("myForm");
        var formData = new FormData(form);
        formData.append('txtDes',CKEDITOR.instances['editor1'].getData());
       const token = getCookie('tk');
        //console.log(token)
        formData.append('token',token);
        const { dispatch } = this.props;
        insertPlace(formData).then(r => {
            if (r) window.location= '/';
            else alert('Them that bai!');
        })
    }
    render() {
        return (
            <div id="content-block">
                <div className="container be-detail-container">
                    <form id="myForm" className="form-horizontal" encType="multipart/form-data">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 left-feild">
                                <div style={{ backgroundColor: 'rgb(233, 246, 255)' }} className="container">
                                    <div style={{ textAlign: 'center' }} className="header-page">
                                        <br />
                                        <span>
                                            <h2><i className="fa fa-map-signs" /> THÊM ĐỊA ĐIỂM</h2>
                                            <span style={{ fontStyle: 'italic' }}>Những địa điểm - cảnh đẹp bạn đã khám phá chưa có trên ĐiPhượt.com ? Cùng nhau chia sẻ nào!</span>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="col-xs-12 col-md-10">
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Tên địa điểm</label>
                                            <div className="col-sm-9">
                                                <input ref="txtNamePlace" required="Nhập tên địa điểm" maxLength={100} id="txtNamePlace" type="text" className="form-control" name="txtNamePlace" placeholder="Tên địa điểm" />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valName" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Loại hình phượt</label>
                                            <div className="col-sm-9">
                                                <div className="form-checkbox">
                                                    <label className="checkbox-inline">
                                                        <input ref="cbTreckking" id="cbTreckking" name="cbTreckking" type="checkbox" />Treckking
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input ref="camping" id="camping" name="camping" type="checkbox" />Cắm trại
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input ref="seeView" id="seeView" name="seeView" type="checkbox" />Ngắm cảnh
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input ref="cbClaimb" id="cbClaimb" name="cbClaimb" type="checkbox" />Leo núi
                          </label>
                                                </div>
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valCheckbox" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Địa chỉ</label>
                                            <div className="col-sm-9">
                                                <input ref="txtAddress" maxLength={100} required="Nhập địa chỉ" id="txtAddress" type="text" className="form-control" name="txtAddress" placeholder="Địa chỉ" />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valAddress" />
                                                <input placeholder="Search địa điểm" id="input" type="text" className="col-sm-4" style={{ fontFfamily: "Comic Sans MS, cursive, sans-serif", fontSize: "13pt", margin: "10px", border: "1px solid transparent", borderRadius: "2px 0 0 2px", boxSizing: "border-box" }}
                                                />
                                                <br />
                                            </div>
                                            <div className="row">
                                                <label htmlFor="inputPassword" className="col-sm-3 control-label">Tỉnh thành</label>
                                                <div className="col-sm-2">
                                                    <select ref="cityId" onChange={this.selectCity.bind(this)} id="ddlCity" name="cityId" className="content  control-label">
                                                        <option id="cityFirst" value={0}>Tỉnh/ Thành Phố</option>
                                                        {this.state.city.map((e, i) =>
                                                            <option key={i} value={e.id}>{e.name}</option>
                                                        )}
                                                    </select>
                                                    <br />
                                                </div>
                                                <br />
                                                <div className="col-sm-2">
                                                    <select ref="provinceId" id="ddlProvinces" name="provinceId" className="content  control-label">
                                                        <option value={0}>Quận/ Huyện</option>
                                                        {this.state.ward.map((e, i) =>
                                                            <option key={i} value={e.id}>{e.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valCity" />
                                            </div>
                                            <br />
                                            <label className="col-sm-3 control-label">Map</label>
                                            <div className="col-sm-9" id="map" style={{ marginBottom: 20, height: 300 }}>
                                            </div>
                                            <label htmlFor="inputPassword" className="col-sm-3 control-label">Vị trí tọa độ</label>
                                            <div className="col-sm-4">
                                                <input ref="lat" className="form-control" name="lat" required id="lat" disabled type="text" placeholder="latidude" />
                                            </div>
                                            <div className="col-sm-4">
                                                <input ref="lng" className="form-control" name="lng" required id="lng" disabled type="text" placeholder="longitude" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Mô tả địa điểm</label>
                                            <div className="col-sm-9">
                                                <textarea ref="txtDesPlace" id="editor1" rows="10" cols="80" required="Nhập mô tả địa điểm" className="form-control" name="txtDesPlace" placeholder="Mô tả địa điểm" defaultValue={""} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valDesc" />
                                            </div>
                                            <label className="col-sm-3" />
                                            <h4 className="col-sm-9 " style={{ marginBottom: 10, textAlign: 'center', color: 'black', fontStyle: 'italic', fontWeight: 'bold' }} id="valAddress">
                                                Bạn hãy chọn những hình ảnh đẹp mà bạn ăn ý nhất để upload nhé!
                      </h4>
                                            {/*<form id="myForm" encType="multipart/form-data">*/}
                                            <label className="col-sm-3 control-label">Thêm hình ảnh</label>
                                            <div id="addFile" className="col-sm-9">
                                                <input id="file-3" name="image" type="file" name="image" multiple />
                                                <br />
                                            </div>
                                            {/*</form>*/}
                                            <div style={{ marginBottom: 10, textAlign: 'right' }} className="col-sm-12">
                                                <button onClick={this.submit.bind(this)} className="btn color-1 size-1 hover-1" id="btnSentPlace">Gửi bài</button>
                                                <a style={{ marginLeft: 10 }} className="btn color-3 size-1 hover-5" href="../">Thoát</a>
                                                <br />
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*// <div class="col-xs-12 col-md-8">
          //   aksdflsad
          // </div>*/}
                        </div>

                    </form>
                </div>

            </div>
        );
    }

}
export default connect(state => ({ isAuthen: state.isAuthen }))(CreatePlace)