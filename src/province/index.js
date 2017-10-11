/**
 * Created by pphetra on 11/10/2017 AD.
 */
/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import { connect } from "react-redux"

class ProvincePage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            diseaseId: props.match.params.id
        }
    }
    render() {
        return (
            <p>province page {this.state.diseaseId} </p>

        )
    }
}


const mapStateToProps = (state, ownProps) => (
    {
        provinces: state.diseaseStore.diseases[ownProps.match.params.id]
    }
)

const mapDispatchToProps = dispatch => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps())(ProvincePage)