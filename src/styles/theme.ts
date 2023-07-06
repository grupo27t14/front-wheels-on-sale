import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  pallete: {
    main: {
      brand1: "#4529E6",
      brand2: "#5126EA",
      brand3: "#B0A6F0",
      brand4: "#EDEAFD",
      currencyDollar: "rgba(255, 255, 255, 0.1)",
    },
    greyScale: {
      grey10: "#FDFDFD",
      grey9: "#F8F9FA",
      grey8: "#F1F3F5",
      grey7: "#E9ECEF",
      grey6: "#DEE2E6",
      grey5: "#CED4DA",
      grey4: "#ADB5BD",
      grey3: "#868E96",
      grey2: "#495057",
      grey1: "#212529",
      grey0: "#0B0D0D",
  
      whiteFixed: "#ffffff",
      blackFixed: "#000000",
    },
    feedback: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      sucess1: "#18794E",
      sucess2: "#CCEBD7",
      sucess3: "#DDF3E4",  
    },
    randomColors: {
      random1: "#E34D8C",
      random2: "#C04277",
      random3: "#7D2A4D",
      random4: "#7000FF",
      random5: "#6200E3",
      random6: "#36007D",
      random7: "#349974",
      random8: "#2A7D5F",
      random9: "#153D2E",
      random10: "#6100FF",
      random11: "#5700E3",
      random12: "#30007D",
    } 
  },

  typography: {
    heading1_700: {
      "font-size": "4.4rem", //44px
      "font-weight": "700",
      "line-height": "5.6rem", //56px
    },
    heading2_600: {
      "font-size": "3.6rem", //36px
      "font-weight": "600",
      "line-height": "4.5rem", //45px
    },
    heading3_600: {
      "font-size": "3.2rem", //32px
      "font-weight": "600",
      "line-height": "4rem", //40px
    },
    heading3_500: {
      "font-size": "3.2rem", //32px
      "font-weight": "500",
      "line-height": "4rem", //40
    },
    heading4_600: {
      "font-size": "2.8rem", //28px
      "font-weight": "600",
      "line-height": "3.5rem", //35px
    },
    heading4_500: {
      "font-size": "2.8rem", //28px
      "font-weight": "500",
      "line-height": "3.5rem", //35px
    },
    heading5_600: {
      "font-size": "2.4rem", //24px
      "font-weight": "600",
      "line-height": "3rem", //30px
    },
    heading5_500: {
      "font-size": "2.4rem", //24px
      "font-weight": "500",
      "line-height": "3rem", //30px
    },
    heading6_600: {
      "font-size": "2rem", //20px
      "font-weight": "600",
      "line-height": "2.5rem", //25px
    },
    heading6_500: {
      "font-size": "2rem", //20px
      "font-weight": "500",
      "line-height": "2.5rem", //25px
    },
    heading7_600: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "2rem", //20px
    },
    heading7_500: {
      "font-size": "1.6rem", //16px
      "font-weight": "500",
      "line-height": "2rem", //20px
    },
    body1_400: {
      "font-size": "1.6rem", //16px
      "font-weight": "400",
      "line-height": "2.8rem", //28px
    },
    body1_600: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "2.8rem", //28px
    },
    body2_400: {
      "font-size": "1.4rem", //14px
      "font-weight": "400",
      "line-height": "2.4rem", //24px
    },
    body2_500: {
      "font-size": "1.4rem", //14px
      "font-weight": "500",
      "line-height": "2.4rem", //24px
    },
    button_big_text: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "0rem", //0px
    },
    button_medium_text: {
      "font-size": "1.4rem", //14px
      "font-weight": "600",
      "line-height": "0rem", //0px
    },
    input_placeholder: {
      "font-size": "1.6rem", //16px
      "font-weight": "400",
      "line-height": "0rem", //0px
    },
    input_label: {
      "font-size": "1.4rem", //14px
      "font-weight": "500",
      "line-height": "1.7rem", //17px
    },
    avatar: {
      "font-size": "1.2rem", //14px
      "font-weight": "500",
    },

    avatar_profile: {
      "font-size": "1.4rem", //14px
      "font-weight": "700",
    },
    avatar_big: {
      "font-size": "3.6rem", //36px
      "font-weight": "500",
      "line-height": "5.3rem", //53px
    },
  },
};


