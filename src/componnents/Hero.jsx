import React ,{useState}from "react"

const Hero = (props) => {


  let [heroName,setHeroName]=useState(props.heroName)
  let [heroImg,setHeroImg]=useState(props.heroImg)
  const onCliclHandler = () =>{
    setHeroName("Captain America")
    setHeroImg("https://media.istockphoto.com/id/1353446257/photo/captain-america-shield.webp?b=1&s=170667a&w=0&k=20&c=WNe9wasyASaP3vOrxNEluQMohmEe7Q1KsGB8RYnwiWk=")
    
  }
    
    return <div>
    <h1>Hello {heroName}</h1>
    <img src={heroImg} height={500} width={500} />
    <br/>
    <button onClick={()=>onCliclHandler()}>Change Hero</button>
  </div>

  }
  export default Hero