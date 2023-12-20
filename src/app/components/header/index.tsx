import { Badge, Box, Button, Container, IconButton, Stack,} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  /** INITIALIZATIONS */
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(true);

  useEffect(() => {
    setCount(count + 1);
  }, [value]);

 
    return (
    <div className="format home_navbar">
       <Container>
          <Stack 
            flexDirection={"row"}
            className="navbar_config"
            justifyContent={"space-between"}
          >
           <Box>
            <img src="/icons/papay.svg" />
           </Box>
           <Stack 
              flexDirection={"row"}
              justifyContent="space-evenly"
              alignItems={"center"}
              className="navbar_links"
           >
           <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/" activeClassName="underline">
              Bosh Sahifa
            </NavLink>
           </Box>
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/restaurant" activeClassName="underline">
              Oshhona
            </NavLink>
           </Box>
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/orders" activeClassName="underline">
              Buyurtma
            </NavLink>
           </Box>
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/community" activeClassName="underline">
              Jamiyat
            </NavLink>
           </Box>
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/help" activeClassName="underline">
                Yordam
            </NavLink>
           </Box>
            <Box className="hover-line">
             <IconButton
               atia-aria-label="cart"
               id="basic-button"
               aria-controls={undefined}
               aria-haspopup="true"
               aria-expanded={undefined}
            // onClick={handleClick}
             >
                <Badge badgeContent={3} color="secondary">
                    <img src={"/icons/shopping_cart.svg"} />
                </Badge>
             </IconButton>
           </Box>
           <Box>
             <Button 
               variant="contained"
               style={{ color: "#FFFFFF", background: "#1976d2" }}
            >
                KIRISH
             </Button>
            </Box>
          </Stack>
        </Stack>
        
        <Stack className="head_information" justifyContent={"row"}>
          <Stack 
             justifyContent={"column"} 
             style={{ marginTop: "86px", marginLeft: "24px" }}
           >
            <Box>
             <img src="/icons/welcome.svg" /> 
            </Box>
            <Box className="definer_restaurant">
                The Authentic Restaurant & Cafe
            </Box>
            <Box 
               className="timeline_service"
               justifyContent={"column"} 
               style={{ marginTop: "200px", 
               marginLeft: "5px" }}
            >
                {count} soat xizmatingizdamiz.
            </Box>
            <Box sx={{mt: "300px"}} >
                <Button
                   variant="contained"
                   style={{ 
                     width: "210px", 
                     height: "60px", 
                     background:"#1976d2",
                     color:"#FFFFFF", 
                   }}
                   onClick={() => setCount(count + 1)}
                >
                 RO’YHATDAN O’TISH
                </Button>
            </Box>
        </Stack>
        <Stack flexDirection={"column"}>
           <div className="big_img"></div>
        </Stack>
       </Stack>
     </Container>
   </div>
  );
}