import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Input, List, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import Board from '../../components/Board';
import Layout from '../../layout';
import IconSearch from '../../assets/img/search.svg';
import * as Styled from '../../assets/styled/views/HomeStyled';

import { PokeApiContext } from '../../contexts/PokeApiContext';

interface IResponse {
  name: string;
  url: string;
  count: number;
}

interface IPokemon {
  name: string;
  id: string;
}

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
}

const Home = (props: IProps) => {
  const [filter, setFilter] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [pokemonFilter, setPokemonFilter] = useState<IPokemon[]>([]);

  const { baseApi } = useContext(PokeApiContext);
  const history = useHistory();
  const pageSize = 20;
  const pageCurrent = parseInt(props.match.params.id, 10) || 1;

  const onGet = useCallback(async () => {
    const offSet = pageCurrent * pageSize - pageSize;
    const request = `${baseApi}?offset=${offSet}&limit=${pageSize}`;

    Axios.get(request).then((res) => {
      const arr: IPokemon[] = [];
      res.data.results.map((item: IResponse) => {
        return arr.push({
          name: item.name,
          id:
            item.url
              .split('/')
              .reverse()
              .find((str: string) => Number(str)) || '',
        });
      });
      setPokemonList(arr);
      setTotalCount(res.data.count);
    });
  }, [baseApi, pageCurrent, pageSize]);

  const renderListBoards = () => {
    return (
      <Styled.Items>
        <List
          className="list-items"
          grid={{
            gutter: 10,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 5,
          }}
          dataSource={filter ? pokemonFilter : pokemonList}
          renderItem={(item: IPokemon) => (
            <List.Item>
              <Board key={item.id} name={item.name} id={item.id} />
            </List.Item>
          )}
        />
      </Styled.Items>
    );
  };

  const searchCards = (val: string) => {
    let arr: IPokemon[] = [];
    const isNumber = Number(val);

    if (val) {
      arr = pokemonList.filter((item) => {
        if (isNumber) return item.id.includes(val);
        return item.name.toLowerCase().includes(val.toLowerCase());
      });

      if (!isNumber) {
        arr.sort((x, y) => {
          if (x.name > y.name) return 1;
          if (x.name < y.name) return -1;
          return 0;
        });
      }
    }

    setFilter(val);
    setPokemonFilter(arr);
  };

  const renderAutoComplete = () => {
    const IconComp = () => <img src={IconSearch} alt="search" />;
    return (
      <Styled.Input>
        <Input
          size="large"
          className="input-search"
          value={filter}
          prefix={<IconComp />}
          onChange={(e) => searchCards(e.target.value)}
          placeholder="What Pokémon are you looking for?"
        />
      </Styled.Input>
    );
  };

  const onPagination = (page: number) => history.push(`/page/${page}`);

  const render = () => {
    return (
      <Layout
        header={false}
        title="Pokédex"
        subtitle="Search for Pokémon by name or using the National Pokédex number."
      >
        {renderAutoComplete()}
        <div>
          {renderListBoards()}
          <Styled.Pagination>
            <Pagination
              responsive={true}
              hideOnSinglePage={true}
              showSizeChanger={false}
              onChange={onPagination}
              current={pageCurrent}
              pageSize={pageSize}
              total={totalCount}
            />
          </Styled.Pagination>
        </div>
      </Layout>
    );
  };

  useEffect(() => {
    onGet();
  }, [onGet]);

  return render();
};

export default Home;
