import { useParams } from 'react-router-dom'

function DogDetails({dogs}){
    console.log(dogs)
    const {name} = useParams()
    const {eachDog} = dogs
    console.log(eachDog)
    //#####################################
    let dog;
    //###########################################
    for(let i=0; i < eachDog.length; i++) {
        if(eachDog[i].name === name) {
            dog = eachDog[i]
        }
    }
    console.log('Dog info')
    console.log(dog)
//#################################
    let dogFacts = []
    for(let fact of dog.facts) {
            dogFacts.push(<li>{fact}</li>)
        }
    
    

    return (

        <div style={{marginLeft:20}}>
            <h1>{dog.name}</h1>
                <h3>{dog.age}</h3>
{/*###############################################*/}
                <img src={dog.src}></img>
                <h2>Facts</h2>
                    <ul>
{/*###############################################*/}
                       {dogFacts}
                        
                    </ul>
        </div>
    )
}



export default DogDetails