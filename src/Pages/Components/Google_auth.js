import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Google_auth = (props) => {
  const Navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    // Decoding the JWT to get user information
    const decodedToken = jwt_decode(credential);
    const email = decodedToken.email;
    const name = decodedToken.name;
    console.log('Email:', email);
    console.log('name:', name);

    try {
      // const response = await axios.post('/api/login', { email });
      if (props.authType === "signup") {
        axios.post(" http://localhost:5000/users/Google_Data_signup", {
          email: email,
          name: name,
        }).then(res => {
          if (res.data === "success") {
            Navigate("/events")
          } else {
            toast.warn("error")
            Navigate("/user-login")
          }
        })
      }
      else{
        axios.post(" http://localhost:5000/users/Google_Data_login", {
          email: email,
        }).then(res => {
          if (res.data === "success") {
            Navigate("/events")
          } else {
            toast.warn("error")
            Navigate("/signup")
          }
        })
      }


    } catch (error) {
      toast.error('Login Failed:', error);
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
      <ToastContainer/>
    </>
  );
};

export default Google_auth;
