import {Box, Heading, Button} from "@chakra-ui/react";
import {Link as RRDLink} from "react-router-dom";

function App() {
	return (
		<Box
			backgroundColor="blue.200"
			height={"100vh"}
			p={4}
			display="flex"
			justifyContent={"center"}
		>
			<Box>
				<Heading textAlign={"center"}>
					Welcome to the Dice Roller
				</Heading>
				<Box textAlign={"center"} m={2} fontSize={"lg"}>
					Would you like to host a game or join a game?
				</Box>
				<Box display={"flex"} m={2} justifyContent={"center"}>
					<Button
						backgroundColor={"green.500"}
						m={4}
						as={RRDLink}
						to={"host"}
						_hover={{
							backgroundColor: "green.700",
						}}
					>
						Host
					</Button>
					<Button
						backgroundColor={"yellow.500"}
						_hover={{
							backgroundColor: "yellow.600",
						}}
						m={4}
					>
						Join
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
