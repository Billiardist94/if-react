import HomesGuestLovesHeader from "./HomesGuestLovesHeader";
import HomesGuestLovesCards from "./HomesGuestLovesCards";

const Container = (props) => {
    return (
        <div className={props.className}>
            <HomesGuestLovesHeader className='homes-block-header'/>
            <HomesGuestLovesCards className='homes-block-cards'/>
        </div>
    )
}

export default Container;