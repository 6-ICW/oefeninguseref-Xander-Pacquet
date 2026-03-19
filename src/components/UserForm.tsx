import { useRef } from "react"

interface Porps{
    onSubmit: (value?: string) => void
}

export default function UserForm({onSubmit}:Porps) {
    let firstName = useRef<HTMLInputElement>(null)
    let lastName = useRef<HTMLInputElement>(null)
    let typeUser = useRef<HTMLInputElement>(null)


    return (<>
        <form>
            <input ref={firstName} type="text" id="firstName" />
            <input ref={lastName} type="text" id="lastName" />
            <input ref={typeUser} type="text" id="age" />
            <select name="typeUser" id="typeUser">
                {/* type medewerkers */}
            </select>
            <button onClick={() => onSubmit(firstName.current?.value)} type="submit">Registreer</button>
        </form>
    </>)
}