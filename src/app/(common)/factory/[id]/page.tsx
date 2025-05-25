import { auth } from "@/auth";
import FactoryIDPage from "@/components/Factory/id";
import FactoryIdNotLoggedIn from "@/components/Factory/id-not-logged";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  return (
    <>{session?.user ? <FactoryIDPage id={id} /> : <FactoryIdNotLoggedIn />}</>
  );
}
