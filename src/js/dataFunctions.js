import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import { db } from "../firebase/config";
const addData = (obj) => {
  addDoc(collection(db, "projects"), obj);
};
export const getImgUrl = async (fbRef) => {
  const rf = ref(storage, fbRef);
  const url = await getDownloadURL(rf);
  return url;
};

export const getData = async () => {
  const projectsQuery = query(collection(db, "projects"), orderBy("title"));
  const response = await getDocs(projectsQuery);
  const data = await response.docs.map((item) => {
    const itemData = item.data();
    const obj = { ...itemData, id: item.id };
    return obj;
  });
  return data;
};

export default addData;
