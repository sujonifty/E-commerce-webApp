import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useCart = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic= useAxiosPublic();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/carts?email=${user.email}`);
            return res.data;
        }

    })

    return [cart, refetch]

};

export default useCart;