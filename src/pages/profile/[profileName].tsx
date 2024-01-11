// External
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CSSProperties, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRocket,
    faCircleDot,
    faUserPlus,
    faEnvelope,
    faUser,
    faCakeCandles,
    faGamepad,
    faHeadset,
    faMagnifyingGlass,
    faPeopleGroup,
    faLightbulb,
    faAddressCard,
    faClock,
    faAsterisk,
    faImage,
    faTrophy
} from '@fortawesome/free-solid-svg-icons'
import {
    faDiscord,
    faFacebook,
    faGoogle,
    faTwitch
} from '@fortawesome/free-brands-svg-icons'
import { hasFlag } from 'country-flag-icons'
import * as allFlags from 'country-flag-icons/react/3x2'
import { Button } from "@mui/material"

// Internal
import { Block, Text, FlexibleBox } from "@/components"

export default function ProfilePage() {
    // Hooks
    const router = useRouter()

    // Internal variables
    const profileName: string = router.query.profileName?.toString()!
    const profilePlaystyle = "Casual"
    const profileLookingFor = "Multiplayer"
    const profileNationality = "DK"
    const profileLevel = "Level 2"
    const [profileImgSrc, setProfileImgSrc] = useState<string>('http://developerjones.dk/lightyear.jpeg')

    const noProfilePic = "http://dev.gamingfriends.gg/images/profile/defaultprofile1.png"
    const Flag = hasFlag(profileNationality) ? allFlags[profileNationality] : allFlags['DK']

    const coverCSS: CSSProperties = {
        minHeight: "200px"
    }
    const protectLayerCSS: CSSProperties = {
        background: "rgba(34, 38, 47, 0.5)",
        boxShadow: "0px 2px 2px rgb(0 0 0 / 25%)"
    }
    const css3: CSSProperties = {
        background: "#363c49"
    }
    const css4: CSSProperties = {
        borderColor: "#363c49"
    }
    const postCSS: CSSProperties = {
        background: "rgba(0,0,0,0.15)"
    }
    const commentBoxCSS: CSSProperties = {
        background: "rgba(256,256,256,0.1)"
    }
    const commentCSS1: CSSProperties = {
        background: "rgba(255,255,255,0.05)"
    }
    const commentCSS2: CSSProperties = {
        minHeight: "24px"
    }
    const commentCSS3: CSSProperties = {
        fontSize: "11px"
    }

    return (
        <>
            <Block className="w-full !grid grid-wrapper max-cols-4 float-left profile-wrapper profile-page">
                <FlexibleBox numberOfColumns={4} className='no-box text-white'>
                    <Block>
                        <Block className="relative overflow-hidden rounded-t-lg" style={coverCSS}>
                            <img src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
                            <Block className="absolute w-full h-full z-20 top-0 left-0" style={protectLayerCSS}></Block>
                        </Block>
                        <Block className="h-16 px-4 mb-6 rounded-b-lg relative z-30 flex items-center" style={css3}>
                            <Block className="pl-5 absolute -top-20 z-30">
                                {profileImgSrc && (
                                    <Image
                                        alt="Profile picture"
                                        width={112}
                                        height={112}
                                        className="rounded-full border-4 bg-[#2b303b] p-2"
                                        style={css4}
                                        src={profileImgSrc}
                                        priority={false}
                                        onError={() => {
                                            setProfileImgSrc(noProfilePic)
                                        }}
                                    />
                                )}
                            </Block>
                            <Block className="mx-5 pl-36 absolute -top-11 w-[calc(100%-2.5rem)]">
                                <Text variant="p" className="w-full">
                                    <Text variant="span" className="text-xl font-bold float-left">Jonas Sørensen</Text>
                                    <Text variant="span" className="ml-1 float-left">({profileName})</Text>
                                    <Text variant="span" className="ml-1 float-left">
                                        <FontAwesomeIcon icon={faRocket} className="w-6 h-5" />
                                    </Text>
                                    <Text variant="span" className="clear-both"></Text>
                                </Text>

                                <Block className="flex items-center gap-8">
                                    <Block className="order-1">
                                        <Block variant="p" className="w-full">
                                            <Text variant="span" className="flex items-center">
                                                <FontAwesomeIcon icon={faCircleDot} className="text-green-300 w-4 h-3 mr-1 rounded-full float-left" />
                                                <Text variant="span" className="text-sm">Online: a moment ago</Text>
                                            </Text>
                                            <Text variant="span" className="clear-both"></Text>
                                        </Block>
                                        <Block variant="p" className="w-full">
                                            <Text variant="span" className="flex items-center">
                                                <Flag className="w-4 h-3 mr-1 rounded-full float-left" />
                                                <Text variant="span" className="text-sm">Denmark / Danish</Text>
                                            </Text>
                                            <Text variant="span" className="clear-both"></Text>
                                        </Block>
                                        <Block variant="p" className="w-full hidden">
                                            <Text variant="span" className="flex items-center">
                                                <FontAwesomeIcon icon={faUser} className="w-4 h-3 mr-1 rounded-full float-left" />
                                                <Text variant="span" className="text-sm">Male / 30 years</Text>
                                            </Text>
                                            <Text variant="span" className="clear-both"></Text>
                                        </Block>
                                    </Block>

                                    <Block className="order-2 hidden">
                                        <Block variant="p" className="w-full">
                                            <Text variant="span" className="flex items-center">
                                                <FontAwesomeIcon icon={faGamepad} className="w-4 h-3 mr-1 rounded-full float-left" />
                                                <Text variant="span" className="text-sm mr-1">
                                                    <Text variant="span"><strong>Playstyle: </strong>{profilePlaystyle}</Text>
                                                </Text>
                                                <FontAwesomeIcon icon={faHeadset} className="w-4 h-3 rounded-full float-left" />
                                            </Text>
                                            <Text variant="span" className="clear-both"></Text>
                                        </Block>
                                        <Block variant="p" className="w-full">
                                            <Text variant="span" className="flex items-center">
                                                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-3 mr-1 rounded-full float-left" />
                                                <Text variant="span" className="text-sm mr-1">
                                                    <Text variant="span"><strong>Looking for: </strong>{profileLookingFor}</Text>
                                                </Text>
                                                <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-3 rounded-full float-left" />
                                            </Text>
                                            <Text variant="span" className="clear-both"></Text>
                                        </Block>
                                    </Block>

                                    <Block className="order-3 hidden ml-auto uppercase">
                                        <Block className="flex items-center gap-8">
                                            <Block className="order-1">
                                                <Text variant="span" className="font-semibold text-2xl">35</Text>
                                                <Text variant="span" className="font-extralight">Games won</Text>
                                            </Block>
                                            <Block className="order-2">
                                                <Text variant="span" className="font-semibold text-2xl">3040</Text>
                                                <Text variant="span" className="font-extralight">Followers</Text>
                                            </Block>
                                            <Block className="order-3">
                                                <Text variant="span" className="font-semibold text-2xl">17</Text>
                                                <Text variant="span" className="font-extralight">Trophies</Text>
                                            </Block>
                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </FlexibleBox>
                <FlexibleBox numberOfColumns={3} title="Profile Feed" className="lg:col-span-2 xl:col-span-3">
                    <Block className="p-2 mb-5 rounded-lg border border-solid border-gray-500" style={postCSS}>
                        <Block className="flex items-center mb-4">
                            <Block className="mr-3">
                                {profileImgSrc && (
                                    <Image
                                        alt="Profile picture"
                                        width={55}
                                        height={55}
                                        className="object-cover rounded-full align-middle border border-green p-2 bg-box"
                                        style={css4}
                                        src={profileImgSrc}
                                        priority={false}
                                        onError={() => {
                                            setProfileImgSrc(noProfilePic)
                                        }}
                                    />
                                )}
                            </Block>
                            <Block className="leading-4">
                                <p className="font-bold">{profileName}</p>
                                <p className="text-gray-200 text-xs">13 hours ago</p>
                            </Block>
                        </Block>
                        <Block className="px-2">
                            <Text variant="p">I like to move it, move it!</Text>
                        </Block>
                        <Block className="asdasd p-4 pt-0">
                            <Block className="w-full flex flex-row pb-4 mt-4">
                                <Block className="w-full">
                                    <form action="http://dev.gamingfriends.gg/comment/7" method="POST">
                                        <input type="hidden" name="_token" value="n8Eq8AtkURmTpkocIxEHAoTFQpy09gO2ngObDZE6" />                                        <textarea name="comment" placeholder="Comment here" style={commentBoxCSS} className="h-10 text-sm w-full block rounded-l-md resize-none focus:outline-none p-2"></textarea>
                                    </form>
                                </Block>
                                <Block className="">
                                    <button type="submit" className="h-10 uppercase text-orange-500 border border-solid border-gray-500 p-1 rounded-r-md text-xs font-bold">Send</button>
                                </Block>
                            </Block>
                            <hr className="border-t border-gray-500 opacity-30 w-1/2 mx-auto" />
                            <Block className="flex flex-col">
                                <div className="text-sm break-words relative flex leading-4 mt-3 rounded-3xl p-2" style={commentCSS1}>
                                    <div className="p-1 relative h-full mr-1 flex-shrink-0">
                                        <a href="/p/b">
                                            {profileImgSrc && (
                                                <Image
                                                    alt="Profile picture"
                                                    width={24}
                                                    height={24}
                                                    className="h-6 w-6 min-w-full rounded-full object-cover p-1 bg-box"
                                                    style={commentCSS2}
                                                    src={profileImgSrc}
                                                    priority={false}
                                                    onError={() => {
                                                        setProfileImgSrc(noProfilePic)
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </div>

                                    <div className="flex flex-col flex-wrap w-full">
                                        <div className="flex items-center flex-wrap">
                                            <a href="/p/b"><span className="mr-1 font-bold">Børge</span></a>
                                            <span className="opacity-50" style={commentCSS3}>13 hours ago</span>
                                        </div>
                                        <div className="flex justify-between w-full pr-2">


                                            <p className="text-gray-300">test</p>

                                            <p className="text-gray-300"> </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm break-words relative flex leading-4 mt-3 rounded-3xl p-2" style={commentCSS1}>
                                    <div className="p-1 relative h-full mr-1 flex-shrink-0">
                                        <a href="/p/b">
                                            {profileImgSrc && (
                                                <Image
                                                    alt="Profile picture"
                                                    width={24}
                                                    height={24}
                                                    className="h-6 w-6 min-w-full rounded-full object-cover p-1 bg-box"
                                                    style={commentCSS2}
                                                    src={noProfilePic}
                                                    priority={false}
                                                />
                                            )}
                                        </a>
                                    </div>

                                    <div className="flex flex-col flex-wrap w-full">
                                        <div className="flex items-center flex-wrap">
                                            <a href="/p/b"><span className="mr-1 font-bold">Karl</span></a>
                                            <span className="opacity-50" style={commentCSS3}>13 hours ago</span>
                                        </div>
                                        <div className="flex justify-between w-full pr-2">


                                            <p className="text-gray-300">test hest fest vest mest</p>

                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </Block>
                    </Block>
                    <Block className="p-2 mb-5 rounded-lg border border-solid border-gray-500" style={postCSS}>
                        <Block className="flex items-center mb-4">
                            <Block className="mr-3">
                                {profileImgSrc && (
                                    <Image
                                        alt="Profile picture"
                                        width={55}
                                        height={55}
                                        className="object-cover rounded-full align-middle border border-green p-2 bg-box"
                                        style={css4}
                                        src={profileImgSrc}
                                        priority={false}
                                        onError={() => {
                                            setProfileImgSrc(noProfilePic)
                                        }}
                                    />
                                )}
                            </Block>
                            <Block className="leading-4">
                                <p className="font-bold">{profileName}</p>
                                <p className="text-gray-200 text-xs">13 hours ago</p>
                            </Block>
                        </Block>
                        <Block className="px-2">
                            <Text variant="p">En to tre fire</Text>
                        </Block>
                        <Block className="asdasd p-4 pt-0">
                            <Block className="w-full flex flex-row pb-4 mt-4">
                                <Block className="w-full">
                                    <form action="http://dev.gamingfriends.gg/comment/7" method="POST">
                                        <input type="hidden" name="_token" value="n8Eq8AtkURmTpkocIxEHAoTFQpy09gO2ngObDZE6" />                                        <textarea name="comment" placeholder="Comment here" style={commentBoxCSS} className="h-10 text-sm w-full block rounded-l-md resize-none focus:outline-none p-2"></textarea>
                                    </form>
                                </Block>
                                <Block className="">
                                    <button type="submit" className="h-10 uppercase text-orange-500 border border-solid border-gray-500 p-1 rounded-r-md text-xs font-bold">Send</button>
                                </Block>
                            </Block>
                            <hr className="border-t border-gray-500 opacity-30 w-1/2 mx-auto" />
                            <Block className="flex flex-col">
                                <div className="text-sm break-words relative flex leading-4 mt-3 rounded-3xl p-2" style={commentCSS1}>
                                    <div className="p-1 relative h-full mr-1 flex-shrink-0">
                                        <a href="/p/b">
                                            {profileImgSrc && (
                                                <Image
                                                    alt="Profile picture"
                                                    width={24}
                                                    height={24}
                                                    className="h-6 w-6 min-w-full rounded-full object-cover p-1 bg-box"
                                                    style={commentCSS2}
                                                    src={profileImgSrc}
                                                    priority={false}
                                                    onError={() => {
                                                        setProfileImgSrc(noProfilePic)
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </div>

                                    <div className="flex flex-col flex-wrap w-full">
                                        <div className="flex items-center flex-wrap">
                                            <a href="/p/b"><span className="mr-1 font-bold">Børge</span></a>
                                            <span className="opacity-50" style={commentCSS3}>13 hours ago</span>
                                        </div>
                                        <div className="flex justify-between w-full pr-2">


                                            <p className="text-gray-300">test</p>

                                            <p className="text-gray-300"> </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm break-words relative flex leading-4 mt-3 rounded-3xl p-2" style={commentCSS1}>
                                    <div className="p-1 relative h-full mr-1 flex-shrink-0">
                                        <a href="/p/b">
                                            {profileImgSrc && (
                                                <Image
                                                    alt="Profile picture"
                                                    width={24}
                                                    height={24}
                                                    className="h-6 w-6 min-w-full rounded-full object-cover p-1 bg-box"
                                                    style={commentCSS2}
                                                    src={noProfilePic}
                                                    priority={false}
                                                />
                                            )}
                                        </a>
                                    </div>

                                    <div className="flex flex-col flex-wrap w-full">
                                        <div className="flex items-center flex-wrap">
                                            <a href="/p/b"><span className="mr-1 font-bold">Karl</span></a>
                                            <span className="opacity-50" style={commentCSS3}>13 hours ago</span>
                                        </div>
                                        <div className="flex justify-between w-full pr-2">


                                            <p className="text-gray-300">test hest fest vest mest</p>

                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </Block>
                    </Block>
                </FlexibleBox>
                <FlexibleBox numberOfColumns={1} className="right-side profile-details no-box">
                    <Block className="w-full !grid grid-wrapper max-cols-2 float-left lg:!block">
                        <FlexibleBox title="Socials" className="profile-socials lg:no-box mb-6">
                            <div className="flex justify-center mb-4 mt-4">
                                <div className="bg-[#7289DA] h-12 w-12 mx-2 rounded-full flex items-center justify-center text-white font-bold">
                                    <FontAwesomeIcon icon={faDiscord} className="register-social-icon" />
                                </div>
                                <div className="bg-blue-600 h-12 w-12 mx-2 rounded-full flex items-center justify-center text-white font-bold">
                                    <FontAwesomeIcon icon={faFacebook} className="register-social-icon" />
                                </div>
                                <div className="bg-red-600 h-12 w-12 mx-2 rounded-full flex items-center justify-center text-white font-bold">
                                    <FontAwesomeIcon icon={faGoogle} className="register-social-icon" />
                                </div>
                                <div className="bg-[#6441A5] h-12 w-12 mx-2 rounded-full flex items-center justify-center text-white font-bold">
                                    <FontAwesomeIcon icon={faTwitch} className="register-social-icon" />
                                </div>
                            </div>
                            <Block className="add-friend text-center mb-4">
                                <Button className="button button-orange !max-w-[240px] normal-case">
                                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                                    Add Friend
                                </Button>
                            </Block>
                            <Block className="add-friend text-center mb-4">
                                <Button className="button button-orange !max-w-[240px] normal-case">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                    Send Message
                                </Button>
                            </Block>
                        </FlexibleBox>
                        <FlexibleBox title="Player Info" className="profile-generic-details mb-6">
                            <Block variant="p" className="w-full">
                                <Text variant="span" className="flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="w-4 h-3 mr-1 rounded-full float-left" />
                                    <Text variant="span" className="text-sm">Male</Text>
                                </Text>
                                <Text variant="span" className="clear-both"></Text>
                            </Block>
                            <Block variant="p" className="w-full">
                                <Text variant="span" className="flex items-center">
                                    <FontAwesomeIcon icon={faCakeCandles} className="w-4 h-3 mr-1 rounded-full float-left" />
                                    <Text variant="span" className="text-sm">30 years old</Text>
                                </Text>
                                <Text variant="span" className="clear-both"></Text>
                            </Block>
                            <Block variant="p" className="w-full">
                                <Text variant="span" className="flex items-center">
                                    <FontAwesomeIcon icon={faGamepad} className="w-4 h-3 mr-1 rounded-full float-left" />
                                    <Text variant="span" className="text-sm mr-1">
                                        <Text variant="span"><strong>Playstyle: </strong>{profilePlaystyle}</Text>
                                    </Text>
                                    <FontAwesomeIcon icon={faHeadset} className="w-4 h-3 rounded-full float-left" />
                                </Text>
                                <Text variant="span" className="clear-both"></Text>
                            </Block>
                            <Block variant="p" className="w-full">
                                <Text variant="span" className="flex items-center">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-3 mr-1 rounded-full float-left" />
                                    <Text variant="span" className="text-sm mr-1">
                                        <strong>Looking for: </strong>{profileLookingFor}
                                    </Text>
                                    <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-3 rounded-full float-left" />
                                </Text>
                                <Text variant="span" className="clear-both"></Text>
                            </Block>
                            <Block variant="p" className="w-full">
                                <Text variant="span" className="flex items-center">
                                    <Text variant="span">
                                        <FontAwesomeIcon icon={faLightbulb} className="w-4 h-3 mr-1 rounded-full float-left" />
                                    </Text>
                                    <Text variant="span" className="text-sm mr-1">
                                        <strong>Experience:</strong>
                                    </Text>
                                </Text>
                            </Block>
                            <Block className="w-full">
                                <Text variant="span">{profileLevel}</Text>
                                <Block className="profile-points">
                                    <Block className="profile-progress w-[70%]"></Block>
                                </Block>
                                <Text variant="span" className="profile-progress-fraction">160/200 XP</Text>
                            </Block>
                        </FlexibleBox>
                        <FlexibleBox title="Links for subpages" className="profile-subpages mb-6">
                            <ul>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <FontAwesomeIcon icon={faAddressCard} className="size-4 rounded-full mr-3" />
                                    <span className="text-white flex-1">About/Bio</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <FontAwesomeIcon icon={faClock} className="size-4 rounded-full mr-3" />
                                    <span className="text-white flex-1">Recent Activity</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <FontAwesomeIcon icon={faAsterisk} className="size-4 rounded-full mr-3" />
                                    <span className="text-white flex-1">Setup</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <FontAwesomeIcon icon={faImage} className="size-4 rounded-full mr-3" />
                                    <span className="text-white flex-1">Media</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <FontAwesomeIcon icon={faTrophy} className="size-4 rounded-full mr-3" />
                                    <span className="text-white flex-1">Achievements</span>
                                </li>
                            </ul>
                        </FlexibleBox>
                        <FlexibleBox title="Favorite Games" className="profile-favorite-games mb-6">
                            <ul>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">FIFA</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">CS:GO</span>
                                </li>
                            </ul>
                        </FlexibleBox>
                        <FlexibleBox title="Communities" className="profile-communities-joined mb-6">
                            <ul>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">Brogrammers 4ever</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">PureGym</span>
                                </li>
                            </ul>
                        </FlexibleBox>
                        <FlexibleBox title="Teams" className="profile-teams-member mb-6">
                            <ul>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">Laravel for Leif</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">reactFTW</span>
                                </li>
                            </ul>
                        </FlexibleBox>
                        <FlexibleBox title="Friends" className="profile-friends">
                            <ul>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">Abc</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">Def</span>
                                </li>
                                <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
                                    <span className="text-white flex-1">Ghi</span>
                                </li>
                            </ul>
                        </FlexibleBox>
                    </Block>
                </FlexibleBox>
            </Block>
            <Block className="clear-both float-left"></Block>
        </>
    )
}
