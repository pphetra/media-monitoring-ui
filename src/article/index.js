/**
 * Created by pphetra on 11/10/2017 AD.
 */
import latinize from 'latinize'
import React, { Component } from 'react';
import {connect} from "react-redux"

import Highlighter from './Highlighter'
import './Article.css';
import Header from '../header';
import {Button, ButtonToolbar} from "react-bootstrap";
import { Route } from 'react-router-dom'

var dateFormat = require('dateformat');

class Article extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articleId: props.match.params.id,
        }

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
    }

    formatTime(time) {
        const d = new Date(time);
        return dateFormat(d, "dd/mm/yyyy");
    }

    accept(history) {
        return () => {
            const articleId = this.props.match.params.id;
            const provinceName = this.props.match.params.provinceName;
            const diseaseId = this.props.match.params.diseaseId;

            this.props.accept(
                articleId,
                provinceName,
                diseaseId
            );

            history.push('/province/' + diseaseId)
        }

    }

    reject(history) {
        return () => {
            const articleId = this.props.match.params.id;
            const provinceName = this.props.match.params.provinceName;
            const diseaseId = this.props.match.params.diseaseId;

            this.props.reject(
                articleId,
                provinceName,
                diseaseId
            );
            history.push('/province/' + diseaseId)
        }


    }


    render() {
        const { article, diseaseName } = this.props;
        const textToHighlight = article.content;
        const searchText = article.detected.map(o => {
            return `${o.word}:${o.type}`
        });
        searchText.push(`${article.provinceName}:place`);
        searchText.push(`${this.formatTime(article.time)}:time`);
        searchText.push(`${diseaseName}:disease`);

        return (

            <div >
                <Header/>

                <div id="page-wrapper">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">{article.url}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="panel panel-default">
                                <div className="panel-heading headline">{article.headline}</div>
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
                                <div className="panel-heading headline">Dữ liệu</div>
                                <div className="panel-body content">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Bệnh</td>
                                                <td><input type="text" value={diseaseName}/></td>
                                            </tr>
                                            <tr>
                                                <td>Tỉnh</td>
                                                <td><input type="text" value={article.provinceName}/></td>
                                            </tr>
                                            <tr>
                                                <td>Thời gian</td>
                                                <td><input type="text" value={this.formatTime(article.time)}/></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <ButtonToolbar>
                                        <Route render={({ history}) => (
                                            <Button bsStyle="success" onClick={this.accept(history)}>Duyệt</Button>

                                        )} />
                                        <Route render={({ history}) => (
                                            <Button bsStyle="danger" onClick={this.reject(history)}>Từ chối</Button>
                                        )} />

                                    </ButtonToolbar>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const articleId = ownProps.match.params.id;
    const provinceName = ownProps.match.params.provinceName;
    const diseaseId = ownProps.match.params.diseaseId;

    const disease = state.diseaseStore.diseases[diseaseId];
    const province = disease.provinces.find((p) => {
        return p.name == provinceName
    })
    const article = province.articles.find((a) => {
        return a.articleId == articleId
    })
    return {
        article: article,
        diseaseName: disease.name,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        accept: (articleId, provinceName, diseaseId) => {
            console.log('accept');
            dispatch({
                type: 'accept',
                articleId: articleId,
                provinceName: provinceName,
                diseaseId: diseaseId,
            })
        },
        reject: (articleId, provinceName, diseaseId) => {
            dispatch({
                type: 'reject',
                articleId: articleId,
                provinceName: provinceName,
                diseaseId: diseaseId,
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Article)