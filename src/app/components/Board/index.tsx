import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import BoardStyle from '../../assets/styled/components/BoardStyled';

interface IProps {
  name: string;
  id: string | number;
  loader?: boolean;
}

const Board = (props: IProps) => {
  const { Meta } = Card;

  return (
    <BoardStyle>
      <Card className="board">
        <Link to={`/pokemon/${props.id}`}>
          <Meta
            className="board-name"
            description={`#${props.id}`}
            title={props.name}
          />
        </Link>
      </Card>
    </BoardStyle>
  );
};

export default Board;
