/**
 * Created by pphetra on 12/10/2017 AD.
 */

import React, {Component} from "react";
import {Button, ButtonToolbar} from "react-bootstrap";
import Header from '../header';

class Report extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Báo cáo chung</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tên Bệnh</th>
                                        <th>Tỉnh</th>
                                        <th>Số lượng bài báo</th>
                                        <th>Ngày</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sốt xuất huyết</td>
                                        <td>Hà Nội</td>
                                        <td>68</td>
                                        <td>12/10/2017</td>
                                    </tr>
                                    <tr>
                                        <td>Tiêu chảy</td>
                                        <td>Hòa Bình</td>
                                        <td>15</td>
                                        <td>11/10/2017</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ButtonToolbar>
                                <Button bsStyle="success">Xác nhận</Button>
                            </ButtonToolbar>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Report