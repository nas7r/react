class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todohuken: "",
      narimoto: [
        {
          id: "0",
          name: "古賀",
          address: "埼玉県",
          tel: "080-0000-0000",
        },
        {
          id: "1",
          name: "airi",
          address: "東京都",
          tel: "080-0000-0000",
        },
        {
          id: "3",
          name: "naho",
          address: "群馬県",
          tel: "080-0000-0000",
        },
      ],
    };
  }

  addUser(event) {
    //event.preventDefault();
    //const newUser = {
    //id: "3",
    //name: "naho",
    //address: this.todohuken,
    //tel: "080-0000-0000",
    //};
    //console.log(this.todohuken);
    console.log(this.state.todohuken);
    this.setState({
      narimoto: [
        ...this.state.narimoto,
        {
          id: "3",
          name: "naho",
          address: this.state.todohuken,
          tel: "080-0000-0000",
        },
      ],
    });

    this.setState({
      todohuken: "",
    });
  }

  handleChangeInput(event) {
    console.log(event.target.value);
    this.setState({
      todohuken: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todouhuken}
          onChange={(event) => this.handleChangeInput(event)}
        />
        <button onClick={() => this.addUser(event)}>追加する</button>
        {this.state.narimoto.map((n) => {
          return <div key={n.id}>{n.address}</div>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
