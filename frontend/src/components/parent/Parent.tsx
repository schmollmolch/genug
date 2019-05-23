import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { connect } from "react-redux";
import { Countdown } from '../countdown';
import { Timer } from '../../../../types';
import { pauseTimer, continueTimer } from '../../store/timer/actions';
import { AppState } from '../../store';

interface ParentProps {
  timers: Timer[],
  userName: string,
  pauseTimer: typeof pauseTimer,
  continueTimer: typeof continueTimer
}

class Parent extends React.Component<ParentProps> {

  render() {
    return (
      <div>
        {this.props.timers.map(timer => (
          <Countdown key={timer.id} timer={timer} pauseTimer={() => this.props.pauseTimer(timer)} continueTimer={() => this.props.continueTimer(timer)} />
        ))}
      </div>
    )
  };
}

const mapStateToProps = (state: AppState) => ({
  timers: state.timers.timers,
  userName: state.timers.name
});

export default connect(
  mapStateToProps,
  { pauseTimer, continueTimer }
)(Parent);
