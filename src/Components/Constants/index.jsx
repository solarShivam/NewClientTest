

import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

// export const navbarLinks = [
//     {
//         title: "Dashboard",
//         links: [
//             {
//                 label: "Dashboard",
//                 icon: Home,
//                 path: "/",
//             },
//             {
//                 label: "Analytics",
//                 icon: ChartColumn,
//                 path: "/analytics",
//             },
//             {
//                 label: "Reports",
//                 icon: NotepadText,
//                 path: "/report",
//             },
//         ],
//     },
//     {
//         title: "Customers",
//         links: [
//             {
//                 label: "Customers",
//                 icon: Users,
//                 path: "/customers",
//             },
//         ],
//     },
//     {
//         title: "Products",
//         links: [
//             {
//                 label: "Test",
//                 icon: Package,
//                 path: "/testpanel",
//             },
           
        
//         ],
//     },
//     {
//         title: "Settings",
//         links: [
//             {
//                 label: "Settings",
//                 icon: Settings,
//                 path: "/settings",
//             },
//         ],
//     },
// ];


export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/admin",
        // visible to all
      },
      {
        label: "Analytics",
        icon: ChartColumn,
        path: "/analytics",
        roles: ["Moderator"],
      },
      {
        label: "Reports",
        icon: NotepadText,
        path: "/admin/report",
        roles: ["Moderator"],
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        label: "Customers",
        icon: Users,
        path: "/customers",
        roles: ["Moderator"],
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Test",
        icon: Package,
        path: "/admin/testpanel",
        roles: ["Moderator"],
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        label: "Settings",
        icon: Settings,
        path: "/settings",
        // visible to all
      },
    ],
  },
];



export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Gautam Solar Private Limited",
        email: "olivia.martin@email.com",
        // image: ProfileImage,
    
    },
    {
        id: 2,
        name: "Galo Solar Private Limited",
        email: "james.smith@email.com",
        // image: ProfileImage,
     
    },
    {
        id: 3,
        name: "Udamandi Service Private Limited",
        email: "sophia.brown@email.com",
        // image: ProfileImage,
      
    },
     {
        id: 4,
        name: "Galo Energy Private Limited",
        email: "sophia.brown@email.com",
        // image: ProfileImage,
       
    },
   
   
];

export const topProducts = [
    {
        number: 1,
        name: "shivam Singh",
        phone : 878987898,
        testName : "xyz",
        score : 20,
        date : '18/08/2025'  
    },
    {
        number: 2,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 3,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
    {
        number: 4,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 5,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
    {
        number: 6,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 7,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
    {
        number: 8,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 9,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
    {
        number: 10,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 11,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
    {
        number: 12,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 13,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 14,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 15,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 16,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 17,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 18,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 19,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 20,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 21,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 21,
        date : '18/08/2025'
    },{
        number: 22,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 23,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 24,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 25,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 26,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 27,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 28,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 29,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 30,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 31,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },{
        number: 32,
        name: "Raj Singh",
        phone : 878987898,
        testName : "abc",
        score : 90,
        date : '18/09/2025'
    },
    {
        number: 33,
        name: "Rahual Singh",
        phone : 878987898,
        testName : "pqr",
        score : 20,
        date : '18/08/2025'
    },
   
];


