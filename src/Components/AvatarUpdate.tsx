import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AvatarUpdate() {
  const { userId } = await auth();

  let currentStatus = "";
  if (userId) {
    const existing = await db.query(
      `SELECT status FROM status WHERE clerk_id = $1`,
      [userId]
    );

    currentStatus = existing.rows[0]?.status ?? "";
  }

  async function handleSubmit(formData: FormData) {
    "use server";

    const status = formData.get("status") as string | null;
    const clerk_id = userId;

    const loginData = await db.query(
      `SELECT username FROM login WHERE clerk_id = $1`,
      [clerk_id]
    );

    const username = loginData.rows[0].username;

    await db.query(
      `INSERT INTO status (username, status, clerk_id) VALUES ($1, $2, $3) ON CONFLICT (clerk_id) DO UPDATE SET username = EXCLUDED.username, status = EXCLUDED.status`,
      [username, status, clerk_id]
    );

    revalidatePath(`/user/${userId}`);

    if (userId) {
      redirect(`/allusers`);
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <fieldset>
          <div className="FormContent">
            <label htmlFor="status"></label>
            <input
              type="text"
              name="status"
              required
              placeholder={currentStatus}
            />
          </div>
        </fieldset>
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
}
