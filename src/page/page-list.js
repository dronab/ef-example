import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getList } from '../actions/page-list';
import CustomList from '../components/CustomPageList/custom-page-list';

import List from 'arui-feather/list';

class PageList extends Component {
    listItems = () => {
        const { pageList } = this.props;
        if (!pageList.load) {
            return [];
        }
        const items = pageList.peapole.map(person => ({ key: person.id, value: person.first_name }))
        return items;
    }

    componentDidMount() {
        const { getList } = this.props;
        getList();

        // Можно использовать промис, включая несколько запросов в массиве 
        // Promise.all([getList()]).then((item) => {
        //     // item[0] , item[1], ... item[x]
        //     // Можно выполнить дополнительные действия
        // }).catch(() => {
        // });
    }

    render() {
        const { pageList } = this.props;

        const spiner = (<div>Ждем данные</div>);
        const components = (
            <div>
                <List
                    items={this.listItems()}
                />
                <CustomList {...pageList} />
            </div>
        );

        return pageList.fetch ? spiner : components;
    }
}

export default connect(
    state => ({
        pageList: state.pageList
    }),
    {
        getList
    }
)(PageList)
