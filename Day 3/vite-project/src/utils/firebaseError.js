export const firebaseErrorMessage = (errorCode)=>{
    switch (errorCode) {
      case "auth/invalid-credential":
        return "Invalid Email or Password";

      case "auth/user-not-found":
        return "User not found";

      case "auth/wrong-password":
        return "Incorrect Password";

      case "auth/email-already-in-use":
        return "Email already registered";

      case "auth/weak-password":
        return "Password should be at least 6 characters";

      default:
        return "Something went wrong";
    }



}