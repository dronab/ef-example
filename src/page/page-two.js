
import React, { Component } from 'react'
import { connect } from 'react-redux';

import Button from 'arui-feather/button';
import Label from 'arui-feather/label';
import Notification from 'arui-feather/notification';

import Simple from '../components/simple-component';

class PageTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        // Компоненты примонтированы - имитируем подгрузку данных
        setTimeout(
            () => this.setState({ visible: true }),
            5000
        );
    }

    render() {
        const { testStore, storFun } = this.props;
        const { textALL: { myJSONObject } } = testStore;

        return (
            <div>
                <Button view='extra' size={'m'} >Кнопка {storFun()}</Button>
                <Button view='extra' size={'m'} onClick={() => this.setState({ visible: !this.state.visible })}>Жмакни меня тоже</Button>
                <Notification
                    visible={this.state.visible}
                    status='ok'
                    offset={12}
                    stickTo='left'
                    title='Платёж отправлен'
                    onCloseTimeout={() => {
                        this.setState({ visible: false });
                    }}
                    onCloserClick={() => {
                        this.setState({ visible: false });
                    }}
                >
                    Платёж на сумму 150 000 ₽ для ИП Фридман М.М. отправлен
                </Notification>
                <Label size={'m'} isNoWrap={true}>
                    Текст пропсов с первой страницы: {myJSONObject}
                </Label>
                <br />
                {!this.state.visible &&
                    (<Label size={'m'} isNoWrap={true}>
                        Данные еще не пришли с сервера
                    </Label>)
                }
                <br /><br />
                <Simple text='Текст переданный в проперти' />
                <Simple text='Повторно передали' />
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
)(PageTwo)
