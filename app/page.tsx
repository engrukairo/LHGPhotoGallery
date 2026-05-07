"use client";

import Header from "@/components/Header";
import UserGrid from "@/components/UserGrid";
import { users } from '@/data/users'

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className='max-w-7xl mx-auto px-4 py-10'>
              <UserGrid users={users} />
</section>
    </main>
  );
}
