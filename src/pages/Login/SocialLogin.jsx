import GoogleLogin from "react-google-login";


const SocialLogin = () => {

    const responseGoogle = (response) => {
        console.log(response);
        // Handle the response from Google here.
        // You can extract the user information like name, email, profile picture, etc. from the 'response' object.
      };

    return (
        <div>
            <h1>My OAuth React App</h1>
            <GoogleLogin
                clientId={import.meta.env.VITE_Google_Client_Id}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default SocialLogin;