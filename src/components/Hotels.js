import data from "../constants/content";
import Hotel from "./Hotel";

const Hotels = () => {
    return data.map(item => {
        return (
            <Hotel key={data.id}>
                <div className="homes-list-card">
                    <div className="homes-list-images">
                        <img src={item.imageUrl} alt={item.name} className="homes-link-image"/>
                    </div>
                    <div className="homes-list-content">
                        <div className="homes-list-heading">
                            <span className="homes-list-title">{item.name}</span>
                            <span className="homes-list-subtitle">{item.city}, {item.country}</span>
                        </div>
                    </div>
                </div>
            </Hotel>
        )
    })
};

export default Hotels;