import CheckBox from "../CheckBox.jsx";

export default function Cards() {
	return (
		<div className="fade-in">
			<div className="w-full mt-4 px-8">
				<div className="w-full flex flex-col px-4 pt-2 pb-6 rounded-xl bg-slate-100">
					<div className="flex flex-row items-end ">
						<img
							className="w-8 h-8 mr-2 inline-block rounded"
							src="/Boil_Cat.png"
							alt="(Boil)"
						/>
						<span className="text-3xl w-full">
						Boil Potatoes
					</span>
						<span className="w-48 h-full block relative">
						<span className="text-xs text-nowrap absolute bottom-full">Estimated time remaining</span>
						<span>10:00</span>
					</span>
					</div>

					<div className="w-full mt-6 px-4 flex flex-col items-start gap-2">
						<CheckBox>Boil water</CheckBox>
						<CheckBox>Place potatoes in water</CheckBox>
						<CheckBox>Wait 5 minutes</CheckBox>
					</div>

					<div className="mt-16 px-4 flex flex-row justify-between">
						<div className="relative">
						<span className="text-xs absolute bottom-full left-0">
							Next step:
						</span>
							<span className="text-xl">
							Strain Potatoes
						</span>
						</div>

						<a
							className="block"
							href="#next"
						>
						<span className="text-xl">
							Complete &gt;
						</span>
						</a>
					</div>
				</div>
			</div>

			<div className="w-full mt-2 px-8">
				<div className="w-full flex flex-col px-4 py-2 rounded-xl bg-slate-100">
					<div className="flex flex-row items-end">
						<span className="w-48 h-full mt-2 block relative">
							<span className="text-xs text-nowrap absolute bottom-full">In about 15:00 for 5:00</span>
							<span>Strain Potatoes</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}