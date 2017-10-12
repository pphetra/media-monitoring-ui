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
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
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