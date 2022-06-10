import { createElement } from "react";
import useGetMachines from "./hooks/useGetMachines";
import SortableList, { SortableItem } from "react-easy-sort";
import "./ui/SortableGrid.css";
import useGetMachineHelper from "./hooks/useGetMachineHelper";

export function SortableGrid(props) {
    console.warn("props", props);

    if (props.machineData.status === "available") {
        const { machines, callOnSortMachines } = useGetMachines(props);
        const { draggedMachineId, droppedOverMachineId, setDraggedMachineId, setDroppedOverMachineId } =
            useGetMachineHelper(props);

        const onSortEnd = (oldIndex, newIndex) => {
            setDraggedMachineId(machines[oldIndex].id);
            setDroppedOverMachineId(machines[newIndex].id);
            callOnSortMachines();
        };
        return (
            <div
                style={{
                    marginTop: "50px"
                }}
            >
                <div
                    className="sortable-grid-wrapper"
                    style={{
                        width: "800px",
                        margin: "auto"
                    }}
                >
                    <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
                        {machines
                            .sort((a, b) => a.sort - b.sort)
                            .map((machine, i) => (
                                <SortableItem key={machine.id}>
                                    <div className="item">
                                        <img
                                            draggable={false}
                                            src={"https://picsum.photos/" + (200 + i * 50).toString()}
                                            width={"100%"}
                                            height={125}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                marginTop: "10px"
                                            }}
                                        >
                                            <h4 className="item-name">{machine.name}</h4>
                                            <h4 className="item-sort">{machine.sort}</h4>
                                        </div>
                                        <h5 className="item-desc">{machine.description}</h5>
                                    </div>
                                </SortableItem>
                            ))}
                    </SortableList>
                </div>
            </div>
        );
    } else {
        return <div>loading...</div>;
    }
}
