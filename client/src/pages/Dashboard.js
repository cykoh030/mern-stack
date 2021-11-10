import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();
  const [quote, setQuote] = useState("");

  async function populateQuote() {
    const req = await fetch("http://localhost:1337/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = req.json();
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
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
  return <h1>Youre quote: {quote || "No quote found"}Hello World</h1>;
};

export default Dashboard;
