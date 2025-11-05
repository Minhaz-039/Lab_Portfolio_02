import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    api
      .get(`/services/${id}`)
      .then((r) => setService(r.data[0] || null))
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <img
        src={`http://localhost:5000/uploads/${service.icon}`}
        alt=""
        className="w-1/2 h-full object-contain rounded-full"
      />
      <p className="text-gray-600 mt-4">{service.description}</p>
      <div className="mt-6">
        <Link to="/" className="text-primary">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
