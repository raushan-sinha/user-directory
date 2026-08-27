'use client';

import { User } from "@/types/user.types";

//todo: Fetch Users data form JSON Placeholder -
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) throw new Error('Failed to fetch Users Data');
        const data: User[] = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error', error);
    }
}

getUsers();


export default function Home() {
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

                    {/* CTA */}
                    <a
                        href="#users"
                        className="mt-8 inline-flex items-center rounded-xl
                       bg-cyan-400 px-6 py-3
                       text-sm font-semibold text-slate-950
                       transition hover:bg-cyan-300
                       focus:outline-none focus:ring-2
                       focus:ring-cyan-400 focus:ring-offset-2
                       focus:ring-offset-slate-950"
                    >
                        Browse Users
                        <span className="ml-2">↓</span>
                    </a>

                </div>
            </section>

            {/* Users section will come here */}
            <section
                id="users"
                className="px-5 pb-16 sm:px-8 lg:px-12"
            >
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Users
                    </h2>

                    <p className="mt-2 text-sm text-slate-400 sm:text-base">
                        Browse all available users.
                    </p>

                    {/* User cards will come here */}
                </div>
            </section>
        </main>
    );
}