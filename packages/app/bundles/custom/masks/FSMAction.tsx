import { Node, NodeParams } from 'protoflow';
import React from 'react';

const FSMActionMask = ({ node = {}, nodeData = {}, children }: any) => {
    return (
        <Node node={node} isPreview={!node.id} title='fsmAction' color="#ff0044" id={node.id} skipCustom={true} disableInput disableOutput>
            <NodeParams id={node.id} params={[
                {
                    label: 'FSM name', 
                    field: 'param-1', 
                    type: 'input' 
                }, 
                {
                    label: 'action', 
                    field: 'param-2', 
                    type: 'input' 
                }
                ]} />
        </Node>
    )
}

export default {
    id: 'fsmAction',
    type: 'CallExpression',
    check: (node, nodeData) => {
        if(node.type == "CallExpression"){
            console.log('node Data', nodeData)
        }
        return node.type == "CallExpression" && nodeData.to?.startsWith('fsm.fsmAction') //TODO: Change output function name
    },
    getComponent: (node, nodeData, children) => <FSMActionMask node={node} nodeData={nodeData} children={children} />,
    getInitialData: () => { return { to: 'fsmAction', "param-1": '"none"', "param-2": '"none"' } }
}