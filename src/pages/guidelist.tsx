// External
import { useState } from "react"
import { Button, SelectChangeEvent } from "@mui/material"
import { clsx } from 'clsx'

// Internal
import { Block, Text, Field, FlexibleBox, SelectField } from "@/components"
import styles from '@/core-ui/styles/modules/guidelist.module.scss'

export default function Guidelist() {
    // Internal variables
    const [searchPending,setSearchPending] = useState<boolean>(false)
    const [searchGuides, setSearchGuides] = useState<string>('')
    const [selectDifficulty, setSelectDifficulty] = useState<string>('')
    const difficultyItems = [
        { "value": "easy", "title": "Easy" },
        { "value": "medium", "title": "Medium" },
        { "value": "hard", "title": "Hard" },
    ]

    // Methods
    const handleSelectDifficulty = (event: SelectChangeEvent) => setSelectDifficulty(event.target.value)

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
            <FlexibleBox className="box-green center-300">See all</FlexibleBox>
            <FlexibleBox className="cs-go center-300">CSGO</FlexibleBox>
            <FlexibleBox className="lol center-300">League<br />Of<br />Legends</FlexibleBox>
            <FlexibleBox className={styles["guidelist-search-bar"] + " no-box !bg-transparent"}>
                <Field
                    type="text"
                    lbl=""
                    placeholder="Search guides"
                    hiddenMUILabel={true}
                    value={searchGuides}
                    onChange={(e: string) => setSearchGuides(e)}
                    disabled={false}
                    className={styles["search-bar-field"]}
                />
            </FlexibleBox>
            <FlexibleBox className={styles["guidelist-search-bar"] + " no-box !bg-transparent"}>
                <SelectField
                    lbl="difficulty-option"
                    title="Select Difficulty"
                    value={selectDifficulty}
                    items={difficultyItems}
                    onChange={(e: any) => handleSelectDifficulty}
                    disabled={false}
                    className={styles["select-difficulty-field"]}
                />
            </FlexibleBox>
            <FlexibleBox className={clsx(styles["guidelist-search-bar"]+" "+styles["search-button"], "no-box", "!bg-transparent")}>
                <Button
                    className={(searchPending ? " pending" : "")}
                    onClick={doSearch}
                    disabled={searchPending}
                >
                    <Text variant="span" className="button button-text">Search</Text>
                </Button>
            </FlexibleBox>
        </Block>
    )
}
