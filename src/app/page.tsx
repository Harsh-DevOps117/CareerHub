"use client";
import React, { useRef } from "react";
import Hero from "./Components/Hero";
import Job from "./Components/Job";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Link from "next/link";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Briefcase } from "lucide-react";
const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-w-screen min-h-screen bg-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Career<span className="text-green-500">HUB</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollTo(heroRef)}
            className="text-black font-bold hover:text-green-500 text-sm font-medium"
          >
            Hero
          </button>
          <button
            onClick={() => scrollTo(jobRef)}
            className="text-black font-bold hover:text-green-500 text-sm font-medium"
          >
            Job
          </button>
          <button
            onClick={() => scrollTo(aboutRef)}
            className="text-black font-bold hover:text-green-500 text-sm font-medium"
          >
            About
          </button>
          <Link
            className="text-black font-bold hover:text-green-500 text-sm font-medium"
            href={"/listjob"}
          >
            List The Job
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={jobRef}>
        <Job />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
