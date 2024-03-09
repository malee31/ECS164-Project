import TickMarker from "./TickMarker.jsx";

export default function Timeline() {
	return (
		<div className="w-full px-8">
			<section className="grid grid-rows-2 grid-cols-[repeat(6,1fr)]">
				<TickMarker label="Start"/>
				<TickMarker label="5"/>
				<TickMarker label="10"/>
				<TickMarker label="15"/>
				<TickMarker label="20"/>
				<TickMarker label="25" labelEnd="30"/>

				<div className="row-start-2 col-span-full bg-slate-200">
					Timeline
				</div>
			</section>
		</div>
	)
}