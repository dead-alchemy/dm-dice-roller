import {Box, Heading} from "@chakra-ui/react";

const Host = () => {
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
					Your Code is:
				</Box>
			</Box>
		</Box>
	);
};

export default Host;
