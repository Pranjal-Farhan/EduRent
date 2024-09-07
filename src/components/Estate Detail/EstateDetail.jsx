import { useParams } from "react-router-dom";

const EstateDetail = () => {
    const {id}=useParams();
    return (
        <div>
            <h2>dis is the estate detail for estate no:{id}</h2>
        </div>
    );
};

export default EstateDetail;