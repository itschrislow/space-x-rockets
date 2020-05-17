import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const ROCKET_DETAILS = gql`
    query ROCKET_DETAILS($rocket_id: String!) {
        rocket(rocket_id: $rocket_id) {
            rocket_name,
            country,
            description,
            wikipedia,
            height {
                meters
            },
            mass {
                kg
            },
            diameter {
                meters
            },
        }
    }
`;

/*
            stages,
            active,
            first_flight,
            success_rate_pct
*/

export default function RocketDetails({ rocket_id }) {
    const { loading, error, data } = useQuery(ROCKET_DETAILS, {
        variables: { rocket_id }
    })

    if (loading) {
        console.log('loading')
        return <h3>Loading...</h3>
    }
    
    if (error) {
        console.log(error)
        return <h1>Error</h1>
    }

    const {
        rocket_name,
        country,
        description,
        wikipedia,
        height,
        mass,
        diameter
    } = data.rocket

    console.log(data.rocket)

    return(
        <div className="has-text-white is-size-6">
            <div className="columns">
                <div className="column">
                    <p className="rocket-name has-text-weight-bold">{rocket_name}</p>
                    <p>{country}</p>
                    
                    <br />
            
                    <p className="has-text-weight-bold">Description</p>
                    <p>{description}</p>
                </div>
                <div className="column is-one-quarter">
                    <img src="images/example_card_img.jpg" />
                    {/* <Link href='/'><a><p>Wikipedia</p></a></Link> */}
                </div>
            </div>

            <p className="has-text-weight-bold">Size</p>
            <div className="columns">
                <div className="column is-2">
                    <p>Height</p>
                    <p>Mass</p>
                    <p>Diameter</p>
                </div>
                <div className="column">
                    <p>{height.meters} m</p>
                    <p>{mass.kg} kg</p>
                    <p>{diameter.meters} m</p>
                </div>
            </div>
            
        </div>
    )
}