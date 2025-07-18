"use client";

import { createContext, use, useContext, useState } from "react";

const initialState = {
  from: undefined,
  to: undefined,
};
const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error("useReservation must be used within a reservationProvider");
  }

  return context;
}

export { ReservationProvider, useReservation };
