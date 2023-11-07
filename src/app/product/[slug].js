import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>The slug is: {router.query.slug}</p>
}