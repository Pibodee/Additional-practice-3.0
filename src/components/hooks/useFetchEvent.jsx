import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchEventById } from "services/eventsApi"

const useFetchEvent = () => {
    const [evt, setEvt] = useState(null)

    const {eventId} = useParams()

    useEffect(() => {
        fetchEventById(eventId)
            .then(setEvt)
        .catch(error => console.log(error))
    }, [eventId])
    
    console.log(evt)
    return evt
}

export default useFetchEvent
