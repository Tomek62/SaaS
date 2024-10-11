import localFont from "next/font/local";
import { Inter, Lora, Work_Sans, Rubik, Russo_One,Roboto } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const cal = localFont({
  src: "./CalSans-SemiBold.otf",
  variable: "--font-cal",
  weight: "600",
  display: "swap",
});



export const russo = Russo_One({
  variable: "--font-russo",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
export const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400","500","600","700"],
  display: "swap",
  subsets: ["latin"],
});
export const roboto = Roboto({
  variable: "--font-rubik",
  weight: ["400","500","700"],
  display: "swap",
  subsets: ["latin"],
});

// export const rubik = localFont({
//   src: [
//     {
//       path: require('/fonts/rubik/Rubik-Regular.ttf'),
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/rubik/Rubik-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/rubik/Rubik-SemiBold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/rubik/Rubik-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-rubik',
//   display: 'swap',
// });



export const calTitle = localFont({
  src: "./CalSans-SemiBold.otf",
  variable: "--font-title",
  weight: "600",
  display: "swap",
});
export const lora = Lora({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});
export const work = Work_Sans({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});


export const fontMapper = {
  "font-cal": calTitle.variable,
  "font-lora": lora.variable,
  "font-work": work.variable,
  "font-inter": inter.variable,
  "font-rubik": rubik.variable,  
  "font-russo": russo.variable,
  "font-roboto":roboto.variable
} as Record<string, string>;
