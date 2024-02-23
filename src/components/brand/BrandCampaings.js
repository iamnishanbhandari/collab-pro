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
import BrandAllCampaings from "./BrandAllCampaings";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { TextField, Button } from "@mui/material";
import { db } from "../Firebase/firebaseConfig";

const BrandCampaings = () => {
  const q = collection(db, "brandnewcampaings");
  const [createcampaings, setCreatecampaings] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [reach, setReach] = useState();

  const [isPopupOpen, setIsPopOpen] = useState(false);

  const openPopup = () => {
    setIsPopOpen(true);
  };

  const closePopup = () => {
    setIsPopOpen(false);
  };

  useEffect(() => {
    const fetchcreatecampaings = async () => {
      const snapshot = await getDocs(q);
      setCreatecampaings(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    };
    fetchcreatecampaings();
  }, [q]);

  const addcreatecampaings = async (e) => {
    e.preventDefault();
    await addDoc(q, {
      createcampaings: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
    const snapshot = await getDocs(q);
    setCreatecampaings(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        item: doc.data(),
      }))
    );
  };

  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={openPopup}>
          Create New Campaings
        </Button>
      </div>
      {isPopupOpen && (
        <div className="border popup-overlay fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <span className=" flex justify-end -m-4 text-3xl  text-gray-500">
              <button onClick={closePopup}>&times;</button>
            </span>
            <div className="App">
              <h2>Create Campaings</h2>
              <form>
                <div className="flex flex-col ">
                  <div>
                    <div className=" mt-5">
                      <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        style={{ margin: "0px 5px" }}
                        size="small"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className=" mt-5">
                      <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        style={{ margin: "0px 5px" }}
                        size="small"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className=" mt-5">
                      <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        style={{ margin: "0px 5px" }}
                        size="small"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className=" mt-5">
                      <TextField
                        id="outlined-basic"
                        label="Reach"
                        variant="outlined"
                        style={{ margin: "0px 5px" }}
                        size="small"
                        value={reach}
                        onChange={(e) => setReach(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className=" mt-5">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={addcreatecampaings}
                    >
                      Create Campaings
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <ul>
        {createcampaings.map((item) => (
          <BrandAllCampaings key={item.id} arr={item} />
        ))}
      </ul>
    </>
  );
};

export default BrandCampaings;
