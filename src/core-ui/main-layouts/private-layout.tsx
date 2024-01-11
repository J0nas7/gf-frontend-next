// External
import { useState } from "react"
import { useRouter } from "next/router"

// Internal
import { Block, Text } from "@/components"
import { Sidepanel } from ".."

export const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    // Hooks
    const router = useRouter()

    // Internal variables
    const [myMenuActive, setMyMenuActive] = useState(false)
    const tempSpaceName: string = router.query.spaceName?.toString()!
    const toggleMyMenu = () => {
        setMyMenuActive(!myMenuActive)
    }

    return (
        <Block className="private-wrapper">
            <Sidepanel />
            <Block className="main-content-wrapper flex-grow">
                <Block className="w-full flex justify-center">
                    {children}
                </Block>
            </Block>
        </Block>
    )
}