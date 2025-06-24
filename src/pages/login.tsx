import AuthLayout from "@/components/layouts/AuthLayout";
import React from "react";
import { Lock, User } from "lucide-react";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import { useIsDesktop } from "@/components/customhooks/hook";
import Link from "next/link";

export default function login() {
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <div className="h-screen w-screen bg-radial-[at_50%_25%] from-blue-500 to-blue-800 to-75% flex justify-center items-center">
      <AuthLayout title="Login">
        <form action="" className="flex flex-col gap-3 mt-7">
          <div className="flex items-center bg-gray-300 rounded-lg px-3">
            <label htmlFor="email">
              <User />
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className=" bg-gray-300 w-full  h-12 active:outline-none focus:outline-none px-3"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center bg-gray-300 rounded-lg px-3">
            <label htmlFor="password">
              <Lock />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=" bg-gray-300 w-full  h-12 active:outline-none focus:outline-none px-3"
              placeholder="Password "
            />
          </div>
        </form>
        <Link href="/admin/dashboard">
          <ButtonPrimary
            ClassName="w-full bg-blue-700 py-3 text-white mt-10"
            onClick={() => {}}
          >
            Login
          </ButtonPrimary>
        </Link>
      </AuthLayout>
    </div>
  ) : (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>Silahkan Menggunakan Device Desktop</h1>
    </div>
  );
}
