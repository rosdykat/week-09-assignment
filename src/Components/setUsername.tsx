import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignInForm() {
  const { userId } = await auth();

  async function handleSubmit(formData: FormData) {
    "use server";

    const username = formData.get("username") as string | null;
    const clerk_id = userId;

    await db.query(`INSERT INTO login (username, clerk_id) VALUES ($1, $2)`, [
      username,
      clerk_id,
    ]);

    revalidatePath(`/user/${userId}`);

    if (userId) {
      redirect(`/user/${userId}`);
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <div className="FormContent">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
            />
            <input type="hidden" name="clerk_id" value={userId ?? ""} />
          </div>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
