import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

function GoogleFormNew() {
  const [user, setUser] = useState({});
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  console.log(user);
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let userObject = jwtDecode(credentialResponse.credential);
          console.log(userObject);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <Button onClick={() => login()}>Sign in with Google </Button>
    </div>
  );
}

export default GoogleFormNew;
