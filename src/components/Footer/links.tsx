"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const footerPaths = [
  { title: "Home", href: "/" },
  { title: "Factory", href: "/factory" },
  { title: "Idea", href: "/idea" },
  { title: "Sign Up", href: "/signup" },
];

const loggedInfooterPaths = [
  { title: "Home", href: "/" },
  { title: "Factory", href: "/factory" },
  { title: "Idea", href: "/idea" },
];
const FooterLinks = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-4 pb-6">
      {session ? (
        <>
          {loggedInfooterPaths.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}&nbsp;
              {index !== loggedInfooterPaths.length - 1 && "|"}
            </Link>
          ))}
        </>
      ) : (
        <>
          {footerPaths.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}&nbsp;{index !== footerPaths.length - 1 && "|"}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default FooterLinks;
