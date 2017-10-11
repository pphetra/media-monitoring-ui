import * as React from 'react';
import { connect } from "react-redux"
import {Link} from "react-router-dom";
import Group from './Group';
import Header from '../header';
import './Groups.css'

class Groups extends React.Component {


    render() {
        const { groupA, groupB, groupC } = this.props;
        return (
            <div>
                <Header/>

                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Detected Diseases</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Group data={groupA} groupName="Group A" cssName="group_a"/>
                        </div>
                        <div className="col-md-4">
                            <Group data={groupB} groupName="Group B" cssName="group_b"/>
                        </div>
                        <div className="col-md-4">
                            <Group data={groupC} groupName="Group C" cssName="group_c"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        groupA: state.groupStore.groupA,
        groupB: state.groupStore.groupB,
        groupC: state.groupStore.groupC,
    }
)

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Groups)
