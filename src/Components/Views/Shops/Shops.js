import { Button, Paper, Typography } from "@mui/material";
import "./Shops.css";
import data from "./data";
import { Box, Container } from "@mui/system";
import React from "react";
import SimplePaper from "../../Cards/shopsCard";

const Shops = () => {
  const [status, setStatus] = React.useState("R");
  const [Data, setData] = React.useState(data);
  const [shop, setShop] = React.useState(1);

  const styles = {
    border: "none",
    my: 1,
    mx: 1,

    borderRadius: 2,
    color: "Black",
    "&.MuiButton-contained": {
      backgroundColor: "#ec5858",
      boxShadow: "0px 1px 12px  ",
      color: "white",
    },
  };
  const handleSelected = (value) => {
    setShop(value);
  };

  React.useEffect(() => {
    if (status) {
      const filterData = data.filter((item) => item.type === status);
      setData(filterData);
    }
  }, [status]);

  return (
    <div id="Shop" paddingBlockStart="90px">
      <Container sx={{ marginY: 5 }}>
        <Box align="center">
          <Typography color="#ec5858" fontWeight={550}>
            Valuable Shops
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            Our Active Shops
          </Typography>
          <Typography color="#656464" sx={{ mt: 2 }}>
            Our shopkeerps update their collection and prices regularly
            <br /> for the best shopping experience on LITCHIES.
          </Typography>

          <Container
            maxWidth="
          "
            sx={{ my: 2 }}
          >
            <Paper
              sx={{
                maxWidth: "fit-content",
                backgroundColor: "rgba(255,228,228,1)",
                borderRadius: 2,
                boxShadow: "none",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Button
                  variant={status === "R" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                  }}
                  onClick={() => setStatus("R")}
                >
                  Newest
                </Button>
                <Button
                  variant={status === "P" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                  }}
                  onClick={() => setStatus("P")}
                >
                  Popular
                </Button>
                <Button
                  variant={status === "A" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                    "&:active": {
                      backgroundColor: "#ec5858",
                    },
                  }}
                  onClick={() => setStatus("A")}
                >
                  Active
                </Button>
              </div>
            </Paper>
          </Container>

          <Box
            display="flex"
            exclusive
            label="shops"
            sx={{
              justifyContent: { lg: "center", xs: "flexStart" },
              overflowX: "scroll",
            }}
          >
            {Data.map((D) => (
              <SimplePaper
                isShadow={shop === D.id}
                value={D.id}
                imgUrl={D.img}
                name={D.shop_name}
                name2={D.name}
                handleChange={handleSelected}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shops;
