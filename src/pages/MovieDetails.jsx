import Layout from '../components/layout';
import { useDetails } from '../queries/use-details';
import { getFullPictureUrl } from '../utils/getFullPictureUrl';
import c from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const { isLoading, data: movieInfo, error } = useDetails(movieId);
  console.log(movieInfo);

  return (
    <Layout>
      <div className={c.content}>
        {movieInfo && (
          <img src={getFullPictureUrl(movieInfo.poster_path)} alt="" />
        )}
      </div>
    </Layout>
  );
}
