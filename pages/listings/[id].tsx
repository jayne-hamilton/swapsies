import { useRouter } from 'next/router'

function Listing() {
  const router = useRouter()
  const { id } = router.query
  return <div>
    <h1>The listing page</h1>
    <p>The listing id: {id}</p>
  </div>
}

export default Listing