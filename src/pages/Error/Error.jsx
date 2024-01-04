import { useNavigate } from "react-router-dom";
import "./Error.css";
export const Error = ({ error: { error2 }, error }) => {
  const navigate = useNavigate();
  console.log(error, error2?.message);
  return (
    <>
      <div className="errorPage">
        <h2>This is for error page:{error?.message}</h2>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  );
};
