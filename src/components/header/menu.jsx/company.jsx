import arrow from "../../../assets/icon-arrow-light.svg";
// import arrows from "../../../assets/icon-arrow-dark.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
const Company = () => {
  return (
    <div>
      <div>
        <div className="md:hidden">
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton color="#ff8f71">
                  <Box color="black">
                    <div className="">company</div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel opacity="0.5">
                <div>About</div>
                <div>Team</div>
                <div>Blog</div>
                <div>Careers</div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="max-sm:hidden">
          <Menu>
            <MenuButton _hover={{ textDecoration: "underline" }}>
              <div className="flex place-items-end  gap-2">
                <div>company</div>
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
              <MenuItem className="hover:font-[700]">About </MenuItem>
              <MenuItem className="hover:font-[700]">Team </MenuItem>
              <MenuItem className="hover:font-[700]">Blog </MenuItem>
              <MenuItem className="hover:font-[700]">Careers</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Company;
