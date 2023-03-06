import NavBrand from "./assets/images/transparent.png";
import discord from "./assets/images/discord.png";
import { Disclosure, Transition, Tab } from "@headlessui/react";
import { ChevronDown } from "heroicons-react";
import EnvironmentConfig from "./configurations";
import FilteredConfig from "./filteredConfig";

export default function MobileNav({
	properties,
	setProperties,
	environment,
	setEnvironment,
	objectsOfEnvironment,
	setObjectOfEnvironment,
	setEnviron,
	mountainProperties,
	livingRoomProperties,
	sceneItems,
	setSceneItems,
}) {
	function setEnviron(property, environment) {
		setEnvironment(environment);
		setProperties(property);
		if (environment === "Mountain") {
			setObjectOfEnvironment(mountainProperties);
		} else {
			setObjectOfEnvironment(livingRoomProperties);
		}
	}

	function handleSubmit() {
		let toBeSubmitted = `An Equirectangular view of a ${environment} with ${sceneItems.join(
			", "
		)}.`;
		console.log(toBeSubmitted);
	}

	return (
		<nav className="text-white bg-black w-full p-3 md:hidden">
			<div>
				<Disclosure>
					{({ open }) => (
						<>
							<div className="flex justify-between bg-black rounded-md">
								<div className="flex items-center gap-2 font-bold text-lg">
									<div>
										<img
											className="w-12 h-12"
											src={NavBrand}
											alt=""
										/>
									</div>
									<div>Dall-E - 360</div>
								</div>
								<Disclosure.Button>
									<div
										className={`${
											open ? "rotate-180" : "rotate-0"
										}
                                            transition-all duration-500 rounded-full border-2 p-0.5 flex items-center justify-center border-t-red-400`}
									>
										<ChevronDown />
									</div>
								</Disclosure.Button>
							</div>
							<Transition
								show={open}
								enter="transition duration-300 ease-out"
								enterFrom="transform translate-y-full opacity-0"
								enterTo="transform translate-y-0 opacity-100"
								leave="transition duration-300 ease-out"
								leaveFrom="transform translate-y-full opacity-100"
								leaveTo="transform scale-50 opacity-0"
							>
								<Disclosure.Panel className="mt-2 p-2 font-medium space-y-2">
									<Tab.Group className="flex items-center mb-20 overflow-y-auto">
										<Tab.List className="flex flex-col gap-3 w-full">
											<Tab className="flex w-full focus:outline-none">
												{({ selected }) => (
													<a
														href="#"
														className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300"
													>
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-5"
																	: "bg-white"
															}`}
														></div>
														Home
													</a>
												)}
											</Tab>
											<Tab className="flex w-full focus:outline-none">
												{({ selected }) => (
													<a
														href="#"
														className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300"
													>
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-5"
																	: "bg-white"
															}`}
														></div>
														Early Access
													</a>
												)}
											</Tab>
											<Tab className="flex w-full focus:outline-none">
												{({ selected }) => (
													<a
														href="#"
														className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300"
													>
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-5"
																	: "bg-white"
															}`}
														></div>
														Gallery
													</a>
												)}
											</Tab>
											<Tab className="flex w-full focus:outline-none">
												{({ selected }) => (
													<a
														href="#"
														className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300 w-full"
													>
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-full"
																	: "bg-white"
															}`}
														></div>
														<EnvironmentConfig
															styling={`${
																selected
																	? "border-rose-600"
																	: "border-white"
															}`}
															environment={
																environment
															}
															setEnviron={
																setEnviron
															}
														/>
													</a>
												)}
											</Tab>
											<Tab className="flex w-full focus:outline-none">
												{({ selected }) => (
													<a
														href="#"
														className="flex flex-row items-center gap-2 focus:outline-none hover:translate-x-2 focus:translate-x-2 duration-300 w-full"
													>
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-full"
																	: "bg-white"
															}`}
														></div>
														<FilteredConfig
															styling={`${
																selected
																	? "border-rose-600"
																	: "border-white"
															}`}
															environment={
																environment
															}
															properties={
																properties
															}
															objectsOfEnvironment={
																objectsOfEnvironment
															}
															sceneItems={
																sceneItems
															}
															setSceneItems={
																setSceneItems
															}
														/>
													</a>
												)}
											</Tab>
											<button
												onClick={handleSubmit}
												className="w-full bg-rose-500 rounded-lg py-1.5 font-medium hover:bg-rose-600 focus:bg-rose-600 transition-all duration-300"
											>
												Generate
											</button>
										</Tab.List>
									</Tab.Group>
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			</div>
		</nav>
	);
}
