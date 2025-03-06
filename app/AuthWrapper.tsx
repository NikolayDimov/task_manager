"use client";

import { useAuth } from "@clerk/nextjs";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { isSignedIn } = useAuth();

    return (
        <>
            {isSignedIn && <Sidebar />}
            <div className="w-full">{children}</div>
        </>
    );
}
