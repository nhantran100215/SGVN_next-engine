import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={async()=>{
                const requestOption={
                    method:"GET",
                    headers: {
                        "Content-type":"application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify({ client_id:"LSDn54vGgz9qK3", redirect_uri:"https://192.168.3.80/"})
                }
                fetch('https://base.next-engine.org/users/sign_inclient_id=LSDn54vGgz9qK3&redirect_uri=https://192.168.3.80/')
                .then(response => response.json())
                .then(data => {console.log("data",data)});
            }}>Get access token</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
