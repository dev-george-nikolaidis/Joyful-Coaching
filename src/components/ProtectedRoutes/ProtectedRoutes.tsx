import { Navigate, Outlet } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";

type Props = { path?: string; withPayment?: boolean };

export default function ProtectedRoutes({ path, withPayment = false }: Props) {
	// const [searchParams] = useSearchParams();
	// const session_id = searchParams.get("session_id");
	const session_id = localStorage.getItem("session_id");
	console.log(session_id);
	const {
		state: { self },
	} = useGeneralContext();

	if (withPayment) {
		return self && session_id ? <Outlet /> : <Navigate to={path ? path : "/"} />;
	}

	return self ? <Outlet /> : <Navigate to={path ? path : "/"} />;
}
