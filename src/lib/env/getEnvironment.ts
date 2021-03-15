import { EnvironmentName } from "./EnvironmentName";
export default function getEnvironment(): EnvironmentName
{
    return process.env.NODE_ENV as EnvironmentName;
}
