import Title from './Title'

export default function Header() {
    const header = {
        text: "My website"
    }
  return (
      <header 
      id='Header'>
        <Title text = {header.text} />
        <button onClick={() => {"Hello word"}}>click</button>
      </header>
  )
}
