"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();

  function filter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-4 mb-10 justify-end border border-primary-200 pb-5 py-2 px-4">
      <button className="" onClick={() => filter("all")}>
        All cabins
      </button>
      <button className="" onClick={() => filter("small")}>
        1-2 guests
      </button>
      <button className="" onClick={() => filter("medium")}>
        3-4 guests
      </button>
      <button className="" onClick={() => filter("large")}>
        5+ guests
      </button>
    </div>
  );
}

export default Filter;
