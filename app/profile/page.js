import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const Profile = async () => {
    const { getUser } = getKindeServerSession();

    const user = await getUser();
    if (!user) redirect('/api/auth/login');
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Hello {user.family_name}</h2>
            <h2 className="text-2xl font-semibold text-center">Welcome to your profile</h2>
        </div>
    );
};

export default Profile;