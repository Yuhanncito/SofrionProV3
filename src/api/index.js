const BASEURL = 'https://proto-api2-0.vercel.app/api'
const BASEURL0 = 'http://localhost:4000/api'
export const LoginFunction = async (data) => {
    try {
        const response = await fetch(`${BASEURL}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}
export const VerifyEmail = async (data) => {
    try {
        const response = await fetch(`${BASEURL}/auth/${(data.option === "register")?'signup':(data.option==="login")?'signin':'forgotPassword'}/confirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (data) => {
    try{
        const response = await fetch(`${BASEURL}/auth/${data}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        return result
    }catch(error){
        console.log(error)
    }
}

export const getQuestion = async (data) => {
    try{
        const response = await fetch(`${BASEURL}/auth/question/${data}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        return result
    }catch(error){
        console.log(error)
    }
}

export const VerifyQuestion = async (data) => {
    try{
        const response = await fetch(`${BASEURL}/auth/secret`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                secret: data.question,
                respuestaSecreta: data.answer
            })
        })
        const result = await response.json()

        return result
    }catch(error){
        console.log(error)
    }
}

export const SendEmail = async (data) => {
    try{
        const response = await fetch(`${BASEURL}/auth/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    }catch(error){
        console.log(error)
    }
}


