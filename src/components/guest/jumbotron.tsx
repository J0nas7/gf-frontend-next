// External
import Image from "next/image"

// Internal
import { Block, Text } from ".."

export const Jumbotron = () => {
    const register1ImageSrc = "http://dev.gamingfriends.gg/images/register/register1.jpg"

    return (
        <Block className="jumbotron-wrapper">
            <Block className="absolute bottom-5 top-auto p-4 flex justify-start items-stretch space-x-4">
                <Block className="flex bg-black bg-opacity-80 rounded p-2 w-1/3 border-orange-500 border border-solid">
                    <Image
                        src={register1ImageSrc}
                        alt="SONAR"
                        width={36}
                        height={36}
                        className="teaser-image mr-2 ml-2 self-center"
                    />
                    <Block className="flex flex-col justify-center p-3">
                        <Text variant="span" className="text-white text-md font-bold">CREATE TEAMS</Text>
                        <Text variant="span" className="text-white text-xs">Find the teammates that makes gaming awesome</Text>
                    </Block>
                </Block>
                <Block className="flex bg-black bg-opacity-80 rounded p-2 w-1/3 border-orange-500 border border-solid">
                    <Image
                        src={register1ImageSrc}
                        alt="MOMENTS"
                        width={36}
                        height={36}
                        className="teaser-image mr-2 ml-2 self-center"
                    />
                    <Block className="flex flex-col justify-center p-3">
                        <Text variant="span" className="text-white text-md font-bold">CONNECT EASY</Text>
                        <Text variant="span" className="text-white text-xs">Connect easy with all the information you need at your fingertips</Text>
                    </Block>
                </Block>
                <Block className="flex bg-black bg-opacity-80 rounded p-2 w-1/3 border-orange-500 border border-solid">
                    <Image
                        src={register1ImageSrc}
                        alt="PREMIUM GIVEAWAYS"
                        width={36}
                        height={36}
                        className="teaser-image mr-2 ml-2 self-center"
                    />
                    <Block className="flex flex-col justify-center p-3">
                        <Text variant="span" className="text-white text-md font-bold">PREMIUM GIVEAWAYS</Text>
                        <Text variant="span" className="text-white text-xs">Get your free stuff and games at GamingFriends.GG</Text>
                    </Block>
                </Block>
            </Block>
        </Block>
    )
}