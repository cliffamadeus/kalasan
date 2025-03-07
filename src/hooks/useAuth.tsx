import { useEffect } from 'react';
import { useIonRouter } from '@ionic/react';
import { supabase } from '../utils/supabaseClient';

const useAuth = () => {
  const router = useIonRouter(); // Use Ion Router for navigation

  useEffect(() => {
    // Check for an existing session on initial load
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/home', 'forward'); // Navigate to home if session exists
      }
    });

    // Set up the auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/home', 'forward'); // Navigate to home after login
      } else {
        router.push('/login', 'root'); // Navigate to login after logout
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return null;
};

export default useAuth;
