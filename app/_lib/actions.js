"use server";
import { revalidatePath } from "next/cache";
import { auth } from "../_components/auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function createReservation(reservationData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to create a reservation.");
  }

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");

  const data = {
    ...reservationData,

    numGuests: +numGuests,
    observations: observations || null,

    isPaid: false,
    hasBreakfast: false,
    status: "uncomfirmed",
    extrasPrice: 0,
  };
  if (!data.startDate || !data.endDate || !numGuests) {
    throw new Error("All fields are required.");
  }

  const { error } = await supabase.from("bookings").insert(data);

  if (error) {
    console.error("Error creating reservation:", error);
    throw new Error("Reservation could not be created.");
  }

  revalidatePath(`/cabin/${reservationData.cabinId}`);
  redirect("/account/thankyou");
}

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be logged in to delete a reservation.");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error("Error deleting reservation:", error);
    throw new Error("Reservation could not be deleted.");
  }
  revalidatePath("/account/reservations");
  revalidatePath("/account");
}

export async function updateReservation(formData) {
  const bookingId = formData.get("reservationId");
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  const data = {
    numGuests: +numGuests,
    observations: observations || null,
  };
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to update a reservation.");
  }

  const { error } = await supabase
    .from("bookings")
    .update(data)
    .eq("id", +bookingId);

  if (error) {
    console.error("Error updating reservation:", error);
    throw new Error("Reservation could not be updated.");
  }
  revalidatePath("/account/reservations");
  revalidatePath("/account/reservations/edit/" + bookingId);

  redirect(`/account/reservations`);
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("you must be logged in to update your profile");
  }
  const nationality = formData.get("nationality");
  const nationalID = formData.get("nationalID");
  const data = {
    nationalID,
    nationality,
  };

  const { error } = await supabase
    .from("guests")
    .update(data)
    .eq("email", session.user.email);
  if (error) {
    console.error("Error updating profile:", error);
    throw new Error("Profile could not be updated.");
  }
  revalidatePath("/account/profile");
  revalidatePath("/account");
  redirect("/account");
}
