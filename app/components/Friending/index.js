"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import friending from "../../assets/friending.png";
import ContentLayout from "../ContentLayout";
import Image from "next/image";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Frinding = () => {
  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      height: "700px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("lg")]: {
      height: "700px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("md")]: {
      height: "500px !important",
      objectFit: "fill",
    },
    [theme.breakpoints.down("sm")]: {
      height: "330px !important",
      width: "100% !important",
      objectFit: "contain",
    },
  }));

  return (
    <>
      <ContentLayout
        title="Friending"
        titleContent="Discover the thrill of friendship with Umego! Our Friending feature turns online matches into real-world connections, fueled by shared passions and curated experiences. Dive into a world of authentic bonds over coffee chats, art explorations, or trail adventures. With Umego, every encounter is a step towards lifelong friendships and unforgettable memories."
      >
        <Stack
          sx={{
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <StyledImage
            alt="friending"
            src={friending}
            height={700}
            style={{ width: "100%" }}
          />
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              width: { xs: "120px", sm: "300px" },
              overflow: "hidden",
              boxSizing: "content-box",
              padding: { xs: "4px 8px", sm: "10px", md: "14px" },
              borderRadius: "20px",
              gap: { xs: 0.5, sm: 1 },
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(0,-50%)",
            }}
          >
            <ComputerIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              letterSpacing={{ sm: 1.1 }}
              sx={{
                fontSize: { xs: "12px", sm: "18px", md: "20px" },
              }}
            >
              Share your activity plans and invite others to join the fun.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              width: { xs: "120px", sm: "300px" },
              overflow: "hidden",
              boxSizing: "content-box",
              padding: { xs: "4px 8px", sm: "10px", md: "14px" },
              borderRadius: "20px",
              gap: { xs: 0.5, sm: 1 },
              position: "absolute",
              top: "0",
              right: { xs: 0, md: "60px", lg: "120px" },
            }}
          >
            <PeopleIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              letterSpacing={{ sm: 1.1 }}
              sx={{
                fontSize: { xs: "12px", sm: "18px", md: "20px" },
              }}
            >
              Discover and connect with like-minded people
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
              width: { xs: "120px", sm: "300px" },
              overflow: "hidden",
              boxSizing: "content-box",
              padding: { xs: "4px 8px", sm: "10px", md: "14px" },
              borderRadius: "20px",
              gap: { xs: 0.5, sm: 1 },
              position: "absolute",
              bottom: "0",
              right: { xs: 0, md: "60px", lg: "120px" },
            }}
          >
            <LocalLibraryIcon
              sx={{
                color: "#4245E4",
                mt: 0.4,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              letterSpacing={{ sm: 1.1 }}
              sx={{
                fontSize: { xs: "12px", sm: "18px", md: "20px" },
              }}
            >
              Spot exciting activities shared by users and jump in!
            </Typography>
          </Box>
        </Stack>
      </ContentLayout>
    </>
  );
};

export default Frinding;
