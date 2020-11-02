import React from 'react'
import './App.css';
import Main from './home/Main/index'
// import SideMenu from './home/SideMenu/index.js'
function App() {
  return (
    <div style={styles.container}>
      <Main />
      {/* <SideMenu /> */}
    </div>
  );
}
const styles = {
  container:{
      width:'100%',
      height:'100%',
      background:'#f8f8f8'
      // overflow:'hidden'
  }
}
export default App;
