"use client"

import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function GitHubButton() {
    const supabase = createClientComponentClient<Database>();

    async function handleSignIn() {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }

    return (
        <button onClick={handleSignIn}
            className="hover:bg-gray-800 p-8 rounded-xl">
            <Image src="/github-mark-white.png" alt="Github Logo" width={100} height={100} />

        </button>
    ) 
}