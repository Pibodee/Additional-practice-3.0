import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { fetchEventsByName } from "services/eventsApi"
const SearchPage = () => {
    const [events, setEvents] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const eventName = searchParams.get('eventName')
    const location = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        setSearchParams({ eventName: form.elements.eventName.value });
    }

    useEffect(() => {
        if (!eventName) return
        fetchEventsByName(eventName)
        .then(setEvents)
        .catch(error => console.log(error))
    }, [eventName])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='eventName' />
                <button type="submit">Search</button>
            </form>
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
        </>
    )
}

export default SearchPage