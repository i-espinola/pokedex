import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Input } from 'antd';
import Axios from 'axios';

// import Board from '../../components/Board';
import Layout from '../../layout';
import CatchPage from '../../components/Catch';
import ListPokemon from './ListPokemon';
import IconFilter from '../../assets/img/search.svg';
import * as Styled from '../../assets/styled/views/HomeStyled';

import { PokeApiContext } from '../../contexts/PokeApiContext';

interface IResponse {
  name: string;
  url: string;
  count: number;
}

export interface IPokemon {
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
  const [apiCatch, setApiCatch] = useState(false);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [pokemonFilter, setPokemonFilter] = useState<IPokemon[]>([]);
  const pageCurrent = parseInt(props.match.params.id, 10) || 1;
  const { baseApi } = useContext(PokeApiContext);
  const pageSize = 20;

  const onGet = useCallback(async () => {
    const offSet = pageCurrent * pageSize - pageSize;
    const request = `${baseApi}?offset=${offSet}&limit=${pageSize}`;
    const arr: IPokemon[] = [];

    Axios.get(request)
      .then((res) => {
        res.data.results.map((item: IResponse) => {
          const { url, name } = item;
          const id =
            url
              .split('/')
              .reverse()
              .find((str: string) => Number(str)) || '';

          return arr.push({ name, id });
        });

        setPokemonList(arr);
        setTotalCount(res.data.count);
      })
      .catch(() => setApiCatch(true));
  }, [baseApi, pageCurrent, pageSize]);

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let arr: IPokemon[] = [];
    const isNumber = Number(value);

    if (value) {
      arr = pokemonList.filter((item) => {
        if (isNumber) return item.id.includes(value);
        return item.name.toLowerCase().includes(value.toLowerCase());
      });

      if (!isNumber) {
        arr.sort((x, y) => {
          if (x.name > y.name) return 1;
          if (x.name < y.name) return -1;
          return 0;
        });
      }
    }

    setFilter(value);
    setPokemonFilter(arr);
  };

  const IconComp = <img src={IconFilter} alt="search" />;

  const renderInputFilter = (
    <Styled.Input>
      <Input
        size="large"
        className="input-search"
        value={filter}
        prefix={IconComp}
        onChange={onFilter}
        placeholder="What Pokémon are you looking for?"
      />
    </Styled.Input>
  );

  const renderListPokemon = (
    <ListPokemon
      pageCurrent={pageCurrent}
      pageSize={pageSize}
      totalCount={totalCount}
      pokemonList={filter ? pokemonFilter : pokemonList}
    />
  );

  const renderMain = (
    <Layout
      header={false}
      title="Pokédex"
      subtitle="Search for Pokémon by name or using the National Pokédex number."
    >
      {renderInputFilter}
      {renderListPokemon}
      <div />
    </Layout>
  );

  useEffect(() => {
    onGet();
  }, [onGet]);

  if (apiCatch) return <CatchPage />;
  return renderMain;
};

export default Home;
