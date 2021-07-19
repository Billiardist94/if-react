import Hotels from "./Hotels";
import HomesGuestLovesButtons from "./HomesGuestLovesButtons";
import HomesGuestLovesUl from "./HomesGuestLovesUl";

const HomesGuestLovesCards = (props) => {
    return (
        <div className={props.className}>
            <HomesGuestLovesUl className='homes-list'/>
            <HomesGuestLovesButtons className="homes-block-nav"/>
        </div>
    )
}

export default HomesGuestLovesCards;