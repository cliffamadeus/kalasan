import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonLabel } from '@ionic/react';
import { supabase } from './utils/supabaseClient';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error during registration:', error.message);
    } else {
      console.log('Registration successful!');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleRegister}>
          Register
        </IonButton>
        <IonButton routerLink="/login" expand="full" fill="clear" shape='round'>
            Already have an account? Sign in
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;