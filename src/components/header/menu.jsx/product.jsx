import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import arrows from "../../../assets/icon-arrow-dark.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import arrow from "../../../assets/icon-arrow-light.svg";

const Product = () => {
  return (
    <div>
      <div>
        <div className="md:hidden">
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton color="#ff8f71">
                  <Box color="black">
                    <div className="">Product</div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel opacity="0.5">
                <div>Overview</div>
                <div>Pricing</div>
                <div>Marketplace</div>
                <div>Features</div>
                <div>Integrations</div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="max-sm:hidden">
          <Menu>
            <MenuButton _hover={{ textDecoration: "underline" }}>
              <div className="flex place-items-end  gap-2">
                <div>Product</div>
                <div>
                  <img className="mb-0.5 max-sm:hidden" src={arrow} alt="" />
                </div>
              </div>
            </MenuButton>
            <MenuList
              color="black"
              fontWeight="400"
              py="10"
              px="5"
              minWidth="13rem"
              mt="2rem"
              ml="-1.5rem">
              <MenuItem className="hover:font-[700]"> Overview </MenuItem>
              <MenuItem className="hover:font-[700]">Pricing</MenuItem>
              <MenuItem className="hover:font-[700]"> Marketplace</MenuItem>
              <MenuItem className="hover:font-[700]">Features</MenuItem>
              <MenuItem className="hover:font-[700]">Integrations</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Product;
