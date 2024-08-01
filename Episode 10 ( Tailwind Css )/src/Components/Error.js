import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Oops Something Went wrong!..</h2>
      <p>{err.status}: {err.statusText}</p>
    </div>
  )
}

export default Error
