import { createContext , useState , useContext } from 'react'

export const UserContext = createContext(false);

const UserProvider = ({children}) => {
    const [userDataContext, setUserContext] = useState('Hola');
    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState({});


    return(
        <UserContext.Provider value={{userDataContext, setUserContext, isMessage, setIsMessage, message, setMessage, email, setEmail, question, setQuestion}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);