import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import {
    useReactFlow, Node, Edge, useNodesState,
    useEdgesState, EdgeChange, NodeChange,
    addEdge as addReactFlowEdge, Connection,
    useEdges
} from 'reactflow';

type OnChange<ChangesType> = (changes: ChangesType[]) => void;

type DiagramState = {
    nodePreview: string,
    height: number | undefined
}

export const DiagramContext = createContext<DiagramState>({
    nodePreview: '',
    height: undefined
});

const getExtraData = () => {
    const { nodePreview, height } = useContext(DiagramContext);

    const isViewModePreview = nodePreview === 'preview'
    const preview = isViewModePreview ? 'node' : 'default'

    return {
        preview,
        flowsHeight: height
    }
}

export const useProtoflow = () => {
    const {
        setNodes: reactFlowSetNodes,
        setEdges: reactFlowSetEdges,
        project,
        setViewport,
        getNodes,
        getViewport,
        setCenter,
        getEdges,
        deleteElements,
        fitView
    } = useReactFlow()

    const extraData = getExtraData()

    const setNodes: (payload: Node<any>[] | ((nodes: Node<any>[]) => Node<any>[])) => void = (payload) => {
        var wrappedNodes
        if (typeof payload === 'function') {
            wrappedNodes = nds => {
                return payload(nds.map(n => ({ ...n, data: { ...n.data, ...extraData } })))
            }
        } else {
            wrappedNodes = payload.map(n => ({ ...n, data: { ...n.data, ...extraData } }))
        }
        reactFlowSetNodes(wrappedNodes);
    };
    const setEdges: (payload: Edge<any>[] | ((edges: Edge<any>[]) => Edge<any>[])) => void = (payload) => {
        var wrappedEdges
        if (typeof payload === 'function') {
            wrappedEdges = edgs => {
                return payload(edgs.map(e => ({ ...e, data: { ...e.data, ...extraData } })))
            }
        } else {
            wrappedEdges = payload.map(e => ({ ...e, data: { ...e.data, ...extraData } }))
        }
        reactFlowSetEdges(wrappedEdges)
    }

    return {
        setNodes,
        project,
        setViewport,
        getNodes,
        getViewport,
        setCenter,
        setEdges,
        getEdges,
        deleteElements,
        fitView
    }
};

export const useProtoNodesState = (initialItems: Node<any, string>[]): [Node<any, string>[], Dispatch<SetStateAction<Node<any, string>[]>>, OnChange<NodeChange>] => {
    const extraData = getExtraData()
    const [nodes, reactFlowSetNodes, onNodesChange] = useNodesState(initialItems.map(i => ({ ...i, data: { ...i.data, ...extraData } })))

    const setNodes: Dispatch<SetStateAction<Node<any, string>[]>> = (nodes: any[]) => reactFlowSetNodes(nodes.map(ele => ({ ...ele, data: { ...ele.data, ...extraData } })))

    return [nodes, setNodes, onNodesChange]
}

export const useProtoEdgesState = (initialItems: Edge<any>[]): [Edge<any>[], Dispatch<SetStateAction<Edge<any>[]>>, OnChange<EdgeChange>] => {
    const extraData = getExtraData()
    const [edges, reactFlowSetEdges, onEdgesChange] = useEdgesState(initialItems.map(i => ({ ...i, data: { ...i.data, ...extraData } })))

    const setEdges: Dispatch<SetStateAction<Edge<any>[]>> = (edgs: any[]) => reactFlowSetEdges(edgs.map(ele => ({ ...ele, data: { ...ele.data, ...extraData } })))

    return [edges, setEdges, onEdgesChange]
}

export const useProtoEdges = (): Edge<unknown>[] => {
    return useEdges()
}

export const addEdge = (edgeParams: Edge | Connection, edges: Edge[]) => {
    return addReactFlowEdge(edgeParams, edges)
}