const app = require("express")();
const server = require("http").createServer(app);
const {Server} = require("socket.io");

app.use(require("cors")());

const io = new Server(server, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log(`User Connected ${socket.id}`);
});

server.listen(8081, () => {
	console.log("server is running");
});
