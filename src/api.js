
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_2X9z4cArD0vJjHGDg_vcJFLpnyPnP7A",
  authDomain: "my-profile-b306d.firebaseapp.com",
  projectId: "my-profile-b306d",
  storageBucket: "my-profile-b306d.appspot.com",
  messagingSenderId: "140129679767",
  appId: "1:140129679767:web:2e87f70cde06dd67b9ecd2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionProjectsRef = collection(db, 'projects')

export async function getProjects() {

    const ProjectsSnapshot = await getDocs(collectionProjectsRef);
    const dataProjects = ProjectsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataProjects
}

export async function getProject(id) {
    const projectRef = doc(db, 'projects', id)
    const projectSnapshot = await getDoc(projectRef)

    return {
        ...projectSnapshot.data(),
        id: projectSnapshot.id
    }
}