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
                                        <th>Disease</th>
                                        <th>Province</th>
                                        <th># articles</th>
                                        <th>Date occured</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Disease1</td>
                                        <td>Province A</td>
                                        <td>2</td>
                                        <td>12/10/2017</td>
                                    </tr>
                                    <tr>
                                        <td>Disease2</td>
                                        <td>Province A</td>
                                        <td>1</td>
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