import { User } from "@/types";

export const users: User[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Suffolk",
    avatar: "https://i.pravatar.cc/150?img=1",
    images: Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/sarah-${i}/600/600`,
    })),
  },
  {
    id: 2,
    name: "Michael Brown",
    location: "Norfolk",
    avatar: "https://i.pravatar.cc/150?img=2",
    images: Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/michael-${i}/600/600`,
    })),
  },
  {
    id: 3,
    name: "Emily Wilson",
    location: "Epping",
    avatar: "https://i.pravatar.cc/150?img=3",
    images: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/emily-${i}/600/600`,
    })),
  },
  {
    id: 4,
    name: "Mike Thompson",
    location: "Suffolk",
    avatar: "https://i.pravatar.cc/150?img=4",
    images: Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/mike-${i}/600/600`,
    })),
  },
  {
    id: 5,
    name: "Jeremy Bush",
    location: "Suffolk",
    avatar: "https://i.pravatar.cc/150?img=5",
    images: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/jeremy-${i}/600/600`,
    })),
  },
  {
    id: 6,
    name: "Anthony Fresh",
    location: "Epping",
    avatar: "https://i.pravatar.cc/150?img=6",
    images: Array.from({ length: 7 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/anthony-${i}/600/600`,
    })),
  },
];
