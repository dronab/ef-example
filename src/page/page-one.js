import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'arui-feather/button';
import Label from 'arui-feather/label';
import Collapse from 'arui-feather/collapse';
import Paragraph from 'arui-feather/paragraph';

import FirstButton from '../components/MySuperButton/firstButton';
import SimpleButton from '../components/MySuperButton/simpleButton';
import ContainerApp from '../container/container';

import '../App.css';

const buttons = [
  { size: 'm', textButton: 'йа кнопко' },
  { size: 'l', textButton: 'кликни меня' }
];

class PageOne extends Component {
  myFunction = () => {
    this.setState({
      field: 'Ого новый текст',
      showText: true
    })
  }

  handleExpandedChange = (isExpanded) => {
    this.setState({ isExpanded });
  }

  constructor(props) {
    super(props)
    this.state = {
      field: 'Текст по умолчанию',
      showText: false,
      isExpanded: false
    }
  }

  render() {
    const { field, isExpanded } = this.state;

    const { testStore } = this.props;
    const { textALL: { myJSONObject } } = testStore;

    return (
      <div className='App'>
        <SimpleButton />
        <FirstButton
          myProperty={field}
          allParametrs={this.state}
        />
        <Button view='extra' size={'m'} onClick={() => this.myFunction()} >Стрелочная функция</Button>
        <div>
          <div className='row'>
            {
              buttons.map(({ size, textButton }) => (
                <div className='column' key={size}>
                  <Button view='extra' size={size} onClick={this.myFunction} >{`${textButton}`}</Button>
                </div>
              ))
            }
          </div>
        </div>
        <br />
        <ContainerApp />
        <Label size={'m'} isNoWrap={true}>
          Компонент за пределами контейнера это: {myJSONObject} данные введеные в компонент находящийся внутри контейнера
        </Label>
        <br /><br /><br />
        <Collapse
          collapsedLabel='Разверни меня'
          expandedLabel='Скрыть'
          isExpanded={isExpanded}
          onExpandedChange={this.handleExpandedChange}
        >
          <Paragraph>
            Просто контент
          </Paragraph>
        </Collapse>
        <br /><br /><br />
      </div>
    );
  }

}

export default connect(
  state => ({
    testStore: state
  }),
  {
  }
)(PageOne)
