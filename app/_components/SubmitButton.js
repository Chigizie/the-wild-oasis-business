import { useTransition } from "react";

function SubmitButton({ children, bookingId, onClick }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?")) {
      startTransition(() => {
        deleteReservation(bookingId);
      });
    }
  }
  return <button onClick={handleDelete}>{children}</button>;
}

export default SubmitButton;
