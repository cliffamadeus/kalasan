import React from 'react';
import { IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, useIonRouter } from '@ionic/react';
import { supabase } from './utils/supabaseClient';

const Login: React.FC = () => {
    const navigation = useIonRouter();

  const handleOAuthLogin = async (provider: 'google') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error('Error during OAuth login:', error.message);
    } else {
        setTimeout(() => {
            navigation.push('/home', 'forward', 'replace');
        }, 2500);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => handleOAuthLogin('google')}>
          Login with Google
        </IonButton>
        <IonButton routerLink="/register" expand="full" fill="clear" shape='round'>
            Don't have an account? Register here
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;