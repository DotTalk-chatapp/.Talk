import { GoogleLogin } from 'react-google-login';

const clientId =
  '936103473516-grhgau5rftce9bt624e9drgabuor4phd.apps.googleusercontent.com';

const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success! Current User', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('Login Failed ', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Sign in with Google
        </button>
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default Login;
