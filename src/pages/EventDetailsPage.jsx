import useFetchEvent from 'components/hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetailsPage = () => {
  const data = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    data && (
      <>
        <button
          onClick={() => {
            navigate(location?.state?.from);
          }}
        >
          Go Back
        </button>
        <h2>{data.name}</h2>
        <img src={data.images[0].url} alt={data.name} />
        <h3>{data.classifications[0].genre.name}</h3>
        <h3>{data.classifications[0].subGenre.name}</h3>
      </>
    )
  );
};

export default EventDetailsPage;
