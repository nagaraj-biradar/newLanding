"use client";

import {
  Box,
  Button,
  InputLabel,
  NativeSelect,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import phone from "../../assets/phone.png";
import icon1 from "../../assets/icon1.png";
import { countries } from "../../constants/country";

const ContactForm = () => {
  const [isChecked, setIsChanged] = useState(false);
  const StyledImage = styled(Image)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
      height: "500px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("xl")]: {
      height: "480px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("lg")]: {
      height: "430px !important",
    },
    [theme.breakpoints.down("md")]: {
      height: "500px !important",
      objectFit: "contain",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px !important",
      width: "100% !important",
    },
    objectFit: "fill",
  }));

  const handleChange = (e) => {
    setIsChanged(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please select the checkbox.");
      return;
    }
    const name = e.target.elements.name.value;
    const emailAddress = e.target.elements.emailAddress.value;
    const country = e.target.elements.country.value;
    if (!name) {
      alert("Name is required.");
      return;
    }
    if (!emailAddress) {
      alert("Email is required.");
      return;
    }
    if (!country) {
      alert("Country is required.");
      return;
    }

    const data = {
      name,
      emailAddress,
      country,
    };

    //make a newtwork request here
    try {
      fetch("https://api.umego.io/api/subscriptions/userSubscription", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("You have successfully submitted.");
          e.target.elements.name.value = "";
          e.target.elements.emailAddress.value = "";
          e.target.elements.country.value = "";
        });
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          boxShadow: "1px 1px 30px rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          mt: { xs: 5, sm: 7 },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          px: { xs: 1, sm: 3, md: 6 },
          gap: { sm: 2 },
          zIndex: 5,
          backgroundColor: "white",
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
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack sx={{ gap: 3, width: "100%", px: { xs: 2, md: 0 } }}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
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
                  name="name"
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
                  name="emailAddress"
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
                <Box>
                  <InputLabel shrink htmlFor="standard-number">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="black"
                      sx={{ fontSize: "18px" }}
                    >
                      Country *
                    </Typography>
                  </InputLabel>
                  <NativeSelect
                    name="country"
                    id="standard-number"
                    defaultValue="Singapore"
                    fullWidth
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  >
                    {countries.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </NativeSelect>
                </Box>
              </Stack>

              <Box>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={isChecked}
                />
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
                  type="submit"
                >
                  Submit -{">"}
                </Button>
              </Box>
            </Stack>
          </form>
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
