import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function GoogleForm() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    let userObject = jwtDecode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignout(e) {
    e.preventDefault();
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "444793060448-lgjt3hgjupr2jqv9u6fm4sc8jlt1aui1.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  // If we have no user: sign in button
  // If we have a user:show the log out button

  return (
    <div>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={handleSignout}>Sign out</button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt="profile" />
          <p>Full Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default GoogleForm;
