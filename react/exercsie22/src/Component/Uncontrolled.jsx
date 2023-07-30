function UncotrolledLogin () {
    const handleLog = ( event )=>{
        event.preventDefault();

        const username = event.target.elements.username.value ;
        const password = event.target.elements.password.value ;
        console.log({
            username: username,
            password:password
        });
    };
    return(
        <>
        <form onSubmit={handleLog}>
            <label>Username</label>
            <input type="text" name="username" defaultValue={"sium"} autoFocus />

            <label>Password</label>
            <input type="password" name="password"  />

            <button type="submit">Login</button>

        </form>
        </>
    )
}
export default UncotrolledLogin