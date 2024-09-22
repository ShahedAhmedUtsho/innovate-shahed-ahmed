
import { ProviderContext } from "@/Provider/Provider";
import { useContext } from "react";


const useProvider = () => {
    const share = useContext(ProviderContext)

    return share
};

export default useProvider;