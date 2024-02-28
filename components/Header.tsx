"use client";
import React, { useEffect, useState } from "react";
import AddUser from "./user/AddUser";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/clerk-react";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  return (
    <header className="container">
      <nav className="fl-itc justify-between">
        <Link href="/">Home</Link>
        <Link href="/tierlists">Tierlists</Link>
        <Link href="/add-tierlist">Add Tierlist</Link>
        <Link href="/register">Register</Link>
        <Link href="/login" className="">
          Login
        </Link>
        {isClient && (
          <>
            <UserButton afterSignOutUrl="/" />
            <SignedOut>
              <Link href="/sign-in">Login Clerk</Link>
            </SignedOut>
          </>
        )}
        <AddUser />
      </nav>
    </header>
  );
};

export default Header;
