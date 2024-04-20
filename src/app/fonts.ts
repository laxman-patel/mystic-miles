import localFont from "next/font/local";

export const rische = localFont({
  src: [
    {
      path: "../../fonts/Rische-Medium.woff2",
      weight: "600",
      style: "normal"
    }, {
        path: "../../fonts/Rische-Light.woff2",
        weight: "300",
        style: "normal"
      }, {
        path: "../../fonts/Rische-Semibold.woff2",
        weight: "700",
        style: "normal"
      }
  ],
  variable:'--font-rische',
});

export const helvetica = localFont({
    src: [
      {
        path: "../../fonts/HelveticaNowText-Regular.woff2",
        weight: "500",
        style: "normal"
      },
      {
        path: "../../fonts/HelveticaNowText-Light.woff2",
        weight: "300",
        style: "normal"
      },      {
        path: "../../fonts/HelveticaNowText-Bold.woff2",
        weight: "700",
        style: "normal"
      },

    ],
    variable:'--font-helvetica',
  })