import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="text-sm text-gray-600">Services</div>
          <h2 className="text-4xl font-bold">
            <span className="text-accent">Services</span> | Provide
          </h2>
        </div>

        <Link
          to="/services"
          className="btn-pill bg-accent text-white px-6 py-2"
        >
          View All Services ➜
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}
