/**
 * Created by pphetra on 12/10/2017 AD.
 */
import React, {Component} from "react";
import Header from "../header";
import {Button, ButtonToolbar} from "react-bootstrap";


class Sites extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Các trang cần theo dõi</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Tên</th>
                                    <th>Địa chỉ</th>
                                    <th>Lần chỉnh sửa cuối</th>
                                    <th>Thao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>VnExpress</td>
                                    <td>https://vnexpress.net/</td>
                                    <td>2017-10-10 10:00:23</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dân trí</td>
                                    <td>http://dantri.com.vn//</td>
                                    <td>2017-10-10 18:00:05</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vietnamnet</td>
                                    <td>http://vietnamnet.vn/</td>
                                    <td>2017-10-11 18:00:05</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tuổi trẻ</td>
                                    <td>http://tuoitre.vn/</td>
                                    <td>2017-10-11 15:00:05</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Thanh niên</td>
                                    <td>http://www.thanhnien.com.vn/</td>
                                    <td>2017-10-11 15:00:05</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sites