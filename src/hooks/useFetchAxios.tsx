import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchAxios<T>(url: string, method = "get", data?: any, token?: string, dependencies?: any) {
	const [response, setResponse] = useState<T | null>(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const axios_obj = axios.create();

	useEffect(() => {
		return () => {
			const fetchData = async () => {
				console.log("useFetchAxios fetching");
				try {
					const res = await axios_obj({
						method: method,
						url: url,
						data: data,
						headers: {
							Authorization: `Bearer  ${token}`,
						},
					});
					setResponse(res.data);
					setIsLoading(false);
				} catch (err: any) {
					setError(err);
				}
			};

			fetchData();
		};
	}, [dependencies]);

	return { response, error, isLoading };
}
