import FetchAPI from "./openbetaapi";

const AreaList = ( {areas, title}) => {


    return (
        <div className="area-list">
            <h2>{title}</h2>
            {areas.map((area) => (
                <div className="area-preview" key ={area.id}>
                    <h2>{ area.title }</h2>
                </div>
            ))}
        </div>
    )
}

export default AreaList;