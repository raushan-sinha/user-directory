'use client';

import { User } from "@/types/user.types";
import Link from "next/link";
import { useEffect, useState } from "react";

//todo: Fetch Users data form JSON Placeholder -



export default function Home() {
    const [users, setUsers] = useState<User[]>([]);

    async function getUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) throw new Error('Failed to fetch Users Data');
            const data: User[] = await response.json();
            console.log('Data:', data);
            setUsers(data)
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-4xl text-center">

                    {/* Small Badge */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-400 sm:text-sm">
                        Simple • Fast • Responsive
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        User Directory
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                        Explore our user directory and discover detailed
                        information about each user through a simple,
                        clean, and responsive interface.
                    </p>

                </div>
            </section>

            {/* Users section will come here */}
            <section id="users" className="px-5 pb-16 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">

                    {/* Section Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Users
                        </h2>

                        <p className="mt-2 text-sm text-slate-400 sm:text-base">
                            Browse all available users.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {users.map((user) => (
                            <article
                                key={user.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5"
                            >

                                {/* User Header */}
                                <div className="flex items-center justify-between gap-4">

                                    <div className="flex min-w-0 items-center gap-4">

                                        {/* Avatar */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg font-bold text-cyan-400 ring-1 ring-cyan-400/20">
                                            {user.name.charAt(0)}
                                        </div>

                                        {/* Name */}
                                        <div className="min-w-0">

                                            <h3 className="truncate text-lg font-semibold text-white">
                                                {user.name}
                                            </h3>

                                            <p className="mt-0.5 truncate text-sm text-cyan-400">
                                                @{user.username}
                                            </p>

                                        </div>

                                    </div>

                                    {/* ID */}
                                    <span className="shrink-0 text-xs font-medium text-slate-600">
                                        #{user.id}
                                    </span>

                                </div>

                                {/* Divider */}
                                <div className="my-6 h-px bg-slate-800" />

                                {/* Contact Information */}
                                <div className="space-y-4">

                                    {/* Email */}
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                            Email
                                        </p>

                                        <p className="mt-1 truncate text-sm text-slate-300">
                                            {user.email}
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                            Phone
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300">
                                            {user.phone}
                                        </p>
                                    </div>

                                </div>

                                {/* Button */}
                                <Link
                                    href={`/users/${user.id}`}
                                    type="button"
                                    className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-slate-950"
                                >
                                    View User Details
                                </Link>

                            </article>
                        ))}

                    </div>

                </div>
            </section>
        </main>
    );
}