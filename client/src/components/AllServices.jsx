import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function AllServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    api.get("/services").then((r) => setServices(r.data));
  }, []);
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">All Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.id} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.description}</p>
            <Link
              to={`/services/${s.id}`}
              className="text-accent mt-3 inline-block"
            >
              Read more ➜
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
