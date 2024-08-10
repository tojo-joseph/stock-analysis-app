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

const menuList = [
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
        link: "/",
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
  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 border-r p-4">
      {/* <div>User Item</div> */}
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey} className="flex gap-2">
                    {option.icon}
                    {option.text}
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
