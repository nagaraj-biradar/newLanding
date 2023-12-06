import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AboutUs from "../AboutUs";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Experiences from "../../components/Experiences";
import Friending from "../../components/Friending";
import FooterSubscribeComponent from "../Footer/FooterSubscribeComponent";
import Communities from "../../components/Communities";
import OurBlog from "../../components/OurBlog";

const index = () => {
  return (
    <>
      {/* <Box pt={{ xs: 2, sm: 4 }}> */}
      <Box>
        <Container
          maxWidth={"xl"}
          sx={{
            padding: {
              xs: "0px!important",
              sm: "0px!important",
              md: "0px!important",
              lg: "0!important",
              xl: "0 25px!important",
            },
          }}
        >
          <Header />
        </Container>
        <Container
          maxWidth={"xl"}
          sx={{
            padding: {
              xs: "0 14px!important",
              sm: "0 20px!important",
              md: "0 24px!important",
              lg: "0 84px!important",
              xl: "0 25px!important",
            },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <ContactForm />
          <Box mt={{ xs: 7, md: 14 }}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                px: { xs: 0, sm: 6, md: 10 },
                fontWeight: 550,
                fontSize: { xs: "24px", md: "34px" },
              }}
            >
              Be part of our mission for experiences that build vibrant
              communities and foster lasting friendships
            </Typography>
          </Box>
          <AboutUs />
          <Experiences />
          <Friending />
          <Communities />
          <OurBlog />
          <FooterSubscribeComponent />
        </Container>
      </Box>
    </>
  );
};

export default index;
