import blog from "../../assets/logo.svg";
import Company from "./menu.jsx/company";
import Connect from "./menu.jsx/connect";
import Product from "./menu.jsx/product";
import StartFree from "./startfree";
import burger from "../../assets/icon-hamburger.svg";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";

const HeaderTopBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // main bg color
    <div className="bg-gradient-to-r from-[#ff8f71] to-[#ff3e55] hover:rounded-bl-[6rem] max-sm:rounded-bl-[6rem]   ">
      {/* bg img css name */}
      <div className="blog ">
        <div className="flex items-center justify-between p-10 xl:px-36 text-white text-[16px] font-ubuntu font-[700]">
          {/* logo */}
          <div className="flex gap-[5rem] items-center ">
            <div>
              <img
                className="max-sm:w-[81.66px] max-sm:h-[32px]"
                src={blog}
                alt=""
              />
            </div>
            {/* menu bar */}
            {/* mobile device responsive */}
            <div className="flex md:hidden">
              <div className="text-right w-[4rem] ml-20 ">
                <Button onClick={onOpen} background="#ff8f71">
                  <img className="" src={burger} alt="" />
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent width="23rem" marginTop="7.5rem">
                    <ModalCloseButton />
                    <ModalBody>
                      <div
                        className="text-[1.125rem] text-[#242942] font-[700] font-barlow 
                    tracking-[0.075rem] space-y-5  text-center mt-8">
                        <div className="">
                          <Product />
                        </div>
                        <div>
                          <Company />
                        </div>
                        <div>
                          <Connect />
                        </div>
                        <hr />

                        <div className="space-y-5 items-center cursor-pointer ">
                          <div> Login </div>
                          <div
                            className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
              justify-center mx-auto text-white
          m-auto bg-[#ff7b86] ">
                            Sign Up
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </div>
              {/* right side  */}
            </div>
            {/* all device responsive */}
            <div className="flex gap-10  max-sm:hidden">
              <div>
                <Product />
              </div>
              <div>
                <Company />
              </div>
              <div>
                <Connect />
              </div>
              {/* right side  */}
            </div>
          </div>
          <div className="flex gap-6 items-center cursor-pointer max-sm:hidden">
            <div> Login </div>
            <div
              className="w-[137px] h-[48px] rounded-[28px] shadow-md flex items-center 
              justify-center  bg-[#fff] mx-auto text-[#ff505c] hover:text-[#fff] 
               hover:bg-[#ff7b86] ">
              Sign Up
            </div>
          </div>
        </div>
        <StartFree />
      </div>
    </div>
  );
};

export default HeaderTopBar;
