import React, { useState } from 'react'
import "./styles.scss"
import { initialAppliances } from '../../data/data';





const LoadCalculator = () => {
    // State for managing appliance inputs and custom appliances
    const [appliances, setAppliances] = useState(initialAppliances);
    const [inputs, setInputs] = useState(
        initialAppliances.map(() => ({ wattage: '', count: 1 }))
    );
    const [customAppliance, setCustomAppliance] = useState({ name: '', wattage: '' });

    // Updates wattage or count for existing appliances
    const updateInput = (index, key, value) => {
        setInputs(prevInputs => {
            const updated = [...prevInputs];
            updated[index][key] = value;
            return updated;
        });
    };

    // Adds a custom appliance to the list
    const addCustomAppliance = () => {
        if (!customAppliance.name || !customAppliance.wattage) return;
        setAppliances([...appliances, { name: customAppliance.name, options: [] }]);
        setInputs([...inputs, { wattage: customAppliance.wattage, count: 1 }]);
        setCustomAppliance({ name: '', wattage: '' }); // Reset the input fields
    };

    // Calculate the total load for all appliances
    const totalLoad = inputs.reduce(
        (sum, { wattage, count }) => sum + (wattage ? wattage * count : 0), 0
    );

    return (
        <div className='loadcalculator'>
            <div className="intro">
                <span>SSHML</span>
                <h2>Load Calculator</h2>
            </div>
            <div className="calculator">
                <h2>Calculate the Load</h2>
                <div className="tablewrapper">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Appliance</th>
                                <th>Wattage (Select or Enter)</th>
                                <th>Count</th>
                                <th>Total Load (W)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appliances.map((appliance, index) => (
                                <tr key={index}>
                                    <td>{appliance.name}</td>
                                    <td>
                                        <select
                                            value={inputs[index].wattage}
                                            onChange={e => updateInput(index, 'wattage', Number(e.target.value))}
                                        >
                                            <option value="">Select Wattage</option>
                                            {appliance.options.length > 0 ? (
                                                appliance.options.map((watt, idx) => (
                                                    <option key={idx} value={watt}>
                                                        {watt} W
                                                    </option>
                                                ))
                                            ) : (
                                                <option value={inputs[index].wattage}>{inputs[index].wattage} W</option>
                                            )}
                                        </select>
                                        {appliance.options.length === 0 && (
                                            <input
                                                type="number"
                                                placeholder="Enter wattage"
                                                value={inputs[index].wattage}
                                                onChange={e => updateInput(index, 'wattage', Number(e.target.value))}
                                                style={{ marginLeft: '10px' }}
                                            />
                                        )}
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={inputs[index].count}
                                            onChange={e => updateInput(index, 'count', Number(e.target.value))}
                                            min="1"
                                        />
                                    </td>
                                    <td>{inputs[index].wattage ? inputs[index].wattage * inputs[index].count : 0} W</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2>Total Load: {totalLoad} W</h2>

                <h3>Add Custom Appliance</h3>
                <div className='custom-watt'>
                    <input
                        type="text"
                        placeholder="Appliance Name"
                        value={customAppliance.name}
                        onChange={(e) => setCustomAppliance({ ...customAppliance, name: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Wattage"
                        value={customAppliance.wattage}
                        onChange={(e) => setCustomAppliance({ ...customAppliance, wattage: Number(e.target.value) })}
                        style={{ marginLeft: '10px' }}
                    />
                    <button onClick={addCustomAppliance} style={{ marginLeft: '10px' }}>Add Appliance</button>
                </div>
            </div>
        </div>
    )
}

export default LoadCalculator
