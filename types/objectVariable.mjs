import {Variable, VariableType, variablesMap} from './variable.mjs';
import { ArrayVariable } from './arrayVariable.mjs';
import { NodeType } from '../node_types/nodeType.mjs';
import { getVariable } from '../node_types/assignmentExpression.mjs';

export class ObjectVariable extends Variable {

    constructor(properties) {
        super();
        this.type = VariableType.object;

        this.propertiesMap = new Map();

        properties.forEach(property => {
            this.addProperty(property);
        });
    }

    addProperty(property) {
        let key;
            if (property.key.type === NodeType.Identifier) {
                key = property.key.name;
            } else {
                key = property.key.value;
            }

            let value = getVariable(property.value);
            this.propertiesMap.set(key, value);
    }
    
    get(name)  {
        return this.propertiesMap.get(name);
    }

    set(key, value) {
        this.propertiesMap.set(name, element);
    }

}

function identifierValue(valueNode) {
    if (!variablesMap.has(valueNode.name)) {
        console.error("Variable that is given as value in key-value property for object is not registered!");
    }

    let variable = variablesMap.get(valueNode.name);

    switch (variable.type) {
        case VariableType.literal:
            return variable.value;
        case VariableType.object:
        case VariableType.array:
        case VariableType.unknown:
            return variable;
        default:
            console.error("Variable has no set variable type!");
    }
}