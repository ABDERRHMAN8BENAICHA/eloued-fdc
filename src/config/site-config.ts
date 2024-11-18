// import type { Metadata } from "next";
// export const siteConfig: Metadata = {
//   metadataBase: new URL("https://nexa-starter.vercel.app"),
//   title: {
//     default: "FDC",
//     template: "%s | FDC",
//   },

//   manifest: "/site.webmanifest",

//   applicationName: "FDC",

//   creator: "Mohamed Lifa",

//   authors: [
//     {
//       name: "Mohamed Lifa",
//       url: "https://mohamed-lifa7.vercel.app",
//     },
//   ],

//   icons: [{ rel: "icon", url: "/favicon.ico" }],

//   description:
//     "Nexa-Starter enables developers to quickly launch and scale their SaaS products with a powerful Next.js boilerplate.",

//   openGraph: {
//     title: "Nexa-Starter",
//     description:
//       "Nexa-Starter enables developers to quickly launch and scale their SaaS products with a powerful Next.js boilerplate.",
//     siteName: "Nexa-Starter",
//     locale: "en_US",
//     url: new URL("https://nexa-starter.vercel.app"),
//     images: ["https://nexa-starter.vercel.app/og-image.png"],
//     type: "website",
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   twitter: {
//     title: "Nexa-Starter",
//     creator: "@LifaSeddik",
//     card: "summary_large_image",
//     images: ["https://nexa-starter.vercel.app/twitter-og-image.png"],
//   },
// };

// export const links = {
//   github: "https://github.com/mohamed-lifa7/nexa-starter",
//   twitter: "https://twitter.com/LifaSeddik",
//   portfolio: "https://mohamed-lifa7.vercel.app",
// };

import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://nexa-starter.vercel.app"),
  title: {
    default: "نادي مطوري المستقبل",
    template: "%s | نادي مطوري المستقبل",
  },

  manifest: "/site.webmanifest",

  // applicationName: "نادي مطوري المستقبل",
  applicationName: "FDC",

  creator: "محمد وعبد الرحمن",

  authors: [
    {
      name: "محمد",
      url: "https://mohamed-lifa7.vercel.app",
    },
    {
      name: "عبد الرحمن",
      url: "https://abdul-rahman.vercel.app",
    },
  ],

  icons: [{ rel: "icon", url: "/favicon.ico" }],

  description:
    "نادي مطوري المستقبل هو مجتمع من المطورين المتحمسين الذين يجتمعون لمشاركة المشاريع والأفكار والفرص في مجال التكنولوجيا.",

  openGraph: {
    title: "نادي مطوري المستقبل",
    description:
      "نادي مطوري المستقبل هو مجتمع من المطورين المتحمسين الذين يجتمعون لمشاركة المشاريع والأفكار والفرص في مجال التكنولوجيا.",
    siteName: "نادي مطوري المستقبل",
    locale: "ar_AR",
    url: new URL("https://nexa-starter.vercel.app"),
    images: ["https://nexa-starter.vercel.app/og-image.png"],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "نادي مطوري المستقبل",
    creator: "@LifaSeddik",
    card: "summary_large_image",
    images: ["https://nexa-starter.vercel.app/twitter-og-image.png"],
  },
};

export const links = {
  github: "https://github.com/mohamed-lifa7/nexa-starter",
  twitter: "https://twitter.com/LifaSeddik",
  portfolio: "https://mohamed-lifa7.vercel.app",
};
