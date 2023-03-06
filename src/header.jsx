import NavBrand from "./assets/images/transparent.png";
import discord from "./assets/images/discord.png";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import EnvironmentConfig from './configurations'
import FilteredConfig from "./filteredConfig";
import MobileNav from "./headerMobile";

const livingRoomProperties= [
	"LED lights",
	"Seats",
	"Coffee Table",
	"Carpet",
	"Dinner Table",
	"Wide Windows",
	"Plants"
]
const mountainProperties = [
	"Sunset",
	"Thunder Clouds",
	"Sunrise",
	"Starry Night"
]// in mountain only one item can be there...

export default function NavBar() {
	let [properties, setProperties] = useState("Environment");
	let [environment, setEnvironment] = useState("Living Room");
    let [sceneItems, setSceneItems] = useState([])
	const [objectsOfEnvironment, setObjectOfEnvironment] = useState(livingRoomProperties)
	
	function setEnviron(property, environment) {
		setEnvironment(environment);
		setProperties(property);
		if (environment === "Mountain"){
			setObjectOfEnvironment(mountainProperties)
		} else {
			setObjectOfEnvironment(livingRoomProperties)
		}
	}
		
	function handleSubmit(){
		let toBeSubmitted = `An Equirectangular view of a ${environment} with ${sceneItems.join(", ")}.`
		console.log(toBeSubmitted);
	}
	
	return (
		// Making 2 navbar
		<header className="fixed w-full z-50 flex ">
			<nav className="hidden md:flex bg-black text-white fixed h-screen p-3">
				<div className="flex flex-col h-full gap-36 overflow-auto">
					<div className="flex items-center justify-center gap-2">
						<div>
							<img className="w-16 h-16" src={NavBrand} alt="" />
						</div>
						<div className="font-bold text-xl mr-2">
							DALL-E - 360
						</div>
					</div>
					<Tab.Group className="flex items-center mb-20">
						<Tab.List className="flex flex-col gap-3 w-full">
							<Tab className="flex w-full focus:outline-none">
								{({selected})=>(
									<a href="#" className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300">
										<div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${selected?"bg-rose-500 h-full":"bg-white"}`}></div>
										Home
									</a>
								)}
							</Tab>
							<Tab className="flex w-full focus:outline-none">
								{({selected})=>(
									<a href="#" className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300">
										<div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${selected?"bg-rose-500 h-full":"bg-white"}`}></div>
										Early Access
									</a>
								)}
							</Tab>
							<Tab className="flex w-full focus:outline-none">
								{({selected})=>(
									<a href="#" className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300">
										<div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${selected?"bg-rose-500 h-full":"bg-white"}`}></div>
										Gallery
									</a>
								)}
							</Tab>
							<Tab className="w-full flex items-center gap-2 focus:outline-none">
								{({selected})=>(
									<>
										<div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${selected?"bg-rose-500 h-full":"bg-white"}`}></div>
										<EnvironmentConfig
											styling={`${selected?'border-rose-400':'border-white'}`}
											environment={environment}
											setEnvironment={setEnvironment}
											properties={properties}
											setProperties={setProperties}
											setObjectOfEnvironment={setObjectOfEnvironment}
											objectsOfEnvironment={objectsOfEnvironment}
											setEnviron={setEnviron}
										/>
									</>
								)}
							</Tab>
							<Tab className="w-full flex items-center gap-2 focus:outline-none">
								{({selected})=>(
									<>
										<div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${selected?"bg-rose-500 h-full":"bg-white"}`}></div>
										<FilteredConfig
											styling={`${selected?'border-rose-400':'border-white'}`}
											environment={environment}
											setEnvironment={setEnvironment}
											properties={properties}
											setProperties={setProperties}
											setObjectOfEnvironment={setObjectOfEnvironment}
											objectsOfEnvironment={objectsOfEnvironment}
											setEnviron={setEnviron}
											sceneItems={sceneItems}
											setSceneItems={setSceneItems}
										/>
									</>
								)}
							</Tab>
							<button onClick={handleSubmit} className="w-full bg-rose-500 rounded-lg py-1.5 font-medium hover:bg-rose-600 focus:bg-rose-600 transition-all duration-300">Generate</button>
						</Tab.List>
					</Tab.Group>
					<a
						href="#"
						className="flex items-center gap-1 px-3 p-3 text-gray-200 fixed bottom-0"
					>
						<img className="w-10" src={discord} alt="" />
						<div className="bg-gray-300 w-1 h-1 rounded-full"></div>
						<div>Discord</div>
					</a>
				</div>
			</nav>
			<MobileNav
				properties={properties}
				setProperties={setProperties}
				environment={environment}
				objectsOfEnvironment={objectsOfEnvironment}
				setEnviron={setEnviron}
				setEnvironment={setEnvironment}
				setObjectOfEnvironment={setObjectOfEnvironment}
				mountainProperties={mountainProperties}
				livingRoomProperties={livingRoomProperties}
				sceneItems={sceneItems}
				setSceneItems={setSceneItems}
			/>
		</header>
	);
}

