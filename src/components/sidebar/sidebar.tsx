"use client";

import {
  Binoculars,
  BriefcaseBusiness,
  Calculator,
  Calendar,
  CreditCard,
  GlobeLock,
  LayoutDashboard,
  List,
  ScrollText,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NavigationLink } from "../navlink/navlink";

interface MenuItem {
  optionKey: number;
  link: string;
  icon: JSX.Element;
  text: string;
}

interface MenuGroup {
  group: string;
  key: number;
  items: MenuItem[];
}

const menuList: MenuGroup[] = [
  {
    group: "General",
    key: 0,
    items: [
      {
        optionKey: 0,
        link: "/",
        icon: <LayoutDashboard />,
        text: "Dashboard Overview",
      },
      {
        optionKey: 1,
        link: "/marketwatch",
        icon: <Binoculars />,
        text: "Market Watch",
      },
      {
        optionKey: 2,
        link: "/",
        icon: <BriefcaseBusiness />,
        text: "Portfolio",
      },
      {
        optionKey: 3,
        link: "/",
        icon: <List />,
        text: "Watchlist",
      },
    ],
  },
  {
    group: "Settings",
    key: 1,
    items: [
      {
        optionKey: 0,
        link: "/",
        icon: <Settings />,
        text: "General Settings",
      },
      {
        optionKey: 1,
        link: "/",
        icon: <GlobeLock />,
        text: "Privacy",
      },
      {
        optionKey: 2,
        link: "/",
        icon: <ScrollText />,
        text: "Logs",
      },
    ],
  },
];

export function Sidebar() {
  const router = useRouter();
  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 p-4">
      {/* <div>User Item</div> */}
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu) => (
              <CommandGroup key={menu.key} heading={menu.group}>
                {menu.items.map((option) => (
                  <CommandItem
                    asChild
                    key={option.optionKey}
                    className="flex cursor-pointer gap-2"
                  >
                    <NavigationLink href={option.link}>
                      {option.icon}
                      {option.text}
                    </NavigationLink>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
