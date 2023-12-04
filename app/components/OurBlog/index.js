"use client";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContentLayout from "../ContentLayout";
import blogImage from "../../assets/blogImage.png";
import blogImageLandscape from "../../assets/blogImageLandscape.png";
import BlogItems from "./BlogItems";

const OurBlog = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <Box mt={{ xs: 14, md: 0 }} />
      <ContentLayout
        title="Our Blog"
        titleContent="Explore our blog where curiosity meets insight—your go-to source for inspiring stories, expert tips, and a fresh take on the hobbies and interests that bring us all together."
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: 0, sm: 2, md: 8 },
            px: { xs: 0, sm: 4 },
            gap: { xs: 0, md: 3 },
          }}
        >
          <Stack
            flex={1}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              mb={{ xs: 0, md: 3 }}
              sx={{
                alignSelf: "center",
                width: { xs: "100%", sm: "" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={isDesktop ? blogImage : blogImageLandscape}
                alt="blogImage"
                height={isDesktop ? 550 : 250}
                style={{ width: isDesktop ? "" : "100%" }}
              />
            </Box>
          </Stack>
          <Stack flex={1} mt={{ xs: 4, md: 0 }}>
            <BlogItems />
          </Stack>
        </Box>
      </ContentLayout>
    </>
  );
};

export default OurBlog;
