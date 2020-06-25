import React from 'react';
import { useHistory } from 'react-router-dom';

import { List, Pagination } from 'antd';
import Board from '../../components/Board';
import { Items, Paginate } from '../../assets/styled/views/HomeStyled';

interface IPokemon {
  name: string;
  id: string;
}

interface IProps {
  pageCurrent: number;
  pageSize: number;
  totalCount: number;
  pokemonList: IPokemon[];
}

const ListPokemon = (props: IProps) => {
  const { totalCount, pageCurrent, pageSize, pokemonList } = props;
  const history = useHistory();
  const gridList = {
    gutter: 10,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 5,
  };

  const changePage = (page: number) => history.push(`/page/${page}`);

  const renderItem = (item: IPokemon) => (
    <List.Item>
      <Board key={item.id} name={item.name} id={item.id} />
    </List.Item>
  );

  const renderList = (
    <>
      <Items>
        <List
          className="list-items"
          grid={gridList}
          dataSource={pokemonList}
          renderItem={renderItem}
        />
      </Items>
      <Paginate>
        <Pagination
          responsive={true}
          hideOnSinglePage={true}
          showSizeChanger={false}
          onChange={changePage}
          current={pageCurrent}
          pageSize={pageSize}
          total={totalCount}
        />
      </Paginate>
    </>
  );

  return renderList;
};

export default React.memo(ListPokemon);
