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
            const res = await fetch(`http://localhost:5000/earnings/${user}`)
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
                            datas?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <th>{item.e_date}</th>
                                <th>0</th>
                                <th>{item.e_rental}</th>
                                <th>{item.e_prize}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Earnings;