// External
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGoogle, faTwitch } from '@fortawesome/free-brands-svg-icons'

// Internal
import { Block, Field, Heading } from "@/components"

export default function Login() {
    // Internal variables
    const [userEmail, setUserEmail] = useState<string>('')

    const [forgotPending, setForgotPending] = useState<boolean>(false)

    // Methods
    const doForgot = (e: any = '') => {
        if (typeof e.preventDefault === 'function') e.preventDefault()

        if (!forgotPending) {
            setForgotPending(true)
            // TODO handleForgotSubmit(userEmail)
            setForgotPending(false)
        }
    }

    const ifEnter = (e: React.KeyboardEvent) => (e.key === 'Enter') ? doForgot() : 0

    return (
        <>
            <Block className="forgot-page">
                <Heading
                    title="Forgot your password?"
                    variant="h2"
                />
                <form onSubmit={doForgot} className="guest-form">
                    <Field
                        type="text"
                        lbl="Email"
                        innerLabel={true}
                        value={userEmail}
                        onChange={(e: string) => setUserEmail(e)}
                        onKeyDown={
                            (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                ifEnter(event)
                        }
                        disabled={status === 'resolving' || forgotPending}
                        className="forgot-field"
                        required={true}
                    />
                    <input type="submit" value="Send reset link" className="w-full text-center py-3 rounded bg-orange-500 hover:bg-orange-500 text-white focus:outline-none my-1" />
                </form>
                <p className="mt-2 text-white">
                    You will receive an e-mail with a reset link
                </p>
                <p className="mt-2">
                    <Link className="text-orange-500 font-bold" href="/login">
                        Remember your password again?
                    </Link>
                </p>
            </Block>
        </>
    )
}
