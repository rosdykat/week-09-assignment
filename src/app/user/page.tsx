//we have access to the clerk userId
import SignInForm from "@/Components/setUsername";
// import { auth } from "@clerk/nextjs/server";
export default async function UserProfilePage() {
  //we have destructured (extracted) the userId value from auth
  // const { userId } = await auth();
  return (
    <div className="backgroundBox">
      <h1>Please enter your username!</h1>
      <div>
        <SignInForm />
      </div>
      {/* This is the userId value that clerk assigns to a user when they sign up */}
      {/* we can store this value in a database to relate it to posts, comments... */}
      {/* <p>{userId}</p> */}
    </div>
  );
}
