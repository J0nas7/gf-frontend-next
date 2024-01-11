// External
import { useState } from "react"
import { Button, SelectChangeEvent } from "@mui/material"
import { clsx } from 'clsx'

// Internal
import { Block, Text, Field, FlexibleBox, SelectField } from "@/components"
import styles from '@/core-ui/styles/modules/list.module.scss'

export default function Teamlist() {
    // Internal variables
    const [searchPending, setSearchPending] = useState<boolean>(false)
    const [searchTeams, setSearchTeams] = useState<string>('')
    const [selectAmbition, setSelectAmbition] = useState<string>('')
    const [selectLanguage, setSelectLanguage] = useState<string>('')
    const [selectAge, setSelectAge] = useState<string>('')
    const [selectScrim, setSelectScrim] = useState<string>('')
    const [selectRank, setSelectRank] = useState<string>('')
    const [selectGame, setSelectGame] = useState<string>('')
    const ambitionItems = [
        { "value": "casual", "title": "Casual" },
        { "value": "e-sport", "title": "E-sport" }
    ]
    const languageItems = [
        { "value": "danish", "title": "Danish" },
        { "value": "english", "title": "English" }
    ]
    const ageItems = [
        { "value": "13-17", "title": "Between 13-17" },
        { "value": "18-21", "title": "Between 18-21" },
        { "value": "22-29", "title": "Between 22-29" },
        { "value": "Over 30", "title": "Over 30+" },
    ]
    const scrimItems = [
        { "value": "yes", "title": "Yes" },
        { "value": "no", "title": "No" },
    ]
    const rankItems = [
        { "value": "beginner", "title": "Beginner" },
        { "value": "practiced", "title": "Practiced" },
        { "value": "pro", "title": "Pro" },
    ]
    const gameItems = [
        { "value": "fifa", "title": "FIFA" },
        { "value": "csgo", "title": "CS:GO" },
    ]

    // Methods
    const handleSelectAmbition = (event: SelectChangeEvent) => setSelectAmbition(event.target.value)
    const handleSelectLanguage = (event: SelectChangeEvent) => setSelectLanguage(event.target.value)
    const handleSelectAge = (event: SelectChangeEvent) => setSelectAge(event.target.value)
    const handleSelectScrim = (event: SelectChangeEvent) => setSelectScrim(event.target.value)
    const handleSelectRank = (event: SelectChangeEvent) => setSelectRank(event.target.value)
    const handleSelectGame = (event: SelectChangeEvent) => setSelectGame(event.target.value)

    const doSearch = (e: any = '') => {
        if (typeof e.preventDefault === 'function') e.preventDefault()

        if (!searchPending) {
            setSearchPending(true)
            // TODO Handling here
            setSearchPending(false)
        }
    }

    return (
        <Block className="!grid grid-wrapper max-cols-3">
            <FlexibleBox numberOfColumns={3} className={"w-full no-box " + styles["search-form"]}>
                <FlexibleBox className="w-full max-w-[575px] mx-auto !px-14">
                    <Field
                        type="text"
                        lbl=""
                        placeholder="Search..."
                        hiddenMUILabel={true}
                        value={searchTeams}
                        onChange={(e: string) => setSearchTeams(e)}
                        disabled={false}
                        className={styles["search-bar-field"] + " w-full mb-2"}
                    />
                    <SelectField
                        lbl="ambition-option"
                        title="Select Ambition"
                        value={selectAmbition}
                        items={ambitionItems}
                        onChange={(e: any) => handleSelectAmbition}
                        disabled={false}
                        className={clsx("mr-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <SelectField
                        lbl="language-option"
                        title="Select Language"
                        value={selectLanguage}
                        items={languageItems}
                        onChange={(e: any) => handleSelectLanguage}
                        disabled={false}
                        className={clsx("ml-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <SelectField
                        lbl="age-option"
                        title="Select Age"
                        value={selectAge}
                        items={ageItems}
                        onChange={(e: any) => handleSelectAge}
                        disabled={false}
                        className={clsx("mr-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <SelectField
                        lbl="scrim-option"
                        title="Select Scrim"
                        value={selectScrim}
                        items={scrimItems}
                        onChange={(e: any) => handleSelectScrim}
                        disabled={false}
                        className={clsx("ml-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <SelectField
                        lbl="rank-option"
                        title="Select Rank"
                        value={selectRank}
                        items={rankItems}
                        onChange={(e: any) => handleSelectRank}
                        disabled={false}
                        className={clsx("mr-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <SelectField
                        lbl="game-option"
                        title="Select Game"
                        value={selectGame}
                        items={gameItems}
                        onChange={(e: any) => handleSelectGame}
                        disabled={false}
                        className={clsx("ml-1 mb-6", styles["select-field"], styles["ambition-field"])}
                    />
                    <Block className="w-full clear-both">
                        <Button
                            className={"block button button-text button-orange !w-60 !h-9 mx-auto"}
                            onClick={doSearch}
                            disabled={searchPending}
                        >
                            <Text variant="span">Search</Text>
                        </Button>
                    </Block>
                </FlexibleBox>
            </FlexibleBox>
            <FlexibleBox numberOfColumns={3} className="">

            </FlexibleBox>
        </Block>
    )
}