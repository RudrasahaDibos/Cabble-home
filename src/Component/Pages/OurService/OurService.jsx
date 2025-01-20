import { useLoaderData } from "react-router-dom";
import OurServicess from "./OurServicess";




const OurService = () => {
	const Services = useLoaderData()
	console.log(Services)
	return (
		<div  className="mt-28 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
           
			{
				Services.map((service )=><OurServicess key={service.id} service={service}></OurServicess>)
			}
		</div>
	);
};

export default OurService;