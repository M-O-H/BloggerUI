"use client"
// import { getUserProfile } from "@/utils/FetchData"
// import { useEffect, useState } from "react"

interface MainListProps {
  Menu: React.ComponentType;
  Articles: React.ComponentType;
}

export default function MainList({ Menu, Articles }: MainListProps) {
  // const [loading, setLoading] = useState(true)
  //
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = await getUserProfile();
  //       if (!user) {
  //         console.log("unauthorized user")
  //       }
  //     } catch (error) {
  //       console.error('Error:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   })()
  // }, [])

  return (
    <div>
      <Menu />
      <Articles />
    </div>
  )
} 
