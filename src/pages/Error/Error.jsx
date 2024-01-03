import "./Error.css";
export const Error = ({ error: { error2 }, error }) => {
  console.log(error, error2?.message);
  return (
    <>
      <div className="errorPage">
        <h2>This is for error page:{error?.message}</h2>
      </div>
    </>
  );
};
