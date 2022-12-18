import io from "socket.io-client";
import {Box, Heading, Button} from "@chakra-ui/react";

const socket = io.connect("http://localhost:8081");
const Host = () => {
	const createSocket = () => {
		socket.emit();
	};

	return (
		<Box
			display={"flex"}
			justifyContent="center"
			p={2}
			backgroundColor={"blue.200"}
			height={"100vh"}
		>
			<Box textAlign={"center"}>
				<Heading>Welcome to Hosting a Game!</Heading>
				<Box p={2} fontSize={"lg"}>
					<Button
						backgroundColor={"green.500"}
						m={4}
						_hover={{
							backgroundColor: "green.400",
						}}
					>
						Click here to start your game!
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Host;
