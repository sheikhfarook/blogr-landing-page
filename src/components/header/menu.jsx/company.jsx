import arrow from "../../../assets/icon-arrow-light.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Company = () => {
  return (
    <div>
      <div>
        <div>
          <Menu>
            <MenuButton _hover={{ textDecoration: "underline" }}>
              <div className="flex place-items-end  gap-2">
                <div>company</div>
                <div>
                  <img className="mb-0.5" src={arrow} alt="" />
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
