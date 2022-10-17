import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConference from './AttendConference';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        <LocationForm />
        <ConferenceForm />
        <AttendConference />
        <AttendeesList attendees={props.attendees} />
      </div>
    </>
  );
}

export default App;
