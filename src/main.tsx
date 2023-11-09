import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./assets/styles/index.scss";
import { GeneralContextProvider } from "./context/GeneralContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<GeneralContextProvider>
				<App />
			</GeneralContextProvider>
		</HelmetProvider>
	</React.StrictMode>
);
