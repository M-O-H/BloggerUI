import dynamic from 'next/dynamic';
import { ProfileSkeleton } from '@/components/common/Skeleton';

const UserProfile = dynamic(() => import('./userProfile').then(mod => mod.UserProfile), {
  loading: () => <ProfileSkeleton />
});

export default function Profile() {
  return <UserProfile />;
}
