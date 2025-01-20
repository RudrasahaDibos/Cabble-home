import { Link } from "react-router-dom";


const OurServicess = ({service}) => {
    console.log(service)
    const {id, estate_title,segment_name,description,price,status,area,location,facilities,image,view_property_button } = service
	
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{estate_title}</h2>
			<p className="dark:text-gray-800">{description}.</p>
		</div>
		<Link to={`/service/${id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-600 dark:text-gray-50">{view_property_button}</Link>
	</div>
</div>
        </div>
    );
};

export default OurServicess;