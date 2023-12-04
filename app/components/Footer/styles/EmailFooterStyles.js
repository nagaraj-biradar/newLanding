import { Box, Typography, styled } from "@mui/material";

const desktopTextStyle = {
  "& .MuiInputBase-root": {
    background: "white",
    boxShadow: "0 4px 30px #00000025",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    borderRadius: "10px",
    height: "44px",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    background: "white",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    height: "44px",
  },
  "& .MuiFilledInput-root:hover": {
    background: "white",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    height: "44px",
  },
  "& .MuiFormLabel-root": {
    color: "primary.contrastText",
    fontSize: "12px",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "primary.contrastText",
  },
  "& .MuiFilledInput-input": {
    backgroundClip: "text !important",
    borderRadius: "50px",
    paddingTop: "7px",
  },
  width: { xs: "300px", sm: "400px", md: "500px" },
};

const mobileTextStyle = {
  "& .MuiInputBase-root": {
    background: "white",
    boxShadow: "0 4px 30px #00000025",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    borderRadius: "50px",
    height: "44px",
    paddingRight: "0",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    background: "white",
    borderRadius: "50px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    height: "44px",
  },
  "& .MuiFilledInput-root:hover": {
    background: "white",
    borderRadius: "50px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    height: "44px",
  },
  "& .MuiFormLabel-root": {
    color: "primary.contrastText",
    fontSize: "12px",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "primary.contrastText",
  },
  "& .MuiFilledInput-input": {
    backgroundClip: "text !important",
    borderRadius: "50px",
    paddingTop: "7px",
  },
  maxWidth: "380px",
  margin: "0 auto",
};

const buttonStyle = {
  borderRadius: "25px",
  padding: "0 25px",
  textTransform: "uppercase",
  background: "#4548E8",
  color: "white",
  height: "44px",
  width: "200px",
  fontSize: { xl: "17.5px" },
};

const StylesEmailFooterBackground = {
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: -1,
  height: "100%",
};

const StylesEmailFooterBackgroundForMobile = {
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  background: "#000000BF",
};

const StylesEmailFooterContent = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  textAlign: "center",
  py: 3,
  gap: 1,
};

const StyledEmailFooterText = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  color: "white",
  paddingBottom: 0,
}));

const StyledEmailFooterTextH6 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "white",
}));

const StyledLineContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

const StylesEmailAddressContainer = {
  width: { sm: "400px", md: "500px" },
  display: "flex",
  marginTop: "20px !important",
  padding: "8px",
  alignItems: "center",
  background: "white",
  margin: "0 auto",
  borderRadius: "100px",
  gap: 1,
  boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
};

const StylesSendImage = {
  borderRadius: "50%",
  height: "42px",
  width: "42px",
  background: "#4548E8",
  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export {
  desktopTextStyle,
  mobileTextStyle,
  buttonStyle,
  StylesEmailFooterBackground,
  StylesEmailFooterContent,
  StyledEmailFooterText,
  StyledEmailFooterTextH6,
  StyledLineContainer,
  StylesEmailAddressContainer,
  StylesEmailFooterBackgroundForMobile,
  StylesSendImage,
};
