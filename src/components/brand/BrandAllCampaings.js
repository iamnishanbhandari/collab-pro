// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import React, { useState, useEffect } from "react";
// import { auth, db } from "../Firebase/firebaseConfig";
// // import DeleteArticle from "./DeleteArticle";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// // import { Avatar } from "@mui/material";

// export default function BrandAllCampaings() {
//   const [articles, setArticles] = useState([]);
//   const [user] = useAuthState(auth);
//   useEffect(() => {
//     const articleRef = collection(db, "BrandNewCampaings");
//     const q = query(articleRef, orderBy("createdAt", "desc"));
//     onSnapshot(q, (snapshot) => {
//       const articles = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setArticles(articles);
//       console.log(articles);
//     });
//   }, []);
//   return (
//     <div>
//       {articles.length === 0 ? (
//         <p>No Campaings found!</p>
//       ) : (
//         articles.map(
//           ({
//             id,
//             // title,
//             description,
//             imageUrl,
//             createdAt,
//             createdBy,
//             // userId,
//             // likes,
//             // comments,
//           }) => (
//             <div key={id}>
//               <div style={{ height: "80vh" }}>
//                 <div
//                   style={{
//                     position: "relative",
//                     top: "30px",
//                     width: "35vw",
//                     minHeight: "30vh",
//                     maxHeight: "fit-content",
//                     margin: "auto",
//                     boxShadow: "rgb(145 158 171 / 24%) 0px 8px 16px 0px",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       margin: "20px",
//                     }}
//                   >
//                     <div>
//                       {createdBy && (
//                         <span
//                           style={{
//                             display: "flex",
//                             padding: "5px 0px 0px 0px",
//                             fontSize: "larger",
//                             alignItems: "center",
//                             gap: "10px",
//                           }}
//                         >
//                           {/* <Avatar></Avatar> */}
//                           <label> {createdBy}</label>
//                         </span>
//                       )}
//                     </div>
//                     {/* <div>
//                       {user && user.uid === userId && (
//                         <DeleteArticle id={id} imageUrl={imageUrl} />
//                       )}
//                     </div> */}
//                   </div>
//                   <div style={{ margin: "10px 0px 0px 10px", padding: "0px" }}>
//                     {/* <h3>{title}</h3> */}
//                     <p
//                       style={{
//                         fontSize: "12px",
//                         color: "grey",
//                         margin: "-30px 0px 0px 50px",
//                       }}
//                     >
//                       {createdAt.toDate().toDateString()}
//                     </p>
//                     <p
//                       style={{
//                         fontSize: "18px",
//                         textAlign: "start",
//                         marginLeft: "20px",
//                       }}
//                     >
//                       {description}
//                     </p>
//                   </div>

//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Link to={`/article/${id}`}>
//                       <img
//                         src={imageUrl}
//                         alt="title"
//                         style={{
//                           maxHeight: "40vh",
//                           maxWidth: "100%",
//                         }}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         )
//       )}
//     </div>
//   );
// }

import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig.js";

const BrandAllCampaings = ({ arr }) => {
  return (
    <List className="createcampaings__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText
          primary={arr.item.createcampaings}
          secondary={arr.item.createcampaings}
        />
      </ListItem>
      <p
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, "brandnewcampaings", arr.id));
        }}
      >
        delete
      </p>
    </List>
  );
};
export default BrandAllCampaings;
