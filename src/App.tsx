import Router from "./Router";
import { useGeneralContext } from "./context/GeneralContext";

interface Props {}

const App: React.FC<Props> = () => {
	const {
		state: { theme },
	} = useGeneralContext();

	return (
		<div data-theme={theme}>
			<Router />
		</div>
	);
};

export default App;
