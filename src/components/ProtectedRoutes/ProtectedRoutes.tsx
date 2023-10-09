import { Navigate, Outlet } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";

type Props = { path?: string };

export default function ProtectedRoutes({ path }: Props) {
	const {
		state: { self },
	} = useGeneralContext();

	return self ? <Outlet /> : <Navigate to={path ? path : "/"} />;
}
