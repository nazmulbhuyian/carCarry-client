import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "react-router-dom";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { DownloadPdf } from "./DownloadPdf";
import { ExelFileGenerate } from "./ExelFileGenerate";


const Earnings = () => {

    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: datas = [] } = useQuery({
        queryKey: [`/earnings/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/earnings/${user}`)
            const data = await res.json()
            return data
        }
    })

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Spinner />
    }
    if (isLoading) {
        return <Spinner />
    }

    const generateExcel = () => {
        ExelFileGenerate(datas, 'table.xlsx');
    };

    return (
        <div>

            <div className="flex items-center justify-end">
                <h2 className="text-end mb-3"><button className="btn btn-primary mr-3"><DownloadPdf datas={datas}></DownloadPdf></button></h2>
                <h2 className="text-end mb-3"><button className="btn btn-primary"><button onClick={generateExcel}>Download as Excel</button></button></h2>
            </div>

            <div className="lg:overflow-x-auto">
                <table className="table table-zebra lg:w-[800px]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Rides</th>
                            <th>Rentals</th>
                            <th>Earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas?.map((item, i) => {
                                // const sum = (item?.e_ride || 0) + (item?.e_rental || 0);
                                return (
                                    <tr key={item._id}>
                                        <th>{i + 1}</th>
                                        <th>{item.e_date}</th>
                                        <th>{item?.e_ride}</th>
                                        <th>{item.e_rental}</th>
                                        <th>{item.e_prize} $</th>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex items-center justify-evenly">
                <h2 className="text-xl font-semibold text-red-500">Total Ride: {datas?.reduce((prev, next) => prev + parseInt(next.e_ride || 0, 10), 0)}</h2>
                <h2 className="text-xl font-semibold text-red-500">Total Rent: {datas?.reduce((prev, next) => prev + parseInt(next.e_rental || 0, 10), 0)}</h2>
                <h2 className="text-xl font-semibold text-red-500">Total Earn: {datas?.reduce((prev, next) => prev + parseInt(next.e_prize || 0, 10), 0)} $</h2>
            </div>

        </div>
    );
};

export default Earnings;