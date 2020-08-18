import React from 'react'
import Button from 'arui-feather/button';
import Label from 'arui-feather/label';

const myStyles = {
    width: '500px',
    height: '100px'
};

export default function simpleButton() {
    return (
        <div style={ myStyles }>
            <Button size={'m'}>Кнопка, простой компонент</Button>
            <Label size={'m'} isNoWrap={true}>
                Просто текст.
            </Label>
        </div>
    )
}

