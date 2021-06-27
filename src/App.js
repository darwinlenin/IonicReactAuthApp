import logoreact from './logo.svg';
import logoionic from './ionic-logo.svg';
import './App.css';
import { Component } from 'react';
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from './components/Callback';
import {IonHeader,IonRouterOutlet,IonApp,IonImg,IonItemGroup,IonContent,IonToolbar,IonTitle,IonGrid,IonFooter} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {

    let mainComponent =""
    switch(this.props.location){
      case "":
        mainComponent = <Main {...this.props}/>;
        break;
      case "callback":
        mainComponent = <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/callback" component={Callback} />
        </IonRouterOutlet>
      </IonReactRouter>;
        break;
      case "secret":
        mainComponent = (this.props.auth.isAuthenticated())? 
          (<IonReactRouter>
            <IonRouterOutlet>
              <Route path="/secret"><Secret {...this.props} /></Route>
            </IonRouterOutlet>
          </IonReactRouter>)
      : 
        (<IonReactRouter>
          <IonRouterOutlet>
            <Route path="/notfound" component={NotFound} />
          </IonRouterOutlet>
        </IonReactRouter>);
        break;
      default:
        mainComponent = <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/notfound" component={NotFound} />
        </IonRouterOutlet>
      </IonReactRouter>;

    }

    return (<IonApp className="App">
        <IonHeader className="App-header">
            <IonToolbar>
              <IonTitle>Ionic React Auth App</IonTitle>
            </IonToolbar>
            {this.props.pictureprofile!=="" ?<IonGrid><IonImg src={this.props.pictureprofile} className="App-picture-profile" alt="logo" /></IonGrid>:<IonGrid><IonImg src={logoreact} className="App-logo" alt="logo" /><IonImg src={logoionic} className="App-logo" alt="logo" /></IonGrid>} 
            {this.props.nickname!=="" ?<IonGrid>Nickname: {this.props.nickname}</IonGrid>:<IonGrid></IonGrid>}
            {this.props.name!=="" ?<IonGrid>Name: {this.props.name}</IonGrid>:<IonGrid></IonGrid>}
        </IonHeader>
        <IonContent><IonItemGroup>{mainComponent}</IonItemGroup></IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle>Powered by Ionic-React</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonApp>
    );
  }
}

export default App;
