// import React, { useEffect, useState } from "react";
// import cokerectangle from "../../assets/cokerectangle.png";
// import BrandSideBar from "./BrandSideBar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useParams } from "react-router-dom";
// import { auth, db } from "../Firebase/firebaseConfig";
// import { doc, onSnapshot } from "firebase/firestore";

// const BrandCampaings = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const docRef = doc(db, "BrandNewCampaings", id);
//     onSnapshot(docRef, (snapshot) => {
//       setArticle({ ...snapshot.data(), id: snapshot.id });
//     });
//   }, []);

//   return (
//     <>
//       <div>
//         {article && (
//           <div className=" mb-4  h-full flex ">
//             {/* <div className="flex justify-center mt-5  ">
//             <img src={cokerectangle}></img>
//           </div> */}
//             <div className=" pt-25 pl-10">
//               <div>
//                 <p className="font-bold flex justify-center  mt-20 text-3xl  ">
//                   {article.title}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500 font-semibold flex justify-start ">
//                   by {article.createdBy}
//                 </p>
//               </div>
//               <div className="flex justify-start  ">
//                 <div className="text-gray-600 w-96 ">
//                   Rs 25000 <br /> 200.0K impressions{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BrandCampaings;

// import React, { useState, useEffect } from "react";
// import cokerectangle from "../../assets/cokerectangle.png";
// import BrandSideBar from "./BrandSideBar";
// import { Timestamp, collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage, auth, db } from "../Firebase/firebaseConfig";
// import { toast } from "react-toastify";
// import { useAuthState } from "react-firebase-hooks/auth";
// import BrandAddCampaings from "./BrandAddCampaing";
// import BrandAllCampaings from "./BrandAllCampaings";

// import {
//   query,
//   orderBy,
//   onSnapshot,
//   serverTimestamp,
// } from "firebase/firestore";

// import { TextField, Button } from "@mui/material";

// const BrandCampaings = () => {
//   // const [isPopupOpen, setPopupOpen] = useState(false);

//   // const openPopup = () => {
//   //   setPopupOpen(true);
//   // };

//   // const closePopup = () => {
//   //   setPopupOpen(false);
//   // };

//   // const [user] = useAuthState(auth);
//   // const [formData, setFormData] = useState({
//   //   // title: "",
//   //   description: "",
//   //   image: "",
//   //   createdAt: Timestamp.now().toDate(),
//   // });

//   // const [progress, setProgress] = useState(0);

//   // const handleChange = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   // const handleImageChange = (e) => {
//   //   setFormData({ ...formData, image: e.target.files[0] });
//   // };
//   // const handlePublish = () => {
//   //   if (!formData.description || !formData.image) {
//   //     // alert("Please fill all the fields");
//   //     console.log("fill all bsdk");
//   //     return;
//   //   }

//   //   const storageRef = ref(
//   //     storage,
//   //     `/images/${Date.now()}${formData.image.name}`
//   //   );

//   //   const uploadImage = uploadBytesResumable(storageRef, formData.image);

//   //   uploadImage.on(
//   //     "state_changed",
//   //     (snapshot) => {
//   //       const progressPercent = Math.round(
//   //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//   //       );
//   //       setProgress(progressPercent);
//   //     },
//   //     (err) => {
//   //       console.log(err);
//   //     },
//   //     () => {
//   //       setFormData({
//   //         ...formData,
//   //         // title: "",
//   //         description: "",
//   //         image: "",
//   //       });

//   //       getDownloadURL(uploadImage.snapshot.ref).then((url) => {
//   //         const articleRef = collection(db, "BrandNewCampaings");
//   //         addDoc(articleRef, {
//   //           // title: formData.title,
//   //           description: formData.description,
//   //           imageUrl: url,
//   //           createdAt: Timestamp.now().toDate(),
//   //           createdBy: user.displayName,
//   //           userId: user.uid,
//   //           // likes: [],
//   //           // comments: [],
//   //         })
//   //           .then(() => {
//   //             toast("Article added successfully", { type: "success" });
//   //             setProgress(0);
//   //           })
//   //           .catch((err) => {
//   //             toast("Error adding article", { type: "error" });
//   //           });
//   //       });
//   //     }
//   //   );
//   // };

//   const q = query(
//     collection(db, "brandnewcampaings"),
//     orderBy("timestamp", "desc")
//   );
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   useEffect(() => {
//     onSnapshot(q, (snapshot) => {
//       setTodos(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           item: doc.data(),
//         }))
//       );
//     });
//   }, [input]);
//   const addTodo = (e) => {
//     e.preventDefault();
//     addDoc(collection(db, "BrandAddCampaings"), {
//       todo: input,
//       timestamp: serverTimestamp(),
//     });
//     setInput("");
//   };

//   return (
//     <>
//       <div className="App">
//         <h2> TODO List App</h2>
//         <form>
//           <TextField
//             id="outlined-basic"
//             label="Make Todo"
//             variant="outlined"
//             style={{ margin: "0px 5px" }}
//             size="small"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button variant="contained" color="primary" onClick={addTodo}>
//             Add Todo
//           </button>
//         </form>
//         <ul>
//           {todos.map((item) => (
//             <BrandAllCampaings key={item.id} arr={item} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default BrandCampaings;
import React, { useState, useEffect } from "react";
// import BrandAllCampaigns from "./BrandAllCampaigns"; // Corrected import statement
import BrandAllCampaigns from "./BrandAllCampaings";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { Button, Box, TextField } from "@mui/material";
import BrandSideBar from "./BrandSideBar";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebaseConfig";

const BrandCampaigns = () => {
  const [createCampaigns, setCreateCampaigns] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [reach, setReach] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const fetchCreateCampaigns = async () => {
    const q = collection(db, "brandnewcampaigns");
    const snapshot = await getDocs(q);
    const campaignsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCreateCampaigns(campaignsData);
  };

  useEffect(() => {
    fetchCreateCampaigns();
  }, []);

  const addCreateCampaign = async (e) => {
    e.preventDefault();
    const q = collection(db, "brandnewcampaigns");
    await addDoc(q, {
      image: image,
      title: title,
      description: description,
      price: price,
      reach: reach,
      timestamp: serverTimestamp(),
    });
    setImage("");
    setTitle("");
    setDescription("");
    setPrice("");
    setReach("");
    fetchCreateCampaigns();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (image) {
      const storageRef = ref(storage, `/images/${Date.now()}${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track upload progress if needed
        },
        (error) => {
          console.error("Error uploading image: ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // Now you can save the downloadURL to the database
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <BrandSideBar />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={openPopup}>
            Create New Campaigns
          </Button>
        </div>
        {isPopupOpen && (
          <div className="popup-overlay fixed inset-0 flex items-center justify-center">
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 8,
                borderRadius: 4,
                p: 4,
              }}
            >
              <Button onClick={closePopup}>Close</Button>
              <h2>Create Campaign</h2>
              <form onSubmit={addCreateCampaign}>
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  id="description"
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                  id="price"
                  label="Price"
                  variant="outlined"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  id="reach"
                  label="Reach"
                  variant="outlined"
                  value={reach}
                  onChange={(e) => setReach(e.target.value)}
                />
                <input type="file" onChange={handleImageChange} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpload}
                >
                  Upload Image
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Create Campaign
                </Button>
              </form>
            </Box>
          </div>
        )}
        <ul>
          {createCampaigns.map((item) => (
            <BrandAllCampaigns
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              reach={item.reach}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BrandCampaigns;
