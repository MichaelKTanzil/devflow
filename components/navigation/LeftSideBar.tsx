import Image from "next/image";
import Link from "next/link";
import React from "react";

import { signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";

const LeftSideBar = async () => {
  const session = await auth();

  return (
    <section className="no-scrollbar background-light900_dark200 sticky flex min-h-full flex-col justify-between gap-6 overflow-y-auto p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col gap-6">
        <NavLinks />
      </div>

      {!session?.user ? (
        <div className="flex flex-col gap-3">
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                width={20}
                height={20}
                alt="sign-up"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient text-sm max-lg:hidden">
                Log In
              </span>
            </Link>
          </Button>

          <Button
            className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px]
                w-full rounded-lg border px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                width={20}
                height={20}
                alt="sign-up"
                className="invert-colors lg:hidden "
              />
              <span className="text-sm max-lg:hidden">Sign Up</span>
            </Link>
          </Button>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="flex w-full flex-row items-center justify-start gap-4 px-4 py-3 shadow-none"
          >
            <Image
              src="/icons/log-out.svg"
              width={20}
              height={20}
              alt="log-out"
              className="invert-colors"
            />
            <p className="text-dark400_light900 text-lg max-lg:hidden">
              Logout
            </p>
          </button>
        </form>
      )}
    </section>
  );
};

export default LeftSideBar;
