import { useState } from "react";
function FormState() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userChange = (e) => {
        setUsername(e.target.value);
    };

    const passChange = (e) => {
        setPassword(e.target.value);
    };
    return {
        username,
        password,
        userChange,
        passChange,
    }

}
export default FormState