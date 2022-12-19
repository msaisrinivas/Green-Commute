import { createTheme } from "@mui/material/styles";
const LINEAR_COLORS = {
    background: {
      linear1: "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
      linear2: "linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)",
    },
  };

const theme = createTheme({
    palette:{
        green: {
            one: "#0B6D62",
            two: "#1B877A",
            three: "#4ABAAD",
            four: "#77EDDF",
            five: "#B2FFF6",
            six:"#30A193",
            seven:"#EFFFFD",
        },
        black: {
            one: "#373C38",
            two: "#656E66",
            three: "#94A196",
            
        },
        gray: {
            one: "#D6D6D6",
            two: "#E9EBE9",
            three: "#F7F7F7",
            four:'#E5E5E5'
        },
        accent: {
            one: "#ED8F02",
            two: "#FF725E"
        },
        light: {
            one: "#E8FFFC",
            two: "#E7FCE0",
            three: "#F5FFF7",
            four: "#FFFFFF",
            linearOne: LINEAR_COLORS.background.linear1,
            linearTwo: LINEAR_COLORS.background.linear2,
        },
    },
    typography:{
        h1:{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "48px"
        },
        h2:{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "30px"
        },
        subtitle1:{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px"
        },
        subtitle2:{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px"
        },
        body1:{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px"
        },
        body2:{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "22px"
        },
        caption:{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "12px"
        },
        caption2:{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            display: "block",
            letterSpacing:" 0.03333em",
        },
        
    }
})

export { theme };