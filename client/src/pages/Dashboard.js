import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();

  async function populateQuote() {
    const req = await fetch("http://localhost:1337/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = req.json();
    console.log(data);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
        populateQuote();
      }
    }
  }, []);
  return <h1>Hello World</h1>;
};

export default Dashboard;
