"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  FileIcon,
  Hubspot,
  HumanIcon,
  SalesForce,
  Settings,
  Sheets,
} from "@/icons";

export const SkeletonOne = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100  dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
      <Card
        topIcon={<FileIcon className="size-4" />}
        title="Connect Data"
        description="Link CRMs, helpdesks, and APIs to give agents secure, role-based access."
        tags={[
          { text: "Salesforce", icon: <SalesForce className="size-3" /> },
          { text: "HubSpot", icon: <Hubspot className="size-3" /> },
          { text: "Sheets", icon: <Sheets className="size-3" /> },
        ]}
      />

      <Card
        topIcon={<Settings className="size-4" />}
        title="Define Processing Logic"
        description="Create workflows, decision points, and conditional actions for each task."
        tags={[
          { text: "Salesforce", icon: <SalesForce className="size-3" /> },
          { text: "HubSpot", icon: <Hubspot className="size-3" /> },
          { text: "Sheets", icon: <Sheets className="size-3" /> },
        ]}
      />

      <Card
        topIcon={<HumanIcon className="size-4" />}
        title="Human-in-the-Loop"
        description="Add reviews, approvals and escalations without slowing work."
        tags={[
          { text: "Salesforce", icon: <SalesForce className="size-3" /> },
          { text: "HubSpot", icon: <Hubspot className="size-3" /> },
          { text: "Sheets", icon: <Sheets className="size-3" /> },
        ]}
      />
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
}) => {
  const randomColors = [
    "--color-blue-400",
    "--color-green-500",
    "color-red-500",
  ];
  return (
    <div className="p-4 relative shadow-black/10 border gap-4 border-transparent ring-1 rounded-[16px] bg-white ring-black/10 flex items-start">
      <div
        className="size-6 shrink-0 rounded-full bg-blue-500 flex mt-1 items-center justify-center"
        style={{
          backgroundColor:
            randomColors[Math.floor(Math.random() * randomColors.length)],
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800">{title}</p>
        <p className="text-base text-neutral-600">{description}</p>
        <div className="mt-2 flex flex-row gap-2">
          {tags.map((tag) => (
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2 w-fit rounded-sm px-1 py-0.5 border border-neutral-100 text-sm bg-neutral-100">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
