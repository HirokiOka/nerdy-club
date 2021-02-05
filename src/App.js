import { onJoinClick, onLeaveClick, onPublishClick, onUnpublishClick } from './utils';

function Join() {
   return (
      <button onClick={onJoinClick}>Join</button>
    );
}

function Leave() {
  return (
    <button onClick={onLeaveClick}>Leave</button>
  );
}

function Publish() {
  return (
    <button onClick={onPublishClick}>Publish</button>
  );

}

function Unpublish() {
  return (
    <button onClick={onUnpublishClick}>Unpublish</button>
  );
}

function Main() {
  return (
    <div>
      <h1>nerdy club</h1>
      <Join />
      <Leave />
      <Publish />
      <Unpublish />
    </div>
  );
}

function App() {
  return (
    <div>
      <Main />
    </div>
    );
}

export default App;
