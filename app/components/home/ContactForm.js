"use client";

import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import phone from "../../assets/phone.png";
import icon1 from "../../assets/icon1.png";

const ContactForm = () => {
  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
      height: "550px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("xl")]: {
      height: "550px !important",
    },
    [theme.breakpoints.down("lg")]: {
      height: "450px !important",
    },
    [theme.breakpoints.down("md")]: {
      height: "500px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("sm")]: {
      height: "350px !important",
      width: "100% !important",
      objectFit: "fill",
    },
    objectFit: "fill",
  }));
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          mt: { xs: 6, sm: 7, md: 18 },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          px: { xs: 1, sm: 3, md: 6 },
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "-60px",
            left: "20px",
          }}
        >
          <Image src={icon1} alt={"icon1"} height={130} />
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            order: { xs: 1, md: 0 },
            pt: { md: 6 },
            pb: { xs: 10, md: 10, lg: 10 },
          }}
        >
          <Stack sx={{ gap: 3, width: "100%", px: { xs: 2, md: 0 } }}>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                ENTER YOUR EMAIL FOR A CHANCE TO WIN AN
              </Typography>
              <Typography
                variant="h3"
                color="#4548E8"
                fontWeight={"bold"}
                sx={{ mt: 0.5 }}
              >
                iPhone 15 for free
              </Typography>
            </Box>
            <Stack sx={{ gap: 4, mt: 1 }}>
              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Name
                  </Typography>
                }
                type="text"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Email address *
                  </Typography>
                }
                fullWidth
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />

              <TextField
                id="standard-number"
                label={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="black"
                    sx={{ fontSize: "18px" }}
                  >
                    Country *
                  </Typography>
                }
                fullWidth
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </Stack>

            <Box>
              <input type="checkbox" />
              <Typography component="span">
                {"  "}I agree to the contest terms and conditions.
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  background: "#4245E4",
                  color: "white",
                  padding: "7px 20px",
                  ":hover": {
                    background: "#4245E4",
                  },
                }}
              >
                Submit -{">"}
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 4, lg: 6 },
          }}
        >
          <StyledImage
            src={phone}
            alt="phone"
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default ContactForm;
