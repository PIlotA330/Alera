"use client"
import Image from "next/image";
import { Button, TextField } from '@mui/material';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="w-[100%] bg-blue-500 top-0">
      </header>
      <main className="p-10">
        <div className="gap-[15rem]">
        <div className="flex flex-col">
          <div className="flex flex row gap-3 items-center">
            <p className="text-3xl">username or email</p>
            <p className="text-[gray]">New to Alera? Create Account </p>
          </div>
          <TextField id="outlined-basic" label="" variant="outlined" />
        </div>

          <div>
          <div className="flex flex row gap-3 items-center">
            <p className="text-3xl">password</p>
            <p className="text-[gray]">forgot password? </p>
          </div>
          <TextField id="outlined-basic" label="" variant="outlined" />
          </div>
        </div>
        <Link href="/dashboard">
        <Button variant="contained">Login</Button>
        </Link>
      </main>
    </>
  );
}
