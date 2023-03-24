import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { fetchEvents } from "services/eventsApi"

const EventsPage = () => {
    const [events, setEvents] = useState([])
    const location = useLocation()
    useEffect(() => {
        fetchEvents()
            .then(setEvents)
        .catch(error => console.log(error))
    }, [])

    return (<>
        <ul>
            {events.map(event => {
                return (
                  <li key={event.id}>
                    <Link to={event.id} state={{from: location}}>{event.name}</Link>
                  </li>
                );
            })}
        </ul>
        <Outlet/>
    </>)
}

export default EventsPage