import {
  collection,
  doc,
  setDoc,
  getDocs,
  Timestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/config";
const addData = (obj) => {
  addDoc(collection(db, "projects"), obj);
  // console.log(collection(db, "projects"));
};
export const getData = async () => {
  const projectsQuery = query(collection(db, "projects"), orderBy("title"));
  const response = await getDocs(projectsQuery);
  const data = await response.docs.map(async (item) => {
    const itemData = item.data();
    const obj = { ...itemData, id: item.id };
    return obj;
  });
  // Promise.all(data).then((values) => {
  //   console.log(values);
  // });
  return data;
};

export default addData;
