"use client";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  StyledEmailFooterText,
  StyledEmailFooterTextH6,
  StyledLineContainer,
  StylesEmailAddressContainer,
  StylesEmailFooterBackground,
  StylesEmailFooterBackgroundForMobile,
  StylesEmailFooterContent,
  StylesSendImage,
  buttonStyle,
  desktopTextStyle,
  mobileTextStyle,
} from "./styles/EmailFooterStyles";
import Image from "next/image";
import { useEffect, useState } from "react";

const EmailFooter = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [subscribeEmailId, setSubscribeEmailId] = useState("");

  const handleSubscribe = () => {
    if (!subscribeEmailId) {
      alert("Email is required");
      return;
    }
    fetch("https://api.umego.io/api/experience_subscriptions/subscription", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscribeEmailId }),
    })
      .then((response) => response.json(subscribeEmailId))
      .then((data) => {
        alert("Thanks for subscribing!");
        setSubscribeEmailId("");
      });
  };

  return (
    <>
      <Box
        my={2}
        py={{ xs: 1, md: 2 }}
        mt={{ xs: 4, sm: 7, md: 14 }}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: "10px", md: "20px" },
        }}
      >
        <Box
          sx={
            isDesktop
              ? {
                  ...StylesEmailFooterBackground,
                  background: "#262e40",
                }
              : StylesEmailFooterBackgroundForMobile
          }
        ></Box>
        <Box sx={StylesEmailFooterContent} p={2}>
          <Box>
            <StyledEmailFooterText
              variant="h4"
              sx={{ fontSize: { xs: "23px", md: "30px" } }}
            >
              No Spam, Just Experiences
            </StyledEmailFooterText>
            {/* <StyledLineContainer sx={{ marginTop: "10px" }}>
              <Box
                sx={{
                  borderBottom: "2px solid #FFFFFF",
                  width: "150px",
                }}
              />
            </StyledLineContainer> */}
          </Box>
          {/* <StyledLineContainer sx={{ marginTop: "4px", marginBottom: "10px" }}>
            <Box
              sx={{
                borderBottom: "2px solid #FFFFFF",
                width: "75px",
              }}
            />
          </StyledLineContainer> */}
          <StyledEmailFooterTextH6>
            Sign up for exclusive access to our experiences before they hit our
            site!
          </StyledEmailFooterTextH6>
          <Stack alignItems="center" gap={2} mt={2}>
            <TextField
              sx={desktopTextStyle}
              id="email"
              name="email"
              type="email"
              placeholder=""
              autoComplete="fullName"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
              onChange={(e) => setSubscribeEmailId(e.target.value)}
            />
            <Button
              sx={buttonStyle}
              color="secondary"
              variant="contained"
              type="submit"
              onClick={() => handleSubscribe()}
            >
              Subscribe
            </Button>
          </Stack>
          {/* {isDesktop ? (
            <form>
              <Box sx={StylesEmailAddressContainer}>
                <TextField
                  sx={desktopTextStyle}
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  autoComplete="fullName"
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <Button
                  sx={buttonStyle}
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                  Subscribe
                </Button>
              </Box>
            </form>
          ) : (
            <TextField
              sx={mobileTextStyle}
              fullWidth
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email Address"
              autoComplete="fullName"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={StylesSendImage}>
                      <SendIcon
                        height={20}
                        width={20}
                        sx={{ color: "white" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )} */}
        </Box>
      </Box>
      <Box mt={{ xs: 4, sm: 7, md: 10 }}>
        <Typography variant="body1" textAlign={{ xs: "left", md: "center" }}>
          By entering your email in this contest, you agree to the following
          terms: This contest is open to individuals 18 years or older residing
          in Singapore, Australia, or India. Each participant is allowed one
          entry by submitting a valid email address. The prize is one iPhone 15.
          A winner will be chosen randomly and notified via email. If the winner
          does not respond within 48 hours of notification, an alternate winner
          may be selected. Email addresses collected will be used solely for
          this contest and not shared with third parties. This contest is not
          sponsored, endorsed, or administered by Apple Inc. Participation in
          the contest implies agreement to these terms and conditions.
        </Typography>
      </Box>
    </>
  );
};

export default EmailFooter;
