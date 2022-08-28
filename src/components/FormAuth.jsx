import { Container, Stack, Button, Box, TextField } from '@mui/material';
import { useState } from 'react';
import { ReactComponent as Google } from '../img/icons8-google.svg';
import auth from '../services/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const provider = new GoogleAuthProvider();

export default function FormAuth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { updateUser } = useContext(UserContext);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const registration = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
      });

      updateUser(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const userData = await signInWithPopup(auth, provider);
      console.log(userData);
      updateUser(userData.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </Box>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={registration}>
            Registration
          </Button>
          <Button variant="outlined" onClick={googleLogin}>
            <Google />
          </Button>
        </Stack>
      </div>
    </Container>
  );
}
