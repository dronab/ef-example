import React, { Component } from 'react'
import { connect } from 'react-redux';

import Input from 'arui-feather/input';

import { addTextToStore } from '../actions/cotegory';

class TextAll extends Component {
    render() {
        const { addTextToStore } = this.props;

        return (
            <div>
                <Input
                    placeholder='Вводим текст для отображения'
                    view='filled'
                    size='m'
                    width='available'
                    onChange={(e) => addTextToStore(e) }
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    {
        addTextToStore
    }
)(TextAll)
