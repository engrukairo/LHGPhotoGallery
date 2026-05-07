"use client";

import Header from "@/components/Header";
import LocationFilter from "@/components/LocationFilter";
import UserGrid from "@/components/UserGrid";
import { users } from "@/data/users";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredUsers = useMemo(() => {
    if (selectedLocation === "All") return users;

    return users.filter((user) => user.location === selectedLocation);
  }, [selectedLocation]);

  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <LocationFilter
            selected={selectedLocation}
            onChange={setSelectedLocation}
          />
        </div>
        <UserGrid users={filteredUsers} />
      </section>
    </main>
  );
}
