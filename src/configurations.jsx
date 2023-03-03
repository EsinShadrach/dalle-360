import { Fragment, useState } from "react";
import {
	CheckIcon,
	ChevronUpDownIcon,
	XMarkIcon,
	CheckCircleIcon
} from "@heroicons/react/20/solid";
import { Dialog, Transition, Listbox, Disclosure } from "@headlessui/react";
import dalle_dark from './assets/images/dall.png'

const viewType = [
	{ id: 1, name: "Paranomic View" },
	{ id: 2, name: "Wide Angle" },
];

const roomType = [
	{ id: 1, name: "Luxury House" },
	{ id: 2, name: "Office Room" },
];

const roomStyle = [
	{ id: 1, name: "Luxury House" },
	{ id: 2, name: "Light Bloom" },
	{ id: 3, name: "Atmospheric" },
	{ id: 4, name: "Cozy" },
	{ id: 5, name: "Plants" },
	{ id: 6, name: "minimalist contemporary modern design living room" },
	{ id: 7, name: "fabric and textiles" },
	{ id: 8, name: "Office room" },
	{ id: 9, name: "LED lights" },
	{ id: 10, name: "Seats" },
	{ id: 11, name: "coffee table" },
	{ id: 12, name: "Carpet" },
	{ id: 13, name: "Dinner table" },
	{ id: 14, name: "wide windows" },
];

const rs = [
	{
		id:1, 
		name:"Light Bloom",
		type:"Luxury House"
	},
	{
		id:2, 
		name:"Atmospheric",
		type:"Luxury House"
	},
	{
		id:3, 
		name:"Cozy",
		type:"Luxury House"
	},
	{
		id:4, 
		name:"Plants",
		type:"Luxury House"
	},
	{
		id:5, 
		name:"Minimalist Contemporary Modern Design Living Room",
		type:"Luxury House"
	},
	{
		id:6, 
		name:"Fabric And Textile",
		type:"Luxury House"
	},
	{
		id:7, 
		name:"LED Lights",
		type:"Office Room"
	},
	{
		id:8, 
		name:"Seats",
		type:"Office Room"
	},
	{
		id:9, 
		name:"Coffee Table",
		type:"Office Room"
	},
	{
		id:10, 
		name:"Carpet",
		type:"Office Room"
	},
	{
		id:11, 
		name:"Dinner Table",
		type:"Office Room"
	},
	{
		id:12, 
		name:"Wide Windows",
		type:"Office Room"
	},
]

export default function SettingsPrompt({ isOpen, setIsOpen }) {
	function closeModal() {
		setIsOpen(false);
	}
	let [data, setData] = useState("Luxury House")

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										<div className="flex items-center mb-4 ">
											<div>
												<img className="w-10 h-10" src={dalle_dark} alt="" draggable={false}/>
											</div>
											<div className="text-center w-full">
												~ Configure ~
											</div>
											<div
												role="button"
												tabIndex="1"
												className="w-fit"
												onClick={closeModal}
											>
												<XMarkIcon className="w-6 h-6" />
											</div>
										</div>
										<div className="space-y-3">
											<div className="flex gap-2 flex-col md:flex-row">
												<div className="w-full">
													<Demo
														arrayOfObjects={
															viewType
														}
													/>
												</div>
												<div className="w-full">
													<Demo
														arrayOfObjects={
															roomType
														}
														setData={setData}
													/>
												</div>
											</div>
											<div className="w-full">
												<Sample filter={data} />
											</div>
										</div>
									</Dialog.Title>
									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 w-full"
											onClick={closeModal}
										>
											Okay!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
	{ id: 5, name: "Tanya Fox" },
	{ id: 6, name: "Hellen Schmidt" },
];
function Demo({ arrayOfObjects, setData }) {
	const [selected, setSelected] = useState(arrayOfObjects[0]);
	function isSelected(a, b) {
		if (a === b) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div>
			<Listbox value={selected} onChange={setSelected}>
				<Listbox.Button className="border rounded-lg p-2 w-full">
					<div className="flex justify-between px-3">
						{selected.name}
						<ChevronUpDownIcon className="w-6 h-6" />
					</div>
				</Listbox.Button>
				<Transition
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="mt-3">
						<Listbox.Options className="space-y-1">
							{arrayOfObjects.map((option) => (
								<Listbox.Option
									key={option.id}
									className={({ active }) =>
										`relative cursor-default select-none rounded-lg  ${
											active
												? "bg-blue-100 text-blue-900"
												: "text-gray-900"
										}`
									}
									value={option}
								>
									<button
										onClick={(e)=>setData(e.target.textContent)}
										className={`${
											isSelected(
												option.name,
												selected.name
											)
												? "bg-blue-100 text-blue-900"
												: ""
										} w-full rounded p-2.5 flex items-center justify-between`}
									>
										<div>{option.name}</div>
										{isSelected(
											option.name,
											selected.name
										) && (
											<div>
												<CheckIcon className="w-6 h-6" />
											</div>
										)}
									</button>
								</Listbox.Option>
							))}
						</Listbox.Options>
					</div>
				</Transition>
			</Listbox>
		</div>
	);
}

function Sample({filter}){
	let [buttonText, setButtonText] = useState(["Environment"])
	let [hasItem, setHasItem] = useState([])
	function apple(event){
		// console.log(buttonText.includes("Environment"))
		if (buttonText.includes("Environment")){
			buttonText.splice(buttonText.indexOf("Environment"), 1);
		}
		if (buttonText.includes(event.target.textContent)===false){
			setButtonText(current => [...current, event.target.textContent]);
		}
	}
	return (
		<Disclosure>
			{({open}) => (
				<>
					<Disclosure.Button className="w-full">
						<div className="w-full border rounded-lg px-3 p-2 flex justify-between">
							<div className="flex gap-2 flex-wrap">
								{buttonText.map((item)=>{
									if ('a') { // wanted to add a conditional logic here to check if an item is under group
										return (
											<div>
												<div className="bg-emerald-200 rounded-md p-1 px-3 text-emerald-900 flex justify-between gap-2">
													{item}
													<CheckCircleIcon className="w-6 h-6" />
												</div>
											</div>
										)
									}
								})}
							</div>
							<ChevronUpDownIcon className="w-6 h-6" />
						</div>
					</Disclosure.Button>
					<Transition
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Disclosure.Panel className="py-2 space-y-2">
							{rs.map((item)=>{
								if (item.type === filter) {
									// setHasItem(current => [...current, item.name])
									return (
										<>
											<div role="button" tabIndex={1} className={`${buttonText.includes(item.name)?'bg-blue-100 text-blue-900':''} rounded p-2.5 flex justify-between`} onClick={apple}>
												{item.name}
												{buttonText.includes(item.name) && <div>
													<CheckIcon className="w-6 h-6" />
												</div>}
											</div>
										</>
									)
								}
							})}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	)
}