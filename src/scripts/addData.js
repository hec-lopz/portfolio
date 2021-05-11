import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

const addData = (
  db,
  { title, description, gh_url, image, live_url, technologies = [] }
) => {
  const new_id = title.slice(0, 10).replace(" ", "-").toLowerCase();

  const data = {
    id: new_id,
    title: title,
    description: description,
    ghurl: gh_url,
    image: image,
    liveurl: live_url,
    technologies: technologies,
    createdOn: Timestamp.fromDate(new Date()),
  };

  setDoc(doc(db, "projects", data.id), data);
};

export default addData;
