import * as React from 'react';
import { connect } from "react-redux"
import {Link} from "react-router-dom";
import Group from './Group';


class Groups extends React.Component {


    render() {
        const { groupA, groupB, groupC } = this.props;
        return (
            <div>
                <div className="page-header my-header">
                    <h2>Disease Detected</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Group data={groupA} groupName="Group A"/>
                        </div>
                        <div className="col-md-4">
                            <Group data={groupB} groupName="Group B"/>
                        </div>
                        <div className="col-md-4">
                            <Group data={groupC} groupName="Group C"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        groupA: state.diseaseStore.groupA,
        groupB: state.diseaseStore.groupB,
        groupC: state.diseaseStore.groupC,
    }
)

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Groups)
