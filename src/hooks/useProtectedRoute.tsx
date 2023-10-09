import { Navigate } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";

export const useProtectedRoute = (path: string) => {
	const {
		state: { self },
	} = useGeneralContext();

	if (!self) {
		return <Navigate to={path} replace />;
	}

	// let navigate = useNavigate();

	// useEffect(() => {
	// 	if (!self) {
	// 		navigate(path);
	// 	}
	// }, []);
};
