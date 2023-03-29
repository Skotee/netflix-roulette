import {createContext, Dispatch, SetStateAction} from 'react';
import IMovie from '../interfaces/IMovie';

interface CurrentMovieContextType {
  currentMovie?: IMovie;
  setCurrentMovie: Dispatch<SetStateAction<IMovie | undefined>>; 
}

export const CurrentMovieContext = createContext<CurrentMovieContextType>({
  currentMovie: {
    title: 'title',
    genres: 'sds',
    year: 1995,
    cover: '',
    id: 0,
    rate: 0.2,
    overview: '',
    runtime: '',
  },
  setCurrentMovie: () => {},
});
