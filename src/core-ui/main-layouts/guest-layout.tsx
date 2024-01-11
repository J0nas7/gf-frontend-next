// Internal
import { Block } from "@/components"
import { Jumbotron } from "@/components/guest/jumbotron"

export const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Block className="guest-wrapper">
      <Jumbotron />
      <Block className="guest-contents">
        {children}
      </Block>
    </Block>
  )
}