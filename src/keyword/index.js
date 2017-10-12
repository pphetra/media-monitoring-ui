/**
 * Created by pphetra on 12/10/2017 AD.
 */
import React, {Component} from 'react';
import Header from '../header';
import {Button, ButtonToolbar} from "react-bootstrap";


class Keywords extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Từ khóa</h1>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Từ khóa</th>
                                    <th>Bệnh</th>
                                    <th>Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Sốt xuất huyết</td>
                                    <td>Sốt xuất huyết</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Sửa</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Xóa</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cúm</td>
                                    <td>Cúm</td>
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

export default Keywords