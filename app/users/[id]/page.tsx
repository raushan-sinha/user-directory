import { User } from "@/types/user.types";
import Link from "next/link";

interface UserDetailsIdProps {
    params: Promise<{
        id: string
    }>
}

export default async function UserDetailsPage({ params }: UserDetailsIdProps) {
    const { id } = await params;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) throw new Error('Failed to Fetch User Specific Details');

        const user: User = await response.json();

        return (
            <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-12">
                <div className="mx-auto max-w-4xl">

                    {/* Back */}
                    <Link
                        href="/"
                        className="inline-flex text-sm font-medium text-slate-400 transition hover:text-cyan-400"
                    >
                        ← Back to Users
                    </Link>

                    {/* Profile Header */}
                    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/10">

                        <div className="p-6 sm:p-8">

                            {/* User Header */}
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex min-w-0 items-center gap-4">

                                    {/* Avatar */}
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl font-bold text-cyan-400 ring-1 ring-cyan-400/20">
                                        {user.name.charAt(0)}
                                    </div>

                                    {/* Name */}
                                    <div className="min-w-0">
                                        <h1 className="break-words text-2xl font-bold text-white sm:text-3xl">
                                            {user.name}
                                        </h1>

                                        <p className="mt-1 break-all text-sm text-cyan-400 sm:text-base">
                                            @{user.username}
                                        </p>
                                    </div>

                                </div>

                                {/* ID */}
                                <span className="w-fit rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-400">
                                    User #{user.id}
                                </span>

                            </div>

                        </div>

                        {/* Contact Information */}
                        <div className="border-t border-slate-800 p-6 sm:p-8">

                            <h2 className="text-lg font-semibold text-white">
                                Contact Information
                            </h2>

                            <div className="mt-5 grid gap-5 sm:grid-cols-2">

                                {/* Email */}
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Email
                                    </p>

                                    <p className="mt-2 break-all text-sm text-slate-300">
                                        {user.email}
                                    </p>
                                </div>

                                {/* Phone */}
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Phone
                                    </p>

                                    <p className="mt-2 break-words text-sm text-slate-300">
                                        {user.phone}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Address */}
                        <div className="border-t border-slate-800 p-6 sm:p-8">

                            <h2 className="text-lg font-semibold text-white">
                                Address
                            </h2>

                            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                                {/* Street */}
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Street
                                    </p>

                                    <p className="mt-2 break-words text-sm text-slate-300">
                                        {user.address.street}
                                    </p>
                                </div>

                                {/* City */}
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        City
                                    </p>

                                    <p className="mt-2 break-words text-sm text-slate-300">
                                        {user.address.city}
                                    </p>
                                </div>

                                {/* Zipcode */}
                                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Zipcode
                                    </p>

                                    <p className="mt-2 break-words text-sm text-slate-300">
                                        {user.address.zipcode}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Company */}
                        <div className="border-t border-slate-800 p-6 sm:p-8">

                            <h2 className="text-lg font-semibold text-white">
                                Company
                            </h2>

                            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/50 p-5">

                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Company Name
                                </p>

                                <p className="mt-2 text-base font-semibold text-white">
                                    {user.company.name}
                                </p>

                                <div className="my-4 h-px bg-slate-800" />

                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Catch Phrase
                                </p>

                                <p className="mt-2 break-words text-sm leading-6 text-slate-400">
                                    {user.company.catchPhrase}
                                </p>

                            </div>

                        </div>

                    </section>

                </div>
            </main>
        )
    } catch (error) {
        console.error('Error', error);

        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
            <div className="text-center">
                <h1 className="text-2xl font-bold">
                    Something went wrong
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                    Failed to load user details.
                </p>
            </div>
        </main>
    }
}