import FormState from "./formatState"
function Login() {
    const { username, password, userChange, passChange } = FormState();
    const submit = (e) => {
        e.preventDefault();

        console.log('Sub:', username, password);
    };
    return (
        <form onSubmit={submit} >
            <input type="text" name="username" value={username} onChange={userChange} placeholder="username" />
            <input type="text" name="password" value={password} onChange={passChange} placeholder="########" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Login