import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">CultureClan</h1>
          <div className="space-x-6 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/join">Join</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto p-6">{children}</main>

      <footer className="bg-gray-900 text-gray-100 py-6 mt-10">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} CultureClan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
