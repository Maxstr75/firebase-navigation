import { Container, Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import auth from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';

const User = () => {
  const {
    userData: { photoURL, email, displayName },
    updateUser,
  } = useContext(UserContext);

  const logout = async () => {
    try {
      await signOut(auth);
      updateUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <p>{displayName}</p>
      <p>{email}</p>
      <img src={photoURL} alt={displayName} width="250" />
      <br />
      <Button variant="outlined" onClick={logout}>
        logout
      </Button>
    </Container>
  );
};

export default User;
