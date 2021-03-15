export type Statement = {
    id: string;
    object: StatementObject;
}

export interface StatementObject
{
    type: string;
}

export interface Agent
{
    type: "Agent";
}