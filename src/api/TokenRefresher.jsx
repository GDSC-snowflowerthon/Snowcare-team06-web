import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TokenRefresher = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
      headers: { "Content-Type": "application/json" },
    });

    const interceptor = axios.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const originalConfig = error.config;
        const msg = error.response.data.detail; // api 형식에 맞게 바꿔!
        const status = error.response.data.status;

        if (status === 401) {
          if (msg === "토큰 기한 만료") {
            await axios
              .post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`, {
                refreshToken: localStorage.getItem("refreshToken"),
              })
              .then((res) => {
                localStorage.setItem("accessToken", res.data.accessToken);

                originalConfig.headers["Authorization"] =
                  "Bearer " + res.data.accessToken;

                return refreshAPI(originalConfig);
              })
              .then((res) => {
                console.log(res);
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
                localStorage.clear();
                navigate("/");
                alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
              });
          }
        } else {
          alert(msg);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
  return <></>;
};

export default TokenRefresher;
