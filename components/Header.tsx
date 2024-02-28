import React from "react";
import AddUser from "./user/AddUser";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/tierlists">Tierlists</Link>
        <Link href="/add-tierlist">Add Tierlist</Link>
        <AddUser />
      </nav>
    </header>
  );
};

export default Header;
