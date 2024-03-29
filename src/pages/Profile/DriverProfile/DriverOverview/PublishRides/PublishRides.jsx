import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Spinner from "../../../../../Shared/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthProvider/AuthProvider";


const PublishRides = ({ datas, refetch }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [range, setRange] = useState(new Date());

    const { user } = useContext(AuthContext)

    const { isLoading, data: publishRides = [] } = useQuery({
        queryKey: [`/DriPubRides?email=/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/DriPubRides?email=${user}`)
            const data = await res.json()
            return data
        }
    });
    const publishRidess = publishRides?.data;

    if (isLoading) {
        return <Spinner />
    }

    let footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">Please pick the day.</p>;
    if (range) {
        footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">You select {format(range, 'PP')}</p>;
    }

    const date = format(range, 'PP');

    const handleSignIn = (data) => {
        const prize = parseInt(data.prize);
        const info = {
            from: data.from,
            to: data.to,
            prize: prize,
            role: 'driver',
            img: datas?.u_img,
            pub_detail: datas?._id,
            date: date,
            email: datas?.u_email,
            name: datas?.u_name,
            phone: datas?.u_phone
        }
        fetch(`https://car-carry-server.vercel.app/DriPubRides`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Added") {
                    toast.success('Rides Add successfully');
                    reset();
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }
    return (
        <div>
            <p className="text-sky-500 text-center mt-4 font-bold text-xl">You publish those rides</p>
            <div className="my-10">

                <div className="lg:overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Prize</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                publishRidess?.map((item, i) => <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <th>{item.date}</th>
                                    <th>{item.from}</th>
                                    <th>{item.to}</th>
                                    <th>{item.prize} $</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Publish Your Today Ride</h2>
                    <form onSubmit={handleSubmit(handleSignIn)}>

                        <DayPicker
                            id="test"
                            mode="single"
                            selected={range}
                            footer={footer}
                            onSelect={setRange}
                        />

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input type="text" {...register("from", { required: 'From is required' })} className="input input-bordered w-full max-w-xs" />
                            {errors.from && <p className='text-red-600'>{errors.from?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">To</span></label>
                            <input type="text" {...register("to", { required: 'To is required', })
                            }
                                className="input input-bordered w-full max-w-xs" />
                            {errors.to && <p className='text-red-600'>{errors.to?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Prize</span></label>
                            <input type="number" {...register("prize", { required: 'Prize is required', })
                            }
                                className="input input-bordered w-full max-w-xs" />
                            {errors.prize && <p className='text-red-600'>{errors.prize?.message}</p>}
                        </div>

                        <button type="submit" className='btn btn-accent w-full mt-5 hover:bg-emerald-500 p-2'>
                            Submit
                        </button>

                        {/* {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    } */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PublishRides;