import React, {Component} from "react";
import {IonApp,IonGrid,IonContent} from '@ionic/react';

import Auth from "../Auth";

export default class Callback extends Component {

    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render(){
        return(
            <IonApp>
                <IonContent>
                    <IonGrid>Loading...</IonGrid>
                </IonContent>
                
            </IonApp>
        )
    }
}