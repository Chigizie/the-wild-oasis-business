import { auth } from "@/app/_components/auth";
import SelectCountry from "@/app/_components/SelectCountry";
import UpgradeProfileForm from "@/app/_components/UpgradeProfileForm";
import { getGuest } from "@/app/_lib/data-service";
import Image from "next/image";
export default async function Page() {
  const session = await auth();
  const email = session?.user?.email;

  const guest = await getGuest(email);
  // CHANGE
  const countryFlag = "pt.jpg";
  const nationality = guest.at(0)?.nationality.split("%").at(0) || "Nigeria";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpgradeProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          defaultValue={nationality}
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpgradeProfileForm>
    </div>
  );
}
