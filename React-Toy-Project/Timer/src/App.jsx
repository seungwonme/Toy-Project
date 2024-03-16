import "./App.css"

function Block({time, type}) {
  return (
    <div className="block">
      <p id="time">{time}</p>
      <p id="type">{type}</p>
    </div>
  );
}

function getTime() {
  const date = new Date();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return [days, hours, minutes, seconds];
}

function App() {
  const [days, hours, minutes, seconds] = getTime();
  return (
    <section id="blocks">
      <Block time={days} type="Days"/>
      <Block time={hours} type="Hours"/>
      <Block time={minutes} type="Minutes"/>
      <Block time={seconds} type="Seconds"/>
    </section>
  );
}

export default App;
