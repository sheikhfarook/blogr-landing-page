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

import arrow from "../../../assets/icon-arrow-light.svg";

const Product = () => {
  return (
    <div>
      <div>
        <div>
          <Menu>
            <MenuButton _hover={{ textDecoration: "underline" }}>
              <div className="flex place-items-end  gap-2">
                <div>Product</div>
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
