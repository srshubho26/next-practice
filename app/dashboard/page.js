import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect("/api/auth/login");

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center'>Hello {user.given_name} {user.family_name}</h2>
        </div>
    );
};

export default Dashboard;