/**
 * Created by pphetra on 11/10/2017 AD.
 */
/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import "./Province.css"
import {Link} from "react-router-dom";
import Header from "../header";
var FontAwesome = require('react-fontawesome');

class ProvincePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diseaseId: props.match.params.id,
            selectedProvinceIdx: 0,
        }
    }

    handleClick(idx, e) {
        console.log(idx, e)
        this.setState({
            selectedProvinceIdx: idx,
        })
    }

    renderStatus(articleId) {
        const status = localStorage.getItem(articleId)
        console.log(status)
        if (status === null || status === 0) {
            return (
                <span></span>
            )
        } else if (status == -1) {
            return (
                <FontAwesome
                    className='super-crazy-colors'
                    name='remove'
                    size='2x'
                    style={{
                        color: 'rgba(255, 0, 0, 1)'
                    }}

                />
            )

        } else if (status == 1) {
            return (
                <FontAwesome
                    className='super-crazy-colors'
                    name='check'
                    size='2x'
                    style={{
                        color: 'rgba(0, 255, 0, 1)'
                    }}

                />
            )
        } else {
            return (<span>hello</span>)
        }
    }

    render() {
        const {diseases} = this.props;

        const {selectedProvinceIdx} = this.state;

        return (
            <div>
                <Header/>
                <h2></h2>
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">{diseases.name}</h1>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tên Tỉnh</th>
                                        <th>Thông tin liên hệ</th>
                                        <th>Số lượng bài viết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    diseases.provinces.map((province, idx) => {
                                        var cssName = ""
                                        if (idx == selectedProvinceIdx) {
                                            cssName = "selected"
                                        }
                                        return (<tr className={'disease-item ' + cssName }
                                                    onClick={this.handleClick.bind(this, idx)}
                                                    key={idx}>
                                            <td >{province.name}</td>
                                            <td >{province.contactInfo}</td>
                                            <td >{province.numberOfCases}</td>
                                        </tr>)
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tiêu đề bài viết</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    diseases.provinces[selectedProvinceIdx].articles.map((article, index) => (
                                          <tr className="disease-item">
                                              <td>
                                                  <Link to={`/article/${article.articleId}/${article.provinceName}/${this.props.match.params.id}`} style={{width: '100%'}}>
                                                    {article.headline}
                                                  </Link>
                                              </td>
                                              <td>
                                                  { this.renderStatus(article.articleId) }
                                              </td>
                                          </tr>
                                    ))
                                }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        diseases: state.diseaseStore.diseases[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvincePage)
