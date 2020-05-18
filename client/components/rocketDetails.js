import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import Date from '../components/date'

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
            stages,
            active,
            first_flight,
            cost_per_launch,
            success_rate_pct,
        }
    }
`;

export default function RocketDetails({ rocket_id }) {
    const { loading, error, data } = useQuery(ROCKET_DETAILS, {
        variables: { rocket_id }
    })

    if (loading) {
        return <p className="is-size-1 has-text-centered">Loading...</p>
    }
    
    if (error) {
        console.log(error)
        return <p className="is-size-1 has-text-centered">Error</p>
    }

    const {
        rocket_name,
        country,
        description,
        wikipedia,
        height,
        mass,
        diameter,
        stages,
        active,
        first_flight,
        cost_per_launch,
        success_rate_pct,
    } = data.rocket

    const rocket_image = `images/details/${rocket_name}.png`

    return(
        <div className="has-text-white is-size-6">
            <div className="columns">
                <div className="column is-9">
                    <p className="rocket-name has-text-weight-bold">{rocket_name}</p>
                    <p>{country}</p>
                    
                    <br />
            
                    <p className="has-text-weight-bold">Description</p>
                    <p>{description}</p>
                    <br />

                    <div className="columns">
                        <div className="column is-2">
                            <p className="has-text-weight-bold">Size</p>
                            <p>Height</p>
                            <p>Mass</p>
                            <p>Diameter</p>
                            <p>Stages</p>
                        </div>
                        <div className="column is-3">
                            <br />
                            <p>{height.meters} m</p>
                            <p>{mass.kg} kg</p>
                            <p>{diameter.meters} m</p>
                            <p>{stages}</p>
                        </div>
                        <div className="column is-2">
                            <p className="has-text-weight-bold">Launch History</p>
                            <p>Status</p>
                            <p>First Flight</p>
                            <p>Cost per Launch</p>
                            <p>Success Rate</p>
                        </div>
                        <div className="column">
                            <br />
                            {
                                active ? 
                                <p className="has-text-success">Active</p> 
                                : 
                                <p className="has-text-danger">Retired</p>
                            }
                            <p><Date dateString={first_flight} /></p>
                            <p>${cost_per_launch}</p>
                            <p>{success_rate_pct}%</p>
                        </div>
                    </div>

                </div>
                <div className="column has-text-centered">
                    <img src={rocket_image} />
                    <br />
                    <a className="wiki-link has-weight-bold" href={wikipedia}>Wikipedia</a>
                </div>
            </div>
            
        </div>
    )
}