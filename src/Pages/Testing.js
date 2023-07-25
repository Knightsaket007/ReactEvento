import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Testing = () => {
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    // Decoding the JWT to get user information
    const decodedToken = jwt_decode(credential);
    const email = decodedToken.email;
    const name = decodedToken.name;
    console.log('Email:', email);
    console.log('name:', name);

    try {
      const response = await axios.post('/api/login', { email });
      console.log(response.data);
    } catch (error) {
      console.log('Login Failed:', error);
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId="404172413531-j2e4fsuun6468l7jeb8h1n8f5huorn9u.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default Testing;
