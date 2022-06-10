const useGetMachines = props => {
    let machines = [];

    const machineItems = props.machineData.items;
    const { machineId, machineName, machineDescription, machineSort, onSortMachines } = props;

    machineItems.forEach((machine, i) => {
        const id = machineId.get(machine).value;
        const name = machineName.get(machine).value;
        const description = machineDescription.get(machine).value;
        const sort = parseInt(machineSort.get(machine).value);

        machines.push({
            id,
            name,
            description,
            sort
        });
    });

    const callOnSortMachines = () => {
        if (onSortMachines && onSortMachines.canExecute) {
            onSortMachines.execute();
        }
    };

    return { machines, callOnSortMachines };
};

export default useGetMachines;
