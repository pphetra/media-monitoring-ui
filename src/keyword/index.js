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
                            <h1 className="page-header">Keywords</h1>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Keyword</th>
                                    <th>Disease</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>MERS</td>
                                    <td>MERS</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Edit</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Delete</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <td>flu</td>
                                    <td>Influenza</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button bsStyle="info"><i className="fa fa-edit"/> Edit</Button>
                                            <Button bsStyle="danger"><i className="fa fa-trash-o"/> Delete</Button>
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