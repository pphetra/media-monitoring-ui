/**
 * Created by pphetra on 11/10/2017 AD.
 */
/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import { connect } from "react-redux"
import "./Province.css"

class ProvincePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diseaseId: props.match.params.id
        }
    }

    render() {
        const { diseases } = this.props;
        console.log("log",  diseases);
        return (
            <div>
                <div>province name page  </div>
                <div className="panel-body">
                    {
                        diseases.provinces.map(({ name, numberOfCases }) => (
                            <div className="row disease-item">
                                <div className="col-md-3 disease-name">{name}</div>
                                <div className="col-md-4 disease-cases">{numberOfCases}</div>
                            </div>
                        ))
                    }
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
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ProvincePage)
