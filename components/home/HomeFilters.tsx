"use client";
import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const Active = "";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex ">
      {HomePageFilters.map(item => (
        <Button
          className={` body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            Active === item.value
              ? "bg-primary-100"
              : "dark:text-light dark:hover bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300"
          }`}
          key={item.value}
          onClick={() => {}}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
