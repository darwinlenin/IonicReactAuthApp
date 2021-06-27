import React, {Component} from "react";
import {IonButton,IonIcon,IonApp,IonContent,IonGrid} from '@ionic/react';
import {home as homeIcon} from "ionicons/icons";

const MAIN_PAGE = "/";

export default class Secret extends Component {
    render(){
        return(
            <IonApp>
                <IonContent>
                    <IonGrid>Login Success!</IonGrid>
                    <IonGrid>Private area.</IonGrid>
                    <IonGrid>
                        <IonButton routerLink={MAIN_PAGE}><IonIcon slot="end" icon={homeIcon} />Back to homepage</IonButton>
                    </IonGrid>
                    <IonGrid>
                        <IonButton color="danger" onClick={this.props.auth.logout}>Logout</IonButton>
                    </IonGrid>
                </IonContent>
            </IonApp>
        )
    }

}