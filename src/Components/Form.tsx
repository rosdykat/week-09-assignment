// import { db } from "@/utils/dbConnection";
// import { revalidatePath } from "next/cache";

// export default function SignUpForm(props) {
//   const signUpId = props.location;

//   async function handleSubmit(formData) {
//     "use server";

//     const username = formData.get("username");
//     const password = formData.get("password");
//     const clerkId = props.location;

//     db.query(
//       `INSERT INTO login (username, password, clerkId) VALUES ($1, $2, $3)`,
//       [username, password, clerkId]
//     );

//     revalidatePath("/");
//   }

//   return (
//     <div>
//       <form action={handleSubmit}>
//         <fieldset>
//           <legend>Login</legend>
//           <div className="FormContent">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               name="username"
//               required
//               placeholder="username"
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type="text"
//               name="password"
//               required
//               placeholder="password"
//             />
//             <input type="hidden" name="clerkId" value={signUpId} />
//           </div>
//         </fieldset>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
