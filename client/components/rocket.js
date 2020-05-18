import Link from 'next/link'

export default function Rocket({ rocket }) {
    const {
        rocket_id,
        rocket_name,
        country
    } = rocket;

    const rocket_image = `images/cards/${rocket_name}.png`

    return(
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image has-text-centered">
                    <img src={rocket_image} />
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content has-text-centered">
                            <p className="title is-3">{rocket_name}</p>
                            <p className="subtitle is-6">{country}</p>
                            <Link href={{ pathname: '/details', query: { rocket_id } }}>
                                <a><button className="button">Details</button></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}