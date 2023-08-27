export function App() {
    

    return (
        <div>
            <ul>
                <li><Link to="/Counter">Link to Counter app</Link></li>
                <li><Link to='/users/gianmarcotoso'>Link to my tutor's bio</Link></li>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/users'>users list</Link></li>
            </ul>
            
             <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Counter" element={<Counter initialValue={1}/>} />
                <Route path="/users" element={<GithubUserList/>}>
                    <Route path=": login" element={<ShowGithubUser />} />
                    <Route path="/gitlist" element={<GitList />} />
             </Route>
            </Routes> 
        </div>
    )
}