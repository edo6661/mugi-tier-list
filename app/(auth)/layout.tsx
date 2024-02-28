import type { Metadata } from "next";
import { Logo } from "./_components/logo";

export const metadata: Metadata = {
  title: "Auth MugiChan",
  description: "Auth Page Mugichawn",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fl-col-center mt-8 h-screen gap-4">
      <Logo />
      {children}
    </div>
  );
}
