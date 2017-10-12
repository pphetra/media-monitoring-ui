/**
 * Created by pphetra on 11/10/2017 AD.
 */
import latinize from 'latinize'
import React, { Component } from 'react';
import Highlighter from './Highlighter'
import './Article.css';
import Header from '../header';
import {Button, ButtonToolbar} from "react-bootstrap";

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: 'hi',
            searchText: [
                '31 August and 26 September 2017:time',
                'Saudi Arabia:place',
                'MERS:disease',
            ],
            textToHighlight: `Between 31 August and 26 September 2017, the national IHR focal point of Saudi Arabia reported nine additional cases of Middle East Respiratory Syndrome (MERS), including four deaths. In addition, four deaths from previously reported cases were reported.`,
        }
    }


    render() {
        const { searchText, textToHighlight } = this.state

        return (

            <div >
                <Header/>

                <div id="page-wrapper">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">http://news.vn/article/2</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="panel panel-default">
                                <div className="panel-heading headline">some headline go here.</div>
                                <div className="panel-body content">
                                    <Highlighter
                                        highlightClassName='Highlight'
                                        searchWords={searchText}
                                        textToHighlight={textToHighlight}
                                    ></Highlighter>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading headline">Data</div>
                                <div className="panel-body content">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Disease</td>
                                                <td><input type="text"/></td>
                                            </tr>
                                            <tr>
                                                <td>Province</td>
                                                <td><input type="text"/></td>
                                            </tr>
                                            <tr>
                                                <td>Time</td>
                                                <td><input type="text"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ButtonToolbar>
                                <Button bsStyle="success">Accept</Button>
                                <Button bsStyle="danger">Reject</Button>
                            </ButtonToolbar>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Article