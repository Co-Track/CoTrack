
import { useEffect, useState } from "react";
import axios from "axios";


function Profile(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [profile, setProfile] = useState([]);
    const getProfile = () => {
        const token = localStorage.getItem("authToken");
        axios
          .get(
            "http://localhost:3000/user",
    
            {
              headers: { authorization: `Bearer ${token}` },
            }
          )
          .then((response) => {
            setProfile(response.data);
            console.log(response);
            // eslint-disable-next-line no-undef
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        getProfile();
      }, []);
      console.log(profile);
       
      return (
        <>
          <div className="Profile">
            <h1>Profile</h1>
    
            {profile &&
              profile.map((item, i) => (
                <div key={i}>
                  <h2>{item.name}</h2>
                  <p>{item.email}</p>
                </div>
              ))}
          </div>
        </>
      );
    }
    
    export default Profile;