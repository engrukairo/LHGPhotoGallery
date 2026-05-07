"use client";

import { Location } from "@/types";

interface Props {
  selected: string;
  onChange: (location: string) => void;
}

const locations: Location[] = ["Suffolk", "Norfolk", "Epping"];

export default function LocationFilter({ selected, onChange }: Props) {
  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-2 rounded-lg border ${
          selected === "All" ? "bg-black text-white" : "bg-white"
        }`}
      >
        All
      </button>

      {locations.map((location) => (
        <button
          key={location}
          onClick={() => onChange(location)}
          className={`px-4 py-2 rounded-lg border ${
            selected === location ? "bg-black text-white" : "bg-white"
          }`}
        >
          {location}
        </button>
      ))}
    </div>
  );
}
