import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchAxios<T>(url: string, method = "get", data?: any, token?: string) {
	const [response, setResponse] = useState<T | null>(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const axios_obj = axios.create();

	useEffect(() => {
		const fetchData = async () => {
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
	}, [url, method]);

	return { response, error, isLoading };
}
