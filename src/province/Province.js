/**
 * Created by pphetra on 11/10/2017 AD.
 */
/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import "./Province.css"
import diseaseStore from "../store/Disease";

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
        const articles = diseases.provinces[selectedProvinceIdx].articles
        console.log("diseases ", articles)
        console.log("selectedProvinceIdx",selectedProvinceIdx)
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
                            <div className="panel-heading">List of articles</div>
                            <div className="panel-body">{articles.map(()=>{
                                <div>dfasdf</div>
                            })}

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
