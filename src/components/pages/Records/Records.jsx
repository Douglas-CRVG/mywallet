import useToken from "../../../hooks/useToken"

export default function Records(){
    const {token} = useToken();
    return(
        <h1>Esse é o meu Token: {token}</h1>
    )
}