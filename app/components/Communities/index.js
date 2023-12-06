"use client";

import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentLayout from "../ContentLayout";
import communityOne from "../../assets/communityOne.png";
import communityTwo from "../../assets/communityTwo.png";

const index = () => {
  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      height: "600px !important",
      width: "420px !important",
    },
    [theme.breakpoints.down("lg")]: {
      height: "500px !important",
      width: "380px !important",
    },
    [theme.breakpoints.down("md")]: {
      height: "600px !important",
      width: "514px !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: "550px !important",
      width: "100% !important",
    },
    objectFit: "fill",
  }));

  return (
    <>
      <ContentLayout
        title="Communities"
        titleContent="Join our vibrant community, where your interests and hobbies become the foundation for meaningful connections. Whether you're hosting an event, sharing insights, or looking for inspiration, UMEGO ensures you're always in good company. It's more than a community; it's a space where every member contributes to an ever-evolving tapestry of shared experiences and mutual support."
      >
        <Box
          sx={{
            display: "flex",
            px: { xs: 0, md: 8 },
            justifyContent: "center",
            gap: { xs: 14, md: 16 },
            mt: { xs: 0, sm: 2, md: 8 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Stack
            flex={1}
            sx={{
              alignItems: "center",
            }}
          >
            <Box
              position="relative"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledImage src={communityOne} alt="communities" />
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#fff",
                  boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
                  width: "300px",
                  overflow: "hidden",
                  boxSizing: "content-box",
                  padding: { xs: "4px 8px", sm: "10px", md: "14px" },
                  borderRadius: "20px",
                  gap: 1,
                  position: "absolute",
                  right: { xs: "50%", md: "-80px" },
                  top: { xs: "100%", md: "50%" },
                  transform: { xs: "translate(50%,-50%)", md: "none" },
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  letterSpacing={{ xs: 1, sm: 1.1 }}
                  fontSize={{ xs: "18px", sm: "20px", md: "22px" }}
                  px={{ xs: 1, sm: 1 }}
                >
                  Lead an event, exchange ideas, or find your next adventure
                  with UMEGO
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack flex={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledImage src={communityTwo} alt="communities" />
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#fff",
                  boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
                  width: "300px",
                  overflow: "hidden",
                  boxSizing: "content-box",
                  padding: { xs: "4px 8px", sm: "10px", md: "14px" },
                  borderRadius: "20px",
                  gap: 1,
                  position: "absolute",
                  top: { xs: "100%", md: "40px" },
                  left: { xs: "50%", md: "-100px" },
                  transform: { xs: "translate(-50%,-50%)", md: "none" },
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  letterSpacing={{ xs: 1, sm: 1.1 }}
                  fontSize={{ xs: "18px", sm: "20px", md: "22px" }}
                  px={{ xs: 1, sm: 1 }}
                >
                  Dive into a community that turns hobbies into connections
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </ContentLayout>
    </>
  );
};

export default index;
