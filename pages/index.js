import GetUsers from "../components/getUsers";
import RegisterUser from "../components/RegisterUser";

export default function IndexPage() {
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "1000px",
      }}
    >
      <RegisterUser />
      <GetUsers />
    </div>
  );
}
