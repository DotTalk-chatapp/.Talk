import { GoogleLogout } from 'react-google-login';

const clientId =
  '936103473516-grhgau5rftce9bt624e9drgabuor4phd.apps.googleusercontent.com';

const Logout = () => {
  const onSuccess = (res) => {
    console.log('Logout Success....');
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    ></GoogleLogout>
  );
};

export default Logout;
