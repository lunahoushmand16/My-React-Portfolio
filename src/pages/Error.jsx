import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  );
}
