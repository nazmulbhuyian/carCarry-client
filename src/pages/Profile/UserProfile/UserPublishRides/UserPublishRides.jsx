import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


const UserPublishRides = ({datas, refetch}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [range, setRange] = useState(new Date());

    let footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">Please pick the day.</p>;
    if (range) {
        footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">You select {format(range, 'PP')}</p>;
    }

    const date = format(range, 'PP');

    const handleSignIn = (data) =>{
        const prize = parseInt(data.prize);
        const info = {
            from: data.from,
            to: data.to,
            prize: prize,
            img: datas?.img,
            pub_detail: datas?._id,
            role: 'lift',
            date: date,
            email: datas?.email,
            name: datas?.name,
            phone: datas?.phone
        }
        fetch(`http://localhost:5000/DriPubRides`, {
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
    );
};

export default UserPublishRides;