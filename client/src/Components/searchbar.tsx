export default function Form(props: any) {
  return (
    <form className="Search">
      <input onChange={props.searchArtists} value={props.searchval} placeholder="search"></input>
    </form>

  )
} 