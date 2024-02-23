// import React, { useState } from "react";
// import { Timestamp, collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage, auth, db } from "../Firebase/firebaseConfig";
// import { toast } from "react-toastify";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import { Link } from "react-router-dom";
// // import { Box, Button } from "@material-ui/core";

// export default function BrandAddCampaings() {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const openPopup = () => {
//     setPopupOpen(true);
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

//   const [user] = useAuthState(auth);
//   const [formData, setFormData] = useState({
//     // title: "",
//     description: "",
//     image: "",
//     createdAt: Timestamp.now().toDate(),
//   });

//   const [progress, setProgress] = useState(0);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handlePublish = () => {
//     if (!formData.description || !formData.image) {
//       // alert("Please fill all the fields");
//       console.log("fill all bsdk");
//       return;
//     }

//     const storageRef = ref(
//       storage,
//       `/images/${Date.now()}${formData.image.name}`
//     );

//     const uploadImage = uploadBytesResumable(storageRef, formData.image);

//     uploadImage.on(
//       "state_changed",
//       (snapshot) => {
//         const progressPercent = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progressPercent);
//       },
//       (err) => {
//         console.log(err);
//       },
//       () => {
//         setFormData({
//           ...formData,
//           // title: "",
//           description: "",
//           image: "",
//         });

//         getDownloadURL(uploadImage.snapshot.ref).then((url) => {
//           const articleRef = collection(db, "BrandNewCampaings");
//           addDoc(articleRef, {
//             // title: formData.title,
//             description: formData.description,
//             imageUrl: url,
//             createdAt: Timestamp.now().toDate(),
//             createdBy: user.displayName,
//             userId: user.uid,
//             // likes: [],
//             // comments: [],
//           })
//             .then(() => {
//               toast("Article added successfully", { type: "success" });
//               setProgress(0);
//             })
//             .catch((err) => {
//               toast("Error adding article", { type: "error" });
//             });
//         });
//       }
//     );
//   };

//   return (
//     <>
//       <div>
//         <button
//           className="border border-solid border-red-900 ml-36 bg-gray-800 flex w-90 p-2  rounded-xl text-white hover:bg-blue mt-2"
//           onClick={openPopup}
//         >
//           Create New Campaings
//         </button>
//       </div>

//       <div className="flex gap-5 ">
//         {/* <div>
//           <BrandSideBar />
//         </div> */}
//         {isPopupOpen && (
//           <div className="border popup-overlay fixed inset-0 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <span className=" flex justify-end -m-4 text-3xl  text-gray-500">
//                 <button onClick={closePopup}>&times;</button>
//               </span>
//               <div className=" mb-4">
//                 {/* <div className="flex justify-center">
//                   <img src={Nima} alt="img"></img>
//                 </div> */}
//                 <div className="flex gap-10  justify-center">
//                   <div>
//                     {/* <button className="font-semibold flex justify-center ">
//                       Add Image{" "}
//                     </button> */}
//                     <label htmlFor="">Image</label>
//                     <br />
//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       className="form-control"
//                       onChange={(e) => handleImageChange(e)}
//                       style={{ fontSize: "15px" }}
//                     ></input>
//                   </div>
//                 </div>
//               </div>
//               <div className=" mb-4">
//                 {/* <div className="flex justify-center">
//                   <img src={Nima} alt="img"></img>
//                 </div> */}
//                 <div className="flex gap-16">
//                   <div>
//                     <label className="font-semibold flex justify-center ">
//                       Name:
//                     </label>
//                   </div>
//                   <div>
//                     <input className="  justify-center text-center border border-solid border-gray-400 rounded-lg"></input>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-around gap-10">
//                 <div className="font-semibold ">Followers</div>
//                 <div className="flex gap-5 text-gray-600 w-96 text-sm">
//                   <div className="flex gap-2 ">
//                     {/* <div>
//                       <img src={instagram}></img>
//                     </div> */}
//                     <div>
//                       <span className="">53.0k</span>
//                     </div>
//                   </div>
//                   <div className="flex gap-2 ">
//                     {/* <div>
//                       <img src={tiktok}></img>
//                     </div> */}
//                     <div>
//                       <span className="">53.0k</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex  ">
//                 <div className="flex gap-10">
//                   <div>
//                     <label className="font-semibold flex justify-center ">
//                       Expertise:
//                     </label>
//                   </div>
//                   <div>
//                     <input className="  justify-center text-center border border-solid border-gray-400 rounded-lg"></input>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex">
//                 <div className="flex gap-10 mt-3">
//                   <div>
//                     <label
//                       className="font-semibold flex justify-center "
//                       onChange={(e) => handleChange(e)}
//                       value={formData.description}
//                     >
//                       About us:
//                     </label>
//                   </div>
//                   <div>
//                     <input className="  justify-center text-center border border-solid border-gray-400 rounded-lg"></input>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex ">
//                 <div className="flex gap-14 mt-2">
//                   <div>
//                     <label className="font-semibold flex justify-center ">
//                       Pricing:
//                     </label>
//                   </div>
//                   <div>
//                     <input className="  justify-center text-center border border-solid border-gray-400 rounded-lg"></input>
//                   </div>
//                 </div>
//               </div>

//               <div className=" flex justify-center  mt-4 border border-solid border-green-900">
//                 <button
//                   className="bg-blue-600 p-2 flex w-80 pl-20 rounded-xl text-white hover:bg-blue"
//                   onClick={handlePublish}
//                 >
//                   Create Campaings
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
