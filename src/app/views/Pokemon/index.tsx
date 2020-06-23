import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Progress, Button } from 'antd';
import Axios from 'axios';
import { PokeApiContext } from '../../contexts/PokeApiContext';
import Layout from '../../layout';
import ArrowLeft from '../../assets/img/arrowLeft.svg';
import * as Styled from '../../assets/styled/views/PokemonStyled';

interface IAbility {
  name: string;
  url?: string;
}

interface IAbililties {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

interface IStats {
  stat: string;
  value: number;
}

interface IPokedex {
  id: number;
  name: string;
  abilities: IAbililties[];
  stats: IStats[];
  image: string;
}

interface IItemStats {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface IProps {
  history: {
    goBack: () => null;
  };
  match: {
    params: {
      id: string;
    };
  };
}

const Pokemon = (props: IProps) => {
  const { baseApi } = useContext(PokeApiContext);
  const [pokeData, setPokeData] = useState<IPokedex>();

  const getStats = useCallback((arr: IItemStats[]) => {
    const selectStats: string[] = ['hp', 'attack', 'defense', 'speed'];
    const arrStats: IStats[] = [];

    arr.map((item: IItemStats) => {
      const statName = selectStats.find((name) => name === item.stat.name);
      if (statName) {
        arrStats.push({
          stat: statName,
          value: Number(item.base_stat),
        });
      }

      return false;
    });

    return arrStats;
  }, []);

  const onGet = useCallback(
    async (request: string) => {
      Axios.get(request).then((res) => {
        const { name, id, abilities, sprites } = res.data;
        const stats = getStats(res.data.stats);
        setPokeData({
          id,
          name,
          stats,
          abilities,
          image: sprites.front_default,
        });
      });
    },
    [getStats]
  );

  const goBack = () => props.history.goBack();

  const calcStat = (val: number) => {
    const max = 252;
    const percentual = Number(((val / max) * 100).toFixed(2));
    return percentual;
  };

  const renderStats = () => {
    if (!pokeData) return null;

    return pokeData?.stats.map((item) => {
      const { stat, value } = item;
      const percent = calcStat(value);

      return (
        <li key={stat}>
          <p>{`${stat}: ${value}`}</p>
          <Progress
            type="line"
            showInfo={false}
            strokeColor="#000"
            percent={percent}
          />
        </li>
      );
    });
  };

  const renderAbilities = () =>
    pokeData?.abilities.map((item) => (
      <dd key={item.ability.name}>{item.ability.name}</dd>
    ));

  useEffect(() => {
    if (baseApi && props.match.params.id) {
      const request = baseApi + props.match.params.id;
      onGet(request);
    }
  }, [baseApi, props.match.params.id, onGet]);

  if (!pokeData) return <div />;

  return (
    <Layout>
      <Styled.Page>
        <Styled.Back>
          <Button type="text" onClick={goBack}>
            <img src={ArrowLeft} alt="Back Home page" />
          </Button>
        </Styled.Back>
        <Styled.InfoHead>
          <div>
            <img src={pokeData.image} alt={pokeData.name} />
          </div>
          <div>
            <small>{`#${pokeData.id}`}</small>
            <h1>{pokeData.name}</h1>
            {renderAbilities()}
          </div>
        </Styled.InfoHead>
        <Styled.CardPokedex>
          <span>Stats</span>
          <ul>{renderStats()}</ul>
        </Styled.CardPokedex>
      </Styled.Page>
    </Layout>
  );
};

export default Pokemon;
