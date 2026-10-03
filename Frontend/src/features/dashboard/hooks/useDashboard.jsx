import { useDispatch, useSelector } from "react-redux";
import { getTotalNetBalance, getTotalIncome, getTotalExpenses } from "../state/dashboardAction";


export const useDashboard = () => {
    const dispatch = useDispatch();
    const {summary , spending , transactions , loading , error} = useSelector((state) => state.dashboard);
    
    function totalBalance(type){
        const params = {type}
        const res = dispatch(getTotalNetBalance(params))
        return res;
    }

    function totalIncome(type){
        const params = {type}
        const res = dispatch(getTotalIncome(params))
        return res;
    }

    function totalExpenses(type){
        const params = {type}
        const res = dispatch(getTotalExpenses(params))
        return res;
    }

    return {
        totalBalance ,
        totalIncome ,
        totalExpenses ,
        summary , 
        spending , 
        transactions , 
        loading , 
        error , 
    }
}
