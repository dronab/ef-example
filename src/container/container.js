import React, { Component } from 'react'
import { connect } from 'react-redux';

import Button from 'arui-feather/button';

import AddCotegory from './add-cot';
import TextAll from './text-all';

class ContainerApp extends Component {
    render() {
        const { testStore } = this.props;
        const { textALL: { myJSONObject } } = testStore;

        return (
            <div>
                <AddCotegory />
                <TextAll />
                <Button view='extra' size={'m'}>Эта кнопка в контейнере {myJSONObject}</Button>
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    {
    }
)(ContainerApp)
