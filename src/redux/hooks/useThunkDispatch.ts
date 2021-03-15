import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "..";

const useThunkDispatch = () => useDispatch<AppThunkDispatch>();

export default useThunkDispatch;