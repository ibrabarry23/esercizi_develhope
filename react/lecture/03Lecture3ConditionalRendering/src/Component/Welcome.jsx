function Welcome (props) {
    const isLoggedIn = props.isLoggedIn
    return(
        <h1>Ciao {isLoggedIn ? 'utente':'ospite'}</h1>
    )
}
export default Welcome