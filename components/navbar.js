// import { Menu } from "antd";
import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { HStack, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

// const { SubMenu } = Menu;

export default function Navbar() {
	const { user } = useUser();
	user ? console.log(user) : console.log("user");
	return (
		<Flex px={4} py={3} w="full" bg="#580AFF">
			<HStack>
				<Menu>
					<MenuItem>
						<Link href="/">
							<a>LOGO</a>
						</Link>
					</MenuItem>
					<MenuItem>
						{user ? (
							<Link href="/create">
								<a>Create an Event</a>
							</Link>
						) : (
							<Link href="/api/auth/login">
								<a>Create an Event</a>
							</Link>
						)}
					</MenuItem>
					{user ? (
						<>
							<MenuButton
								as={Button}
								rightIcon={<ChevronDownIcon />}
								colorScheme="brand"
							>
								Actions
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Link href="/profile">
										<a>My events</a>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href="/api/auth/logout">
										<a>Organised events</a>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href="/api/auth/logout">
										<a>Past events</a>
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href="/api/auth/logout">
										<a>Log out</a>
									</Link>
								</MenuItem>
							</MenuList>
						</>
					) : (
						<MenuItem>
							<Link href="/api/auth/login">
								{/* put in href once auth0 had been set up */}
								<a>Sign up/Log in</a>
							</Link>
						</MenuItem>
					)}
				</Menu>
			</HStack>
		</Flex>
	);
}

// each menu and menu.item is from antd (UI library)
// menu.item is a list item so they need a key for react to render
// add a search bar
// create a page for contact and connect link to page

// could organised events just be in my events?

// Signup/login rather than two seperate buttons?