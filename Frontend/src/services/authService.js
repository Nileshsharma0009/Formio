import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// ============================
// GOOGLE LOGIN / SIGNUP (FIREBASE)
// ============================
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const result = await signInWithPopup(auth, provider);
  return result.user;
};

// ============================
// LOGOUT (FIREBASE)
// ============================
export const logoutUser = async () => {
  await signOut(auth);
};