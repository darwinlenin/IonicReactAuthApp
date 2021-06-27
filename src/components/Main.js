import {IonButton,IonIcon,IonApp,IonContent,IonGrid} from '@ionic/react';
import {play as playIcon, accessibility as accessibilityIcon} from "ionicons/icons";
import React, {Component} from "react";


const SECRET_PAGE = "/secret";

export default class Main extends Component{
    render(){
        return(
            <IonApp>
                <IonContent>
                    <IonGrid>
                        Welcome!
                    </IonGrid>
                    <IonGrid>
                        Do you want to access to your profile?
                    </IonGrid>
                    <IonGrid>
                        <IonButton href={SECRET_PAGE}><IonIcon slot="end" icon={accessibilityIcon} />Click here</IonButton>
                    </IonGrid>
                    {!this.props.auth.isAuthenticated() && 
                    <IonContent>
                        <IonGrid>Please login first</IonGrid>
                        <IonGrid>
                            <IonButton color="success" onClick={this.props.auth.login}><IonIcon icon={playIcon} slot="end"/>Login</IonButton>
                        </IonGrid>
                    </IonContent>
                    }
                </IonContent>
            </IonApp>
            
        )
    }
}