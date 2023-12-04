"use client";

import Image from "next/image";
import React from "react";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { useRouter } from "next/navigation";

const BlogItem = ({ img, title, content }) => {
  const theme = useTheme();
  const navigate = useRouter();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      height: "150px!important",
      width: "150px!important",
    },
    [theme.breakpoints.down("lg")]: {
      height: "100px!important",
      width: "100px!important",
    },
    [theme.breakpoints.down("md")]: {
      height: "150px!important",
      width: "150px!important",
    },
    [theme.breakpoints.down("sm")]: {
      height: "130px!important",
      width: "130px!important",
    },
  }));

  return (
    <>
      <Box
        pr={{ lg: 3 }}
        onClick={() => navigate.push("https://blog.umego.io/")}
      >
        <Stack sx={{ flexDirection: "row", gap: { xs: 2, sm: 3 } }}>
          <Box>
            <StyledImage src={img} alt={"blog"} />
          </Box>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography
              variant={isDesktop ? "h6" : "body1"}
              fontWeight={isDesktop ? "500" : "bold"}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#717171", mt: { xs: 0.5, lg: "" } }}
            >
              {content}
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#D9D9D9",
            mt: { xs: 1, md: 2 },
          }}
        />
      </Box>
    </>
  );
};

export default BlogItem;
