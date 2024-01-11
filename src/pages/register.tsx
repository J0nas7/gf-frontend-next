// External
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGoogle, faTwitch } from '@fortawesome/free-brands-svg-icons'

// Internal
import { Block, Field, Heading } from "@/components"

export default function Register() {
    // Internal variables
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [userPassword2, setUserPassword2] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [createPending, setCreatePending] = useState<boolean>(false)

    // Methods
    const doRegister = (e?: FormEvent) => {
        e?.preventDefault()

        if (!createPending) {
            setCreatePending(true)
            // TODO createProfile(userRealName, userDisplayName, userEmail, userPassword, userPassword2, userDD, userMM, userYYYY)
            setCreatePending(false)
        }
    }

    const ifEnter = (e: React.KeyboardEvent) => (e.key === 'Enter') ? doRegister() : 0

    return (
        <>
            <Block className="register-page">
                <Heading
                    title="Become a GamingFriends Member!"
                    variant="h2"
                />
                <div className="flex justify-center mb-4 mt-4">
                    <div className="bg-[#7289DA] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                        <FontAwesomeIcon icon={faDiscord} className="register-social-icon" />
                    </div>
                    <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                        <FontAwesomeIcon icon={faFacebook} className="register-social-icon" />
                    </div>
                    <div className="bg-red-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                        <FontAwesomeIcon icon={faGoogle} className="register-social-icon" />
                    </div>
                    <div className="bg-[#6441A5] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                        <FontAwesomeIcon icon={faTwitch} className="register-social-icon" />
                    </div>
                </div>
                <form onSubmit={doRegister} className="guest-form">
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
                        disabled={status === 'resolving' || createPending}
                        className="register-field"
                        required={true}
                    />
                    <Field
                        type={showPassword ? 'text' : 'password'}
                        lbl="Password"
                        innerLabel={true}
                        value={userPassword}
                        onChange={(e: string) => setUserPassword(e)}
                        onKeyDown={
                            (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                ifEnter(event)
                        }
                        endButton={() => { setShowPassword(!showPassword) }}
                        endContent={!showPassword ? 'Show' : 'Hide'}
                        disabled={status === 'resolving' || createPending}
                        className="register-field"
                        required={true}
                    />
                    <Field
                        type={'password'}
                        lbl="Confirm password"
                        innerLabel={true}
                        value={userPassword2}
                        onChange={(e: string) => setUserPassword2(e)}
                        onKeyDown={
                            (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                ifEnter(event)
                        }
                        disabled={status === 'resolving' || createPending}
                        className="register-field"
                        required={true}
                    />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="accept-terms" value="accept-terms" required={true} className="checkbox appearance-none rounded text-orange-500 focus:ring-orange-500 mr-2 h-4 w-4 border border-solid border-gray-300 checked:bg-orange-500" />
                        <label htmlFor="accept-terms" className="text-white">
                            Accept Terms of service
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="confirmnewsletter" value="1" className="checkbox appearance-none rounded text-orange-500 focus:ring-orange-500 mr-2 h-4 w-4 border border-solid border-gray-300 checked:bg-orange-500" />
                        <label htmlFor="confirmnewsletter" className="text-white">
                            Sign me up for your newsletter!
                        </label>
                    </div>
                    <input type="submit" value="Sign up" className="w-full text-center py-3 rounded bg-orange-500 hover:bg-orange-500 text-white focus:outline-none my-1" />
                </form>
                <p className="mt-2">
                    <Link className="text-orange-500 font-bold" href="/login">
                        Already have an account?
                    </Link>
                </p>
            </Block>
        </>
    )
}
