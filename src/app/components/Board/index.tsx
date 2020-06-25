import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Skeleton } from 'antd';
import * as Styled from '../../assets/styled/components/BoardStyled';

interface IProps {
  name: string;
  id: string | number;
  loader?: boolean;
}

const Board = (props: IProps) => {
  const { id, name, loader = false } = props;
  return (
    <Link to={id ? `/pokemon/${id}` : '/'}>
      <Styled.Board>
        <Card className="board">
          <Styled.PokeInfo>
            <Skeleton loading={loader} title={false} active>
              <dd>#{id}</dd>
              <p>{name}</p>
            </Skeleton>
          </Styled.PokeInfo>
        </Card>
      </Styled.Board>
    </Link>
  );
};

export default Board;
