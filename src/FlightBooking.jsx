import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlightContext } from "./FlightContext";

function BookingForm() {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const { flights, bookings, setBookings } = useContext(FlightContext);

  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    passengerName: "",
    selectedDate: "",
  });

  useEffect(() => {
    const selected = flights.find((f) => f.id === parseInt(flightId));
    setFlight(selected);
    setLoading(false);
  }, [flightId, flights]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.passengerName || !formData.selectedDate) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }

    try {
      const bookingData = {
        flightId: flight.id,
        ...formData,
        bookingDate: new Date().toISOString(),
      };

      setBookings([...bookings, bookingData]);
      alert("Брондалды");
      navigate("/");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Брондау кате болдвы");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Бронировать</h1>
      <h2
        style={{
          fontSize: "24px",
          color: "white",
          fontWeight: 900,
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {flight.from} - {flight.to}
      </h2>
      <form className="booking-form" onSubmit={handleBooking}>
        <div>
          <label>Атың:</label>
          <input
            type="text"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Күн:</label>
          <input
            type="date"
            name="selectedDate"
            value={formData.selectedDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Брондау</button>
        <button
          style={{
            marginLeft: "10px",
            background: "linear-gradient(135deg, #00eaff, #4facfe)",
            color: "#000",
            border: "none",
            padding: "12px 30px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(0, 234, 255, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 25px rgba(0, 234, 255, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 0 15px rgba(0, 234, 255, 0.4)";
          }}
          onClick={() => navigate("/")}
        >
          ⬅ Артқа
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
