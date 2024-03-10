import TickMarker from "./TickMarker.jsx";
import TimelineBlock from "./TimelineBlock.jsx";

export default function Timeline() {
	return (
		<div className="w-full px-8">
			<div className="w-full bg-slate-200 pb-2 scrollbar-hidden overflow-x-auto">
				<section className="grid gap-y-1 grid-cols-[repeat(30,minmax(120px,1fr))]">
					<TickMarker label="Start"/>
					{Array(28).fill(0).map((_, i) => (
						<TickMarker
							label={5 * (i + 1)}
							key={i}
						/>
					))}
					<TickMarker label="145" labelEnd="End"/>

					<TimelineBlock
						className="row-start-2 col-span-2 bg-purple-400"
						link="#"
					>
						Cut Potatoes
					</TimelineBlock>

					<TimelineBlock
						className="row-start-3 col-start-3 col-span-2 bg-purple-400"
						link="#"
					>
						Boil Potatoes
					</TimelineBlock>
				</section>
			</div>
		</div>
	)
}