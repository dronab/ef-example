
import React, { Component } from 'react'
import Button from 'arui-feather/button';
import Label from 'arui-feather/label';

export default class FirstButton extends Component {
    myDiv = () => {
        return (
            <Label size={'m'} isNoWrap={true}>
                Просто еще один вариант
            </Label>
        )
    }

    render() {
        const { myProperty, allParametrs } = this.props;

        return (
            <div>
                <Button view='extra' size={'m'}>Кнопка реализованная в классе</Button>
                <Button view='extra' size={'m'}>{myProperty}</Button>
                {allParametrs.showText &&
                    <div>
                        { this.myDiv() } <br />
                        <Label size={'m'} isNoWrap={true}>
                        Просто текст - {myProperty}
                        </Label>
                    </div>
                }
            </div>
        )
    }
}
