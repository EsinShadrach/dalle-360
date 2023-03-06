import { Disclosure, Tab, Transition } from "@headlessui/react";
import { CheckCircle, ChevronDown } from "heroicons-react";
import { useState } from "react";

export default function FilteredConfig({
	styling,
	environment,
	properties,
	objectsOfEnvironment,
	sceneItems,
	setSceneItems,
}) {
	function sceneItemsFunc(event) {
		if (
			environment !== "Mountain" &&
			sceneItems.includes(event.target.textContent) === false
		) {
			setSceneItems([]);
			setSceneItems([...sceneItems, event.target.textContent]);
		} else if (environment === "Mountain") {
			setSceneItems([]);
			setSceneItems([event.target.textContent]);
		}
	}
	return (
		<>
			<Disclosure as={`div`} className="w-full">
				{({ open }) => (
					<div className={`border w-full rounded-lg p-2 ${styling}`}>
						<Disclosure.Button
							as="div"
							className="flex items-center justify-between flex-wrap w-full"
						>
							{properties}
							<ChevronDown
								className={`${
									open ? "rotate-180" : "rotate-0"
								} transition-all duration-300`}
							/>
						</Disclosure.Button>
						<Transition
							show={open}
							enter="transition duration-300 ease-out"
							enterFrom="transform translate-y-full opacity-0"
							enterTo="transform translate-y-0 opacity-100"
							leave="transition duration-300 ease-out"
							leaveFrom="transform translate-y-full opacity-100"
							leaveTo="transform scale-50 opacity-0"
						>
							<Disclosure.Panel className={`py-2`}>
								<Tab.Group vertical>
									<Tab.List
										className={`flex flex-col gap-2 w-full`}
									>
										{objectsOfEnvironment.map((environ) => (
											<Tab
												key={environ}
												onClick={(e) =>
													sceneItemsFunc(e)
												}
												className="text-left p-2 rounded-md font-medium flex items-center justify-between hover:translate-x-2 duration-300 w-full"
											>
												{({ selected }) => (
													<div className="flex gap-1 flex-row items-center w-full">
														<div
															className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
																selected
																	? "bg-rose-500 h-4"
																	: "bg-white"
															}`}
														></div>
														<div className="flex items-center justify-between w-full">
															{environ}
															{sceneItems.includes(environ) && (
																<CheckCircle />
															)}
														</div>
													</div>
												)}
											</Tab>
										))}
									</Tab.List>
								</Tab.Group>
							</Disclosure.Panel>
						</Transition>
					</div>
				)}
			</Disclosure>
		</>
	);
}
