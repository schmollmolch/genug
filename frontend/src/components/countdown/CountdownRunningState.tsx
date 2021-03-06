import React from "react";
import { IonButton, IonIcon, IonBadge } from "@ionic/react";
import { play as playIcon, pause as pauseIcon } from "ionicons/icons";

import Log from "../../common/Log";
import { Trans } from "@lingui/macro";

import { TimerStatus } from "../../../../types";
interface Props {
  state: TimerStatus;
  pause: () => void;
  continue: () => void;
}

export const CountdownRunningState = (props: Props) => {
  const run = () => {
    Log.trace("paused->running", "CountdownRunningState");
    // setState({ state: 'running' });
    props.continue();
  };
  const pause = () => {
    Log.trace("running->paused", "CountdownRunningState");
    // setState({ state: 'paused' });
    props.pause();
  };

  switch (props.state) {
    case "paused":
      return (
        <IonButton onClick={e => run()}>
          <IonIcon slot="start" icon={playIcon} />
          <Trans>Continue</Trans>
        </IonButton>
      );
    case "running":
      return (
        <IonButton onClick={e => pause()}>
          <IonIcon slot="start" icon={pauseIcon} />
          <Trans>Pause</Trans>
        </IonButton>
      );
    case "expired":
      return (
        <IonBadge color="danger">
          <Trans>Timer expired!</Trans>
        </IonBadge>
      );
  }
};
