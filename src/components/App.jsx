import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "pages/Homepage";
import EventsPage from "pages/EventsPage";
import EventsSubpage from "pages/EventsSubpage";
import SearchPage from "pages/SearchPage";
import EventDetailsPage from "pages/EventDetailsPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="events" element={<EventsPage />}>
            <Route path=":eventId" element={<EventsSubpage />} />
          </Route>
          <Route path="search" element={<SearchPage />}>
            <Route path=":eventId" element={<EventsSubpage />} />
          </Route>
          <Route
            path="search/:eventId/details"
            element={<EventDetailsPage />}
          ></Route>
          <Route
            path="events/:eventId/details"
            element={<EventDetailsPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
