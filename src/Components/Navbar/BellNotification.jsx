import React from "react";
import { EyeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

const notifications = [
  {
    id: 1,
    name: "Charles Franklin",
    message: "Accepted your connection",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    dotColor: "bg-green-500",
  },
  {
    id: 2,
    name: "Martian added moved Charts ...",
    message: "Today 10:00 AM",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    dotColor: "bg-orange-500",
  },
  {
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },{
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },{
    id: 3,
    name: "New Message",
    message: "You have new message from Natalie",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    dotColor: "bg-green-500",
  },
];

const NotificationDropdown = () => {
  return (
    <div className="absolute right-0   w-80 max-h-96 bg-[#2c2536] text-white rounded-xl shadow-lg z-50">

      <Helmet>
        <title>Notifications</title>
      </Helmet>

      <div className="px-4 py-3 border-b border-gray-700 text-center font-semibold">
        Notifications
      </div>

      <div className="scrollable-dark overflow-y-auto max-h-60">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start px-4 py-3 hover:bg-[#3b3445] transition-all cursor-pointer"
          >
            <div className="relative">
              <img
                src={note.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#2c2536] ${note.dotColor}`}
              ></span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold">{note.name}</p>
              <p className="text-xs text-gray-300">{note.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 text-center">
        <button className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm hover:bg-[#3b3445] transition-all">
          <EyeIcon className="w-4 h-4" /> View all
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
