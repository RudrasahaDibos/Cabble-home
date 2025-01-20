import banner1 from '../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg'
import banner2 from '../../../assets/hotel.jpg'
import banner3 from '../../../assets/modern-business-building-with-glass-wall-from-empty-floor.jpg'
import banner4 from '../../../assets/modern-business-building-with-glass-wall-from-empty-floor.jpg'
import banner5 from '../../../assets/modern-residential-building.jpg'
import banner6 from '../../../assets/mumbai-skyline-skyscrapers-construction.jpg'
import banner7 from '../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg'
import banner8 from '../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg'
import banner9 from '../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg'
import banner10 from '../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg'


const Ourgallary = () => {

    return (
        <div className="mt-20">
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={banner1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner8} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={banner9} />
		<img src={banner10}alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default Ourgallary;