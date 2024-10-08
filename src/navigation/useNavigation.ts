import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);
  return {
    user,
    initializing,
  };
};

export default useAuth;
