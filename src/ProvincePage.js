/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';

class ProvincePage extends Component {
    constructor(props) {
        super(props)
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

export default ProvincePage