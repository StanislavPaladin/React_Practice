import React from 'react';
import MyInput from './UI/inputs/MyInput';
import MySelect from './UI/select/MySelect';
const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
          <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder={'search by title'}
          />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка'
        options= {[{value: 'title', name: 'По названию'}, {value: 'name', name: 'По описанию'} ]}
        />
        </div>
    );
};

export default PostFilter;