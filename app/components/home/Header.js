"use client";

import React from "react";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/logo.png";
import headerImage from "../../assets/headerImage.png";
import headerImageMobile from "../../assets/headerImageMobile.png";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      height: "580px",
    },
    [theme.breakpoints.down("md")]: {
      height: "380px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "430px",
    },
  }));

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: { xs: 2, sm: 4 },
          }}
        >
          <Image src={logo} alt={"logo"} height={90} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: 3, md: 6 },
              mt: 4,
            }}
          >
            <Typography variant="h4" textAlign="center" fontWeight="bolder">
              Connecting People via
              <br />
              <Typography
                component="span"
                variant="h3"
                color="#2C90ED"
                fontWeight="bolder"
                lineHeight="80px"
              >
                Experiences
              </Typography>
            </Typography>
            <Typography component="span" color="black" textAlign="center">
              Enriched by AI Innovation
            </Typography>
            <Box
              sx={{
                background: "#4548E8",
                padding: "15px 16px",
                borderRadius: "50px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "550",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Launching in January 2024{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: "center",
                  mt: 0.5,
                }}
              >
                UAE - Singapore - India - Australia
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%,0)",
            top: 0,
            width: "100%",
            zIndex: "-1",
          }}
        >
          <StyledImage
            src={isDesktop ? headerImage : headerImageMobile}
            alt="decor"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
