import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const useAuth = () => {
  const history = useHistory();

  useEffect(() => {
    // Set up the auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // User is signed in, redirect to /home
        history.push('/home');
      } else {
        // User is signed out, redirect to /login
        history.push('/login');
      }
    });

  }, [history]);
};

export default useAuth;