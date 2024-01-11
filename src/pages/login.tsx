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
    const [userPassword, setUserPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [loginPending, setLoginPending] = useState<boolean>(false)

    // Methods
    const doLogin = (e: any = '') => {
        if (typeof e.preventDefault === 'function') e.preventDefault()

        if (!loginPending) {
            setLoginPending(true)
            // TODO handleLoginSubmit(userEmail, userPassword)
            setLoginPending(false)
        }
    }

    const ifEnter = (e: React.KeyboardEvent) => (e.key === 'Enter') ? doLogin() : 0

    return (
        <>
            <Block className="login-page">
                <Heading
                    title="Sign in to your account"
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
                <form onSubmit={doLogin} className="guest-form">
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
                        disabled={status === 'resolving' || loginPending}
                        className="login-field"
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
                        disabled={status === 'resolving' || loginPending}
                        className="login-field"
                        required={true}
                    />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" name="rememberme" value="1" className="checkbox appearance-none rounded text-orange-500 focus:ring-orange-500 mr-2 h-4 w-4 border border-solid border-gray-300 checked:bg-orange-500" />
                        <label htmlFor="rememberme" className="text-white">
                            Remember me!
                        </label>
                    </div>
                    <input type="submit" value="Login" className="w-full text-center py-3 rounded bg-orange-500 hover:bg-orange-500 text-white focus:outline-none my-1" />
                </form>
                <p className="mt-2">
                    <Link className="text-orange-500 font-bold" href="/register">
                        Do not have an account yet?
                    </Link>
                </p>
                <p className="mt-2">
                    <Link className="text-orange-500 font-bold" href="/forgot-password">
                        Did you forget your password?
                    </Link>
                </p>
            </Block>
        </>
    )
}
