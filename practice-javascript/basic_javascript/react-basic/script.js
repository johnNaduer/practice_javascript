const ArregloApp = () => {
  const arreglo1 = [1, 2, 3];
  const elementos = [];

  for (let i = 0; i < arreglo1.length; i++) {
    elementos.push(<p key={i}>{arreglo1[i]}</p>);
  }

  ReactDOM.render(<div>{elementos}</div>, document.getElementById('root'));
};