export const dark: DefaultTheme = {
  pallete: {
    main: {
      brand4: "#4529E6",
      brand3: "#5126EA",
      brand2: "#B0A6F0",
      brand1: "#EDEAFD",
      currencyDollar: "rgba(255, 255, 255, 0.1)",
    },
    greyScale: {
      grey0: "##ECE8FB",
      grey1: "#b9bec1",
      grey2: "##a4a9ab",
      grey3: "#8f9496",
      grey4: "##7b8082",
      grey5: "#676c6e",
      grey6: "##54595b",
      grey7: "#424648",
      grey8: "##303436",
      grey9: "#202425",
      grey10: "#0f1415",
  
      whiteFixed: "#ffffff",
      blackFixed: "#000000",
    },
    feedback: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      sucess1: "#18794E",
      sucess2: "#CCEBD7",
      sucess3: "#DDF3E4",  
    },
    randomColors: {
      random1: "#E34D8C",
      random2: "#C04277",
      random3: "#7D2A4D",
      random4: "#7000FF",
      random5: "#6200E3",
      random6: "#36007D",
      random7: "#349974",
      random8: "#2A7D5F",
      random9: "#153D2E",
      random10: "#6100FF",
      random11: "#5700E3",
      random12: "#30007D",
    } 
  },

  typography: {
    heading1_700: {
      "font-size": "4.4rem", //44px
      "font-weight": "700",
      "line-height": "5.6rem", //56px
    },
    heading2_600: {
      "font-size": "3.6rem", //36px
      "font-weight": "600",
      "line-height": "4.5rem", //45px
    },
    heading3_600: {
      "font-size": "3.2rem", //32px
      "font-weight": "600",
      "line-height": "4rem", //40px
    },
    heading3_500: {
      "font-size": "3.2rem", //32px
      "font-weight": "500",
      "line-height": "4rem", //40
    },
    heading4_600: {
      "font-size": "2.8rem", //28px
      "font-weight": "600",
      "line-height": "3.5rem", //35px
    },
    heading4_500: {
      "font-size": "2.8rem", //28px
      "font-weight": "500",
      "line-height": "3.5rem", //35px
    },
    heading5_600: {
      "font-size": "2.4rem", //24px
      "font-weight": "600",
      "line-height": "3rem", //30px
    },
    heading5_500: {
      "font-size": "2.4rem", //24px
      "font-weight": "500",
      "line-height": "3rem", //30px
    },
    heading6_600: {
      "font-size": "2rem", //20px
      "font-weight": "600",
      "line-height": "2.5rem", //25px
    },
    heading6_500: {
      "font-size": "2rem", //20px
      "font-weight": "500",
      "line-height": "2.5rem", //25px
    },
    heading7_600: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "2rem", //20px
    },
    heading7_500: {
      "font-size": "1.6rem", //16px
      "font-weight": "500",
      "line-height": "2rem", //20px
    },
    body1_400: {
      "font-size": "1.6rem", //16px
      "font-weight": "400",
      "line-height": "2.8rem", //28px
    },
    body1_600: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "2.8rem", //28px
    },
    body2_400: {
      "font-size": "1.4rem", //14px
      "font-weight": "400",
      "line-height": "2.4rem", //24px
    },
    body2_500: {
      "font-size": "1.4rem", //14px
      "font-weight": "500",
      "line-height": "2.4rem", //24px
    },
    button_big_text: {
      "font-size": "1.6rem", //16px
      "font-weight": "600",
      "line-height": "0rem", //0px
    },
    button_medium_text: {
      "font-size": "1.4rem", //14px
      "font-weight": "600",
      "line-height": "0rem", //0px
    },
    input_placeholder: {
      "font-size": "1.6rem", //16px
      "font-weight": "400",
      "line-height": "0rem", //0px
    },
    input_label: {
      "font-size": "1.4rem", //14px
      "font-weight": "500",
      "line-height": "1.7rem", //17px
    },
    avatar: {
      "font-size": "1.2rem", //14px
      "font-weight": "500",
    },

    avatar_profile: {
      "font-size": "1.4rem", //14px
      "font-weight": "700",
    },
    avatar_big: {
      "font-size": "3.6rem", //36px
      "font-weight": "500",
      "line-height": "5.3rem", //53px
    },
  },
};
