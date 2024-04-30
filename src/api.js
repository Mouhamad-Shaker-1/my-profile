
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy } from "firebase/firestore/lite";

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

    try {
        const q = query(collectionProjectsRef, orderBy("date", "desc"))  
        const ProjectsSnapshot = await getDocs(q);
    
        const dataProjects = ProjectsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return dataProjects
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw {
            message: error.message,
            status: "Failed to fetch data",
            statusText: "Sorry, something is wrong. Make sure you are connected to the Internet, or if you are from Syria, you should open a VPN"
        }; 
    }

}

export async function getProject(name) {
    try {
        const q = query(collectionProjectsRef, where('name', '==', name))
        const projectSnapshot = await getDocs(q)
    
        return {
            ...projectSnapshot.docs[0].data(),
            id: projectSnapshot.id
        }
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw {
            message: error.message,
            status: "Failed to fetch data",
            statusText: "Sorry, something is wrong. Make sure you are connected to the Internet, or if you are from Syria, you should open a VPN"
        }; 
    }
}