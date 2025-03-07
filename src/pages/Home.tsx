import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, useIonRouter } from '@ionic/react';
import { supabase } from '../utils/supabaseClient';

const Home: React.FC = () => {
  const navigation = useIonRouter();
  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error during logout:', error.message);
    } else {
      setTimeout(() => {
        navigation.push('/login', 'back', 'replace'); 
      }, 1500); 
      console.log('Logged out successfully!');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Welcome to the Home Page!</h1>
        <p>You have successfully logged in.</p>
        <IonButton expand="block" onClick={handleLogout}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;