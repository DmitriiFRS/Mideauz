'use client'

import { usePathname } from "next/navigation";

function Details() {
   const router = usePathname();
   const routeId = router.replace(/[a-z\/\-]/gi, '')
   return (
      <div className="flex-auto">{routeId}</div>
   )
}
export default Details;