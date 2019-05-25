import React from 'react';
import { IonCard, IonCardHeader, IonSpinner, IonCardSubtitle } from "@ionic/react";

interface Props {
    title: string
}

export const Progress = (props: Props) =>
    (<IonCard><IonCardHeader><IonCardSubtitle><IonSpinner />{props.title}...</IonCardSubtitle></IonCardHeader > </IonCard>)
