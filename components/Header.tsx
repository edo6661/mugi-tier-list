import React, { useEffect, useState } from "react";
import AddUser from "./user/AddUser";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

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
            <UserButton />
            <Link href="/sign-in">Login Clerk</Link>
          </>
        )}
        <AddUser />
      </nav>
    </header>
  );
};

export default Header;
