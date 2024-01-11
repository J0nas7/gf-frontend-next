// External
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faInbox, faUsers, faMapSigns, faNewspaper, faGamepad, faUserFriends, faTrophy, faSignOut } from '@fortawesome/free-solid-svg-icons'

// Internal
import { Block, Field, Text } from '@/components'
import { ProfileDTO } from '@/types'

export default function Sidepanel() {
    // Hooks
    //const { getMemberOfSpacesList, spacesList } = useSpaces()

    // Internal variables
    const profileImgSrc = "http://developerjones.dk/lightyear.jpeg"
    const [sidepanelSearch, setSidepanelSearch] = useState<string>('')
    const sidepanelLinks = [
        {
            "title": "Home",
            "link": "/",
            "awesome": faHouse
        },
        {
            "title": "Inbox",
            "link": "#",
            "awesome": faInbox
        },
        {
            "title": "Communities",
            "link": "#",
            "awesome": faUsers
        },
        {
            "title": "Guides",
            "link": "/guidelist",
            "awesome": faMapSigns
        },
        {
            "title": "News",
            "link": "#",
            "awesome": faNewspaper
        },
        {
            "title": "TeamCenter",
            "link": "/teamlist",
            "awesome": faGamepad
        },
        {
            "title": "Friends",
            "link": "#",
            "awesome": faUserFriends
        },
        {
            "title": "Achievements",
            "link": "#",
            "awesome": faTrophy
        },
        {
            "title": "Logout",
            "link": "#",
            "awesome": faSignOut
        },
    ]

    return (
        <Block className="sidepanel-wrapper hidden lg:block">
            <Block className="sidepanel-profile">
                <Block className="profile-wrapper">
                    <Block className="profile-picture">
                        <Link href="/profile/Børge">
                            <Image
                                alt="Profile picture"
                                width={60}
                                height={60}
                                className="picture"
                                src={profileImgSrc}
                                priority={false}
                            />
                        </Link>
                    </Block>
                    <Block className="profile-details">
                        <Link href="/profile/Børge">
                            <Text variant="span" className="profile-name">AndersTagmus</Text>
                            <Block className="profile-points">
                                <Block className="profile-progress w-[70%]"></Block>
                            </Block>
                            <Text variant="span" className="profile-progress-fraction">160/200 XP</Text>
                        </Link>
                    </Block>
                </Block>
            </Block>
            <Block className="sidepanel-nav-list">
                <Block className="search-box">
                    <Field
                        type="text"
                        lbl=""
                        placeholder="Search..."
                        hiddenMUILabel={true}
                        value={sidepanelSearch}
                        onChange={(e: string) => setSidepanelSearch(e)}
                        disabled={false}
                        className="search-box-field"
                    />
                </Block>
                <nav>
                    <ul>
                        {sidepanelLinks && sidepanelLinks.map((elem, key) =>
                            <li key={key}>
                                <Link className="nav-item-link" href={elem.link}>
                                    <FontAwesomeIcon icon={elem.awesome} className="nav-item-icon" />
                                    <Text variant="span" className="nav-item-title">{elem.title}</Text>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </Block>
            <Block className="space-member-context">

            </Block>
        </Block>
    )
}