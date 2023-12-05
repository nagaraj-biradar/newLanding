"use client";

import React, { useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
      height: "600px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "590px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "500px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
    objectFit: "fill",
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

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
              gap: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bolder"
              className="fontPoppins"
              sx={{ fontSize: { xs: "30px", sm: "34px" } }}
            >
              Connecting People via
              <br />
              <Typography
                className="fontPoppins"
                component="span"
                variant="h3"
                color="#2C90ED"
                fontWeight="bold"
                lineHeight="80px"
                sx={{
                  position: "relative",
                  bottom: { xs: "8px", sm: "0px" },
                }}
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
                padding: { xs: "20px", sm: "25px 60px" },
                borderRadius: "50px",
                boxSizing: "border-box",
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
          {isClient && (
            <StyledImage
              src={isDesktop ? headerImage : headerImageMobile}
              alt="decor"
              style={{ width: "100%" }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
