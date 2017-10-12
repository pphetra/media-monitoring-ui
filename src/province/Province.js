/**
 * Created by pphetra on 11/10/2017 AD.
 */
/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import "./Province.css"

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

    render() {
        const {diseases} = this.props;

        const {selectedProvinceIdx} = this.state;
        return (
            <div>
                <h2>Province Page {diseases.name}</h2>
                <div className="container">
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading col-md-3">Province Name</div>
                            <div className="panel-heading col-md-6">Contact Info</div>
                            <div className="panel-heading col-md-3">Number Cases</div>
                            <div className="panel-body">
                                {
                                    diseases.provinces.map((province, idx) => (
                                        <div className="row disease-item" onClick={this.handleClick.bind(this, idx)}
                                             key={idx}>
                                            <div className="col-md-3">{province.name}</div>
                                            <div className="col-md-6">{province.contactInfo}</div>
                                            <div className="col-md-3">{province.numberOfCases}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Provinces Detail</div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="row col-md-12 provinceInfo">
                                        <b>patientName</b>: {diseases.articles[selectedProvinceIdx].provinceName}</div>
                                    <div className="row  col-md-12 provinceInfo">
                                        <b>articleId</b>: {diseases.articles[selectedProvinceIdx].articleId}</div>
                                    <div className="row  col-md-12 provinceInfo">
                                        <b>headline</b>: {diseases.articles[selectedProvinceIdx].headline}</div>
                                    <div className="row  col-md-12 provinceInfo">
                                        <b>content</b>: {diseases.articles[selectedProvinceIdx].content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        diseases: state.diseaseStore.diseases[ownProps.match.params.id],
    }
)

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(ProvincePage)
