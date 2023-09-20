import React, { useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { deleteUser, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ProfileSec = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const handleClick = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const uploadFile = async () => {
      // const name = new Date().getTime + file.name;
      // console.log(name);

      const storageRef = ref(storage, file.name);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
        });
      });
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setData(docSnap.data());
          setName(docSnap.data().name);
          setPhone(docSnap.data().phone);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser.uid]);
  // console.log(file);

  const handlePicSave = async (event) => {
    event.preventDefault();

    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        img: data.img,
      });
    } catch (error) {
      console.log("Not done");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDetailsSave = async (event) => {
    event.preventDefault();
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        name: name,
        phone: phone,
      });
    } catch (error) {
      console.log("Not done");
    }
  };
  const handleCheckbox = (event) => {
    setCheck(event.target.checked);
  };
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteDoc(doc(db, "users", currentUser.uid));
      await deleteUser(auth.currentUser);
      navigate("/");
    } catch (error) {
      console.log("Not Delete");
    }
  };

  return (
    <div className="ProMain">
      <div className="Proheader">
        <p>My Profile</p>
        <button onClick={handleClick}>Logout</button>
      </div>
      <div className="Propic">
        <div className="heading">Profile Picture</div>
        <div className="picture">
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            style={{ display: "none" }}
            id="file"
          />
          <label htmlFor="file">
            <MdOutlineFileUpload />
            <p>Image Upload</p>
          </label>
          <img src={file ? URL.createObjectURL(file) : data.img} alt="" />
          <div className="save">
            <button onClick={handlePicSave}>Save</button>
          </div>
        </div>
      </div>
      <div className="userDetail">
        <div className="heading">Profile Details</div>
        <form className="details">
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label htmlFor="email">
            Email Id <span>*</span>
          </label>
          <input type="email" value={data.email} />
          <label htmlFor="phone">
            Contact <span>*</span>
          </label>
          <input type="tel" value={phone} onChange={handlePhoneChange} />

          <div className="save">
            <button onClick={handleDetailsSave}>Save</button>
          </div>
        </form>
      </div>
      <div className="passwordChange">
        <div className="heading">Change Password</div>
        <form className="details">
          <label htmlFor="currPassword">
            Current Password <span>*</span>
          </label>
          <input type="password" />
          <label htmlFor="newPassword">
            New Password <span>*</span>
          </label>
          <input type="password" />
          <label htmlFor="reEnterPassword">
            Re-Enter New Password <span>*</span>
          </label>
          <input type="text" />

          <div className="save">
            <button>Save</button>
          </div>
        </form>
      </div>
      <div className="userDetail">
        <div className="heading">Delete Profile</div>
        <form className="details">
          <div className="check">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              onChange={handleCheckbox}
            />
            <p>I agree to Delete My Profile</p>
          </div>
          <div className={check ? "save" : "saveFalse"}>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSec;
