"use client";

import { Bell } from "lucide-react";
import { AppBar } from "./appbar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface Notification {
  text: string;
  date: string;
  read: boolean;
}

export function NavBar() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This is another notification",
      date: "02-01-2015",
      read: false,
    },
    {
      text: "This is yet another notification",
      date: "02-01-2015",
      read: true,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <AppBar />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <div
                className={`absolute -right-1 -top-2 my-1 h-3 w-3 rounded-full ${notifications.find((x) => x.read === true) ? "bg-green-500" : "bg-neutral-500"}`}
              ></div>
              <Bell className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((notification, key: number) => (
              <DropdownMenuItem
                key={key}
                className="flex cursor-pointer items-start gap-2 p-1 px-3 py-2 transition hover:bg-neutral-50"
              >
                <div
                  className={`my-1 h-3 w-3 rounded-full ${!notification.read ? "bg-green-500" : "bg-neutral-500"}`}
                ></div>
                <div>
                  <p>{notification.text}</p>
                  <p className="text-xs text-neutral-500">
                    {notification.date}
                  </p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
