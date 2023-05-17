import Layout from '../components/layout';
import { useDetails } from '../queries/use-details';
import { useVideoMovies } from '../queries/use-movie-video';
import { getFullPictureUrl } from '../utils/getFullPictureUrl';
import c from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import s from './MovieDetails.module.css';
import FilmDetails from '../components/FilmDetails/FilmDetails';
export default function MovieDetails() {
  const { movieId } = useParams();
  const { data: movieVideo } = useVideoMovies(movieId);
  const { isLoading, data: movieInfo, error } = useDetails(movieId);
  // console.log(movieInfo);
  console.log(movieVideo);

  return (
    <Layout>
      <div className={c.content}>
        {movieInfo && (
          <div className={s.content__image}>
            {/* <img
              className={s.details__image}
              src={getFullPictureUrl(movieInfo.poster_path)}
              alt=""
            /> */}
            <FilmDetails
              title={movieInfo.title}
              description={movieInfo.overview}
              genres={movieInfo.genres}
              date={movieInfo.release_date}
              rating={movieInfo.vote_average}
              poster={getFullPictureUrl(movieInfo.poster_path)}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
