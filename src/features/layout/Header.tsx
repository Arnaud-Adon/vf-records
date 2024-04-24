import { cx } from "class-variance-authority";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

import Link from "next/link";
import { SignInButton } from "./SignInButton";
import SignUpButton from "./SignUpButton";

const inter = Inter({ subsets: ["cyrillic"] });

export const Header = async (): Promise<ReactElement> => {
  return (
    <div
      className={cx(
        "absolute w-full p-4",
        "flex items-center justify-between gap-4",
        "border-b-1 bg-slate-700 shadow-md"
      )}
    >
      <Link href="/">
        <h1
          className={
            (inter.className,
            cx(
              "text-2xl",
              "bg-gradient-to-r from-gray-500 to-orange-400 text-transparent bg-clip-text"
            ))
          }
        >
          Versus figthing records
        </h1>
      </Link>
      <div className="flex space-x-4">
        <SignInButton />
        <SignUpButton />
      </div>
    </div>
  );
};
