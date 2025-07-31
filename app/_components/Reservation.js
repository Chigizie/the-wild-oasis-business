import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../auth";
import DateSelector from "./DateSelector";
import { ReservationProvider } from "./ReservationContext.js";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} session={session} />
    </div>
  );
}

export default Reservation;
