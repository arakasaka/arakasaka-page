import Privacy from './Privacy';

function App() {
  return (
    <div style={{backgroundColor: '#FF4F3F'}}>
      <div style={{maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', color: 'white'}}>
        <div style={{textAlign: 'center'}}>
          <h6 style={{fontSize: 150, margin: 0}}>AR</h6>
          <h6 style={{fontSize: 80, margin: 0}}>AKASAKA</h6>
        </div>
        <div style={{textAlign: 'left', marginTop: 100}}>
          <Privacy />
        </div>
      </div>
    </div>
  );
}

export default App;
