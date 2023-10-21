"use client";
import React from "react";
import GlobalSearch from "../navbar/GlobalSearch";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] 
      grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="searchIcon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        value=""
        placeholder={placeholder}
        onClick={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700 
        border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
