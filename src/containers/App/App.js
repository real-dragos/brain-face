import React, { Component } from 'react';
import Particles from 'react-particles-js';
import styles from './App.module.css';
import { particlesParams} from '../../constants';
import Routes from '../Routes/Routes';

class App extends Component {

  render() {
    return (
      <div className={styles["App"]}>
        <Particles
          className={styles["Particles"]}
          params={particlesParams}
        />
        <Routes />
      </div>
    );
  }
}

export default App;
