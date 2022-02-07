function App() {
  const initialState = [
    { id: 1, text: "The Matrix" },
    { id: 2, text: "The Dark Knight" },
    { id: 3, text: "Ironman" },
  ];
  const [state, changeState] = React.useState(initialState);

  return (
    <div>
      <ul>
        {state.map(function (item) {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
