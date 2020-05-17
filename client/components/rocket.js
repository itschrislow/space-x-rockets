import Link from 'next/link'

export default function Rocket({ rocket }) {
    const {
        rocket_id,
        rocket_name,
        country
    } = rocket;

    return(
        <div className="column is-one-quarter">
                <div className="card">
                <div className="card-image">
                    {/* <figure class="image is-4by3"> */}
                    <img src="images/example_card_img.jpg" />
                    {/* </figure> */}
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{rocket_name}</p>
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