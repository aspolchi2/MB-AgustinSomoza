import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";


const OrderResume =  () => {
 const docRef = collection(db, "orders")
 const q = query(docRef, where('id', '==', '3FXTvu7zm3XjyAJsjNM9'))
 console.log(q);
 
}
export default OrderResume;


