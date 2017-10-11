/**
 * Created by pphetra on 11/10/2017 AD.
 */
import latinize from 'latinize'
import React, { Component } from 'react';
import Highlighter from './Highlighter'
import './Article.css';

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: 'hi',
            searchText: [
                '31 August and 26 September 2017:time',
                'Saudi Arabia:place',
                'MERS:disease',
            ],
            textToHighlight: `Between 31 August and 26 September 2017, the national IHR focal point of Saudi Arabia reported nine additional cases of Middle East Respiratory Syndrome (MERS), including four deaths. In addition, four deaths from previously reported cases were reported.`,
        }
    }


    render() {
        const { searchText, textToHighlight } = this.state

        return (
            <div>
                <Highlighter
                    highlightClassName='Highlight'
                    searchWords={searchText}
                    textToHighlight={textToHighlight}
                ></Highlighter>
            </div>
        )
    }
}

export default Article