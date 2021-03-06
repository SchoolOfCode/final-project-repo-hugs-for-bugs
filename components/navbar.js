import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Links = [
  ["Create an event", "/api/auth/login"],
  ["See all events", "/events"],
  ["About us", "/vision"],
];
const UserLinks = [
  ["Create an event", "/create"],
  ["See all events", "/events"],
  ["About us", "/vision"],
];
const NavLink = ({ children }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "brand.primaryDark",
    }}
    color="brand.mainPurple"
    fontWeight="bold"
  >
    <Link href={children[1]}>
      <a>{children[0]}</a>
    </Link>
  </Box>
);

export default function Navbar({ eventToday }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  return (
    <Box pos="fixed" w="100%" zIndex={4} top="0">
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1.5}
        borderStyle={"solid"}
        bgColor={"#f8f9fa"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent={"space-between"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link href="/">
            <Box cursor={"pointer"} fontSize="1.8em" fontWeight="bold">
              &#x7b;co:llab&#x7d;
            </Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {user
              ? UserLinks.map((link) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={user.picture} />
              </MenuButton>
              <MenuList>
                <Link href="/profile" passHref>
                  <MenuItem>
                    <a>My profile</a>
                  </MenuItem>
                </Link>
                <Link href="/organised" passHref>
                  <MenuItem>
                    <a>My events</a>
                  </MenuItem>
                </Link>
                <Link href="/api/auth/logout" passHref>
                  <MenuItem>
                    <a>Log out</a>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/api/auth/login">
              <Box
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"brand.mainPurple"}
                _hover={{
                  bg: "brand.primaryDark",
                }}
                p={2}
                borderRadius="5px"
              >
                <a>Sign up/Log in</a>
              </Box>
            </Link>
          )}
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} bgColor={"#f8f9fa"}>
          <Stack as={"nav"} spacing={3} pt={3}>
            {user
              ? UserLinks.map((link) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
