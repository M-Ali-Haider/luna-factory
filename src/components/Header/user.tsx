"use client";
import React from "react";
import { User2 as User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

const HeaderUser = ({ email }: { email: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="hidden md:block bg-white rounded-full w-10 h-10 cursor-pointer">
          <div className=" w-fit mx-auto h-full flex items-center">
            <User />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div>Signed in as</div>
          <div>{email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/member-details"}>Member Details</Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>My Settings</DropdownMenuItem>
        <DropdownMenuItem>Team Settings</DropdownMenuItem>
        <DropdownMenuItem>Analytics</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
        <DropdownMenuItem>Configurations</DropdownMenuItem>
        <DropdownMenuItem>Help & Feedback</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderUser;
