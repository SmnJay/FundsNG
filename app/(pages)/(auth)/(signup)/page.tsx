
import { getServerSession } from "next-auth";
import SignUpForm from "../../../components/Forms/SignUpForm";
import { authOptions } from "../../api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <SignUpForm />
  );
}