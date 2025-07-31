import { auth } from "../auth";

export const metadata = {
  title: "Your account",
};

async function accountpage() {
  const session = await auth();
  const name = session.user.name || session.user.email;

  return <h1>Welcome {name}</h1>;
}

export default accountpage;
