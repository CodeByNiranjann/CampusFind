// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from "firebase/auth";

// import { auth } from "./firebase";

// export function isValidKonguEmail(email) {
//   const value = email.trim().toLowerCase();

//   return /^[a-z0-9._%+-]+@kongu\.edu$/.test(value);
// }

// export async function registerUser(email, password) {
//   const normalizedEmail = email.trim().toLowerCase();

//   if (!isValidKonguEmail(normalizedEmail)) {
//     throw new Error(
//       "Please use your Kongu Engineering College email."
//     );
//   }

//   const userCredential =
//     await createUserWithEmailAndPassword(
//       auth,
//       normalizedEmail,
//       password
//     );

//   await sendEmailVerification(userCredential.user);

//   return userCredential.user;
// }

// export async function loginUser(email, password) {
//   const normalizedEmail = email.trim().toLowerCase();

//   if (!isValidKonguEmail(normalizedEmail)) {
//     throw new Error(
//       "Please use your Kongu Engineering College email."
//     );
//   }

//   const userCredential =
//     await signInWithEmailAndPassword(
//       auth,
//       normalizedEmail,
//       password
//     );

//   if (!userCredential.user.emailVerified) {
//     throw new Error(
//       "Please verify your Kongu email before logging in."
//     );
//   }

//   return userCredential.user;
// }

// export async function resetPassword(email) {
//   const normalizedEmail = email.trim().toLowerCase();

//   if (!isValidKonguEmail(normalizedEmail)) {
//     throw new Error(
//       "Please use your Kongu Engineering College email."
//     );
//   }

//   await sendPasswordResetEmail(
//     auth,
//     normalizedEmail
//   );
// }

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./firebase";

export function isValidKonguEmail(email) {
  const value = email.trim().toLowerCase();

  return /^[a-z0-9._%+-]+@kongu\.edu$/.test(value);
}

export async function registerUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isValidKonguEmail(normalizedEmail)) {
    throw new Error(
      "Please use your Kongu Engineering College email."
    );
  }

  console.log(
    "Calling Firebase createUserWithEmailAndPassword..."
  );

  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      normalizedEmail,
      password
    );

  console.log(
    "Firebase user created:",
    userCredential.user.uid
  );

  await sendEmailVerification(userCredential.user);

  console.log("Verification email requested.");

  return userCredential.user;
}

export async function loginUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isValidKonguEmail(normalizedEmail)) {
    throw new Error(
      "Please use your Kongu Engineering College email."
    );
  }

  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      normalizedEmail,
      password
    );

  if (!userCredential.user.emailVerified) {
    throw new Error(
      "Please verify your Kongu email before logging in."
    );
  }

  return userCredential.user;
}

export async function resetPassword(email) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isValidKonguEmail(normalizedEmail)) {
    throw new Error(
      "Please use your Kongu Engineering College email."
    );
  }

  await sendPasswordResetEmail(
    auth,
    normalizedEmail
  );
}