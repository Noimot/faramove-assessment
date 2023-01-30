/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Gilroy-regular": ["Gilroy Regular", "sans-serif"],
        "Gilroy-medium": ["Gilroy Medium", "sans-serif"],
        "Gilroy-semibold": ["Gilroy Semibold", "sans-serif"],
        "Gilroy-bold": ["Gilroy Bold", "sans-serif"],
      },
      width: {
        63: "63px",
        70: "70px",
        103: "103px",
        133: "133px",
        185: "185px",
        335: "335px",
        370: "370px",
        528: "528px",
      },
      height: {
        50: "50px",
        82: "82px",
        107: "107px",
        133: "133px",
        140: "140px",
        232: "232px",
      },
      colors: {
        "klooft-red": "#FF385C",
        "klooft-grey": "#A5B0B7",
        "klooft-grey-1": "#eeeeee",
        "klooft-grey-2": "#D3D3D3",
        "klooft-black": "#292929",
        "grey-3": "#797979",
        "black-1": "#383838",
        "red-1": "#EF1313",
        "black-2": "#101010",
        "grey-4": "#dddddd",
        "green-1": "#1CC64B",
      },
      gap: {
        27: "27px",
        35: "35px",
        52: "52px",
        61: "61px",
      },
      padding: {
        7: "7px",
        9: "9px",
        11: "11px",
        30: "30px",
        33: "33px",
        63: "63px",
        87: "87px",
        101: "101px",
        105: "105px",
        147: "147px",
      },
      borderRadius: {
        10: "10px",
      },
      fontSize: {
        32: [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
      },
      letterSpacing: {
        05: "-.5px",
      },
    },
  },
  plugins: [],
};
