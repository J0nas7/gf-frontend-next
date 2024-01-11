// Internal
//import { useAuthContext } from "@/hooks"
import { GuestLayout, PrivateLayout, OnlyPublicRoutes } from "../"

export default function LayoutController({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO const { isLoggedIn, isLoading } = useAuthContext()
  const isLoading = false
  const isLoggedIn = true
  
  if (isLoading) return <span>Loading...</span>

  // If authorized, show the PrivateLayout
  // If not authorized, show the GuestLayout
  
  return (
    <div className="app-wrapper">
      {
        isLoggedIn ?
          (
            <PrivateLayout>
              {children}
            </PrivateLayout>
          ) : (
            <OnlyPublicRoutes>
              <GuestLayout>
                {children}
              </GuestLayout>
            </OnlyPublicRoutes>
          )
      }
    </div>
  )
}
