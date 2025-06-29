// TODO: include the user's personal details
// auth() --> {userId}
// currentUser() --> firstName, lastName, emailAddresses[0].emailAddress
import AvatarComponent from "@/Components/Avatar";

//we have access to the clerk userId
import { auth } from "@clerk/nextjs/server";
export default async function UserProfilePage() {
  //we have destructured (extracted) the userId value from auth
  const { userId } = await auth();
  console.log({ userId });
  return (
    <div className="backgroundBox">
      <AvatarComponent />
    </div>
  );
}
