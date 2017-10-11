/**
 * Created by pphetra on 11/10/2017 AD.
 */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Group.css"

class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            groupName: props.groupName
        }
    }
    render() {
        return (
            <div className="row diseases">
                <div className="panel panel-default">
                    <div class="panel-heading">{this.state.groupName}</div>
                    <div className="panel-body">
                        {
                            this.state.data.map(({ id, name, numberOfCases }) => (
                                <div class="row disease-item">
                                        <Link to={`/province/${id}`} style={{width: '100%'}}>
                                            <div className="col-md-8 disease-name">{name}</div>
                                            <div className="col-md-4 disease-cases">{numberOfCases}</div>
                                        </Link>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Group