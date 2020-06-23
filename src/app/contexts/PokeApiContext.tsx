import React, { createContext, ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}

const pokeApi = {
  baseApi: 'https://pokeapi.co/api/v2/pokemon/',
};

export const PokeApiContext = createContext(pokeApi);

const PokeApiProvider = ({ children }: IChildren) => {
  return (
    <PokeApiContext.Provider value={pokeApi}>
      {children}
    </PokeApiContext.Provider>
  );
};

export default PokeApiProvider;
