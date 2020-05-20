// import { css } from '@emotion/core'
import BeatLoader from 'react-spinners/BeatLoader'

export default function Loader() {
    return(
        <div className="has-text-centered">
            <BeatLoader
                size={15}
                color={"#FFFFFF"}
                css={""}
            />
        </div>
    )
}