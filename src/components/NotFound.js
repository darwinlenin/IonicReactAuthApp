import React, {Component} from "react";
import {IonButton,IonIcon,IonApp,IonContent,IonGrid} from '@ionic/react';
import {home as homeIcon} from "ionicons/icons";

const MAIN_PAGE = "/";

export default class NotFound extends Component {
    render(){
        return (
            <IonApp>
                <IonContent>
                <IonGrid>
                    Restricted section!
                </IonGrid>
                <IonGrid>
                    You can access to this section via login authentication.
                </IonGrid>
                <IonGrid>
                    <IonButton routerLink={MAIN_PAGE}><IonIcon slot="end" icon={homeIcon} />Back to homepage</IonButton>
                </IonGrid>
                </IonContent>
            </IonApp>
        )
    }
}