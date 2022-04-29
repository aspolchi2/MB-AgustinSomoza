import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirebase = (base, cat) => {
  const [firebase, setFirebase] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true);
      const docRef = collection(db, base);
      const q = cat ? query(docRef, where ("category", "==", cat)):
      docRef
    getDocs(q)
      .then((data) => {
        setFirebase(
          data.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(setIsLoading(false));
  }, [base, cat, isLoading]);

  return { firebase, isLoading };
};

export default useFirebase;
