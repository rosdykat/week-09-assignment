import { clerkSignUpId } from "@/app/Types/FormData";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export default function SignUpForm(props: clerkSignUpId) {
  const signUpId = props.clerkId;

  async function handleSubmit(formData: FormData) {
    "use server";

    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;
    const clerk_id = props.clerkId;

    db.query(
      `INSERT INTO login (username, password, clerk_id) VALUES ($1, $2, $3)`,
      [username, password, clerk_id]
    );

    revalidatePath("/");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Sign Up!</legend>
          <div className="FormContent">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              required
              placeholder="password"
            />
            <input type="hidden" name="clerk_id" value={signUpId} />
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
