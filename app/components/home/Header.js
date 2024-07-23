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
import groupFriendsJumpingHill from "../../assets/groupFriendsJumpingHill.png";
import groupFriendsJumpingHillMobile from "../../assets/groupFriendsJumpingHillMobile.png";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
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
      objectFit: "cover",
    },
    objectFit: "fill",
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
            pt: 6,
            gap: { xs: 4, md: 6 },
          }}
        >
          <Image src={logo} alt={"logo"} height={50} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: 4, md: 8 },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography
                variant="h5"
                textAlign="center"
                fontWeight="bolder"
                className="fontPoppins"
                sx={{
                  color: "white",
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                }}
              >
                Connecting People via
                <br />
                <Typography
                  className="fontPoppins"
                  component="span"
                  variant="h2"
                  color="#2C90ED"
                  fontWeight="bold"
                  lineHeight="80px"
                  letterSpacing={1.1}
                  sx={{
                    position: "relative",
                    bottom: { xs: "8px", sm: "0px" },
                    color: "white",
                    fontSize: { xs: "34px", md: "40px", lg: "60px" },
                  }}
                >
                  Experiences
                </Typography>
              </Typography>
              <Typography
                component="span"
                color="white"
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: { xs: "3px", sm: "-4px", md: "-7px", lg: "-14px" },
                }}
              >
                Enriched by AI Innovation
              </Typography>
            </Box>
            <Box
              sx={
                {
                  // background: "#4548E8",
                  // padding: { xs: "20px", sm: "25px 60px" },
                  // borderRadius: "50px",
                  // boxSizing: "border-box",
                }
              }
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                }}
                className="fontPoppins"
              >
                Launching in August 2024{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  mt: 0.5,
                }}
                className="fontPoppins"
              >
                Singapore
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
            zIndex: -1,
            background: "rgba(30, 44, 169, 0.95)",
          }}
        >
          <StyledImage
            src={
              isDesktop
                ? groupFriendsJumpingHill
                : groupFriendsJumpingHillMobile
            }
            alt="decor"
            style={{ width: "100%", opacity: "20%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
