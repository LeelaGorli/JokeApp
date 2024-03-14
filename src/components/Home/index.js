import {useState, useEffect} from 'react'

export default function Home(props) {
    const {toLogOut} = props
    const [jokesData, getJokesData] = useState([])
    const [generate,setGenerate] = useState(false)
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
          .then(response => response.json())
          .then(data => {
            getJokesData(data.jokes)
            // set state with the data
          });
      }, [generate]);
      console.log(jokesData)
      const onLogout = () =>{
        toLogOut()
      }
      const toFetch = () => {
        setGenerate(!generate)
      }
  return (
    <div className='bg-light p-5'>
      <h1 className='text-primary text-center mb-4'>Jokes</h1>
      <table class="table">
    <thead className='bg-secondary text-light'>
      <tr>
        <th>Id</th>
        <th>Joke</th>
      </tr>
    </thead>
    <tbody>
        {jokesData.map(eachJoke => (
                <tr key={eachJoke.id}>
                    <td>{eachJoke.id}</td>
                    <td>{eachJoke.joke}</td>
                </tr>
        ))}
    </tbody>
  </table>
  <div className='text-center'>
    <button className='btn btn-success mr-3' onClick={toFetch}>Fetch Jokes</button>
    <button className='btn btn-danger' onClick={onLogout}>Logout</button>
  </div>
    </div>
  )
}
