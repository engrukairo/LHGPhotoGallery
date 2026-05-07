import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";
import { users } from "@/data/users";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return notFound();
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-5 mb-10">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-500 mt-1">{user.location}</p>
          </div>
        </div>
        <ImageGrid images={user.images} />
      </section>
    </main>
  );
}
