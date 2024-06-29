} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {doc, setDoc } from "firebase/firestore";
import toast from 'react-hot-toast';


export const AuthContext = createContext();