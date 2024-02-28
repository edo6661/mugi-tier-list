import React from "react";
import AddUser from "./user/AddUser";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
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
        <AddUser />
      </nav>
    </header>
  );
};

export default Header;
