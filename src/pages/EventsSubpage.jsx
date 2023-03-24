import useFetchEvent from 'components/hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventsSubpage = () => {
  const location = useLocation()
  const eventObject = useFetchEvent();
  return (
    eventObject && (
      <>
        <h2>{eventObject.name}</h2>
        <img src={eventObject.images[0].url} alt={eventObject.name} />
        <Link to='details' state={location.state}>More info</Link>
      </>
    )
  );
};

export default EventsSubpage;
