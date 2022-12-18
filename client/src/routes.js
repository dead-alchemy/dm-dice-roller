import {App, Host} from "./pages/index.js";

import {createBrowserRouter} from "react-router-dom";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/host",
		element: <Host />,
	},
	// {
	// 	path: "/join",
	// 	element: <Join />,
	// },
]);
