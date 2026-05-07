import Link from 'next/link'
import { User } from '@/types'

interface Props {
  user: User
}

export default function UserCard({ user }: Props) {
  return (
    <Link href={`/profile/${user.id}`}>
      <div className='bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition'>
        <div className='flex items-center gap-4'>
          <img
            src={user.avatar}
            alt={user.name}
            className='w-16 h-16 rounded-full object-cover'
          />

          <div>
            <h2 className='font-semibold text-lg'>{user.name}</h2>
            <p className='text-gray-500'>{user.location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
