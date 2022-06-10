const useGetMachineHelper = props => {
    const { displayValue: draggedMachineId, setValue: setDraggedMachineId } = props.draggedMachineId;
    const { displayValue: droppedOverMachineId, setValue: setDroppedOverMachineId } = props.droppedOverMachineId;

    return {
        draggedMachineId,
        droppedOverMachineId,
        setDraggedMachineId,
        setDroppedOverMachineId
    };
};

export default useGetMachineHelper;
