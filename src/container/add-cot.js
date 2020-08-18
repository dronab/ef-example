import React, { Component } from 'react'
import { connect } from 'react-redux';

import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Select from 'arui-feather/select';

import { addCot } from '../actions/cotegory';

class AddCotegory extends Component {
    options = () => {
        const { testStore: { category } } = this.props;
        if (category) {
            return category.map(item => ({ value: item.value, text: item.text }))
        }
        return []
    }

    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }

    render() {
        const { addCot } = this.props;
        const { inputText } = this.state;
        return (
            <div>
                <Input
                    placeholder='Введите что-нибудь уникальное'
                    view='filled'
                    size='m'
                    width='available'
                    onChange={(e) => this.setState({ inputText: e })}
                />
                <Button view='extra'
                    size={'m'}
                    onClick={() => addCot(inputText, inputText)}>
                    Нажать чтобы добавить
                </Button>
                <Select
                    size={'m'}
                    mode='radio'
                    options={this.options()}
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
        addCot
    }
)(AddCotegory)
