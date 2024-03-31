import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>에러 발생 : {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    <div id="error-page">
      <h1>예상치 못한 에러가 발생했습니다.</h1>
      <p>
        <i>{error.message}</i>
      </p>
    </div>;
  }
  return <div></div>;
};

export default ErrorPage;
