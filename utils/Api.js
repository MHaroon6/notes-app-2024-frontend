import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const Api = async (url, method, data = null) => {
  let response = null,
    error = null;
  try {
    const axiosInstance = axios.create(); // Create a new Axios instance

    // Add error handling interceptors (optional)
    axiosInstance.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
        // Handle specific errors here, e.g., display error messages
        return Promise.reject(err);
      }
    );

    let result;
    switch (method.toLowerCase()) {
      case "get":
        result = await axiosInstance.get(url);
        break;
      case "post":
        result = await axiosInstance.post(url, data);
        break;
      case "delete":
        result = await axiosInstance.delete(url);
        break;
      default:
        throw new Error("Unsupported method");
    }

    response = result.data;
  } catch (err) {
    error = err;
  }
  //   finally {
  //     setLoading(false);
  //   }
  return { response, error };
};

export default Api;
