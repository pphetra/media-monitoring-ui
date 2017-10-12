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

class Article extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articleId: props.match.params.id,
        }
    }


    render() {
        const { article, diseaseName } = this.props;
        const textToHighlight = article.content;
        console.log(article);
        const searchText = article.detected.map(o => {
            return `${o.word}:${o.type}`
        });
        searchText.push(`${article.provinceName}:place`);

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
                                <div className="panel-heading headline">Data</div>
                                <div className="panel-body content">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Disease</td>
                                                <td><input type="text" value={diseaseName}/></td>
                                            </tr>
                                            <tr>
                                                <td>Province</td>
                                                <td><input type="text" value={article.provinceName}/></td>
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

const mapStateToProps = (state, ownProps) => {
    const articleId = ownProps.match.params.id;
    const provinceName = ownProps.match.params.provinceName;
    const diseaseId = ownProps.match.params.diseaseId;

    const disease = state.diseaseStore.diseases[diseaseId];
    const province = disease.provinces.find((p) => {
        return p.name === provinceName
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
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Article)