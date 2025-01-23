import { redirect } from "next/navigation";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated)redirect('/api/auth/login');

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Welcome to your profile</h2>
        </div>
    );
};

export default Profile;