import { collection, doc, setDoc, Timestamp, addDoc } from "firebase/firestore";
import db from "../firebase/config";
const addData = (obj) => {
  addDoc(collection(db, "projects"), obj);
  // console.log(collection(db, "projects"));
};

export default addData;
