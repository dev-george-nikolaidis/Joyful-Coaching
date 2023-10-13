import { Navigate, Outlet } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";

type Props = { path?: string; withPayment?: boolean; withSession?: boolean };

export default function ProtectedRoutes({ path, withPayment = false, withSession = false }: Props) {
	const session_id = localStorage.getItem("session_id");

	const {
		state: { self, appointments },
	} = useGeneralContext();

	if (withPayment) {
		return self && session_id ? <Outlet /> : <Navigate to={path ? path : "/"} />;
	}
	if (withSession) {
		return self && appointments.length > 0 ? <Outlet /> : <Navigate to={path ? path : "/"} />;
	}

	return self ? <Outlet /> : <Navigate to={path ? path : "/"} />;
}
