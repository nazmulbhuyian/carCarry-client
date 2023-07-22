import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


const DriverProUpdate = ({ data, refetch }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const _id = data?._id;

    const handleSignIn = (data) => {
        const userData = {
            u_name: data.name,
            u_phone: data.phone,
            c_name: data.c_name,
            c_prize: data.c_prize,
            model: data.model,
            fuel: data.fuel,
            km: data.km,
            seat: data.seat,
            _id
        }
        fetch(`https://car-carry-server.vercel.app/carsDetails`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully") {
                    toast.success('Your profile updated successfully')
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }
    return (
        <div>
            <p className="text-xl font-semibold text-red-500 text-center">Please Update Your Profile</p>
            <div className='flex justify-center items-center'>
                <div className='w-full p-7'>
                    <form onSubmit={handleSubmit(handleSignIn)}>

                        <div className="flex items-center justify-between">
                            <div className="form-control w-full max-w-xs mr-8">
                                <label className="label"><span className="label-text">Your Name</span></label>
                                <input type="text" {...register("name", { required: 'Name is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.u_name} />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Phone Number</span></label>
                                <input type="tel" {...register("phone", { required: 'Phone is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.u_phone} />
                                {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="form-control w-full max-w-xs mr-8">
                                <label className="label"><span className="label-text">Car Name</span></label>
                                <input type="text" {...register("c_name", { required: 'Car Name is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.c_name} />
                                {errors.c_name && <p className='text-red-600'>{errors.c_name?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Car Model</span></label>
                                <input type="text" {...register("model", { required: 'model is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.model} />
                                {errors.model && <p className='text-red-600'>{errors.model?.message}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="form-control w-full max-w-xs mr-8">
                                <label className="label"><span className="label-text">Fuel</span></label>
                                <input type="text" {...register("fuel", { required: 'fuel is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.fuel} />
                                {errors.fuel && <p className='text-red-600'>{errors.fuel?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">KM/hour</span></label>
                                <input type="text" {...register("km", { required: 'km is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.km} />
                                {errors.km && <p className='text-red-600'>{errors.km?.message}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="form-control w-full max-w-xs mr-8">
                                <label className="label"><span className="label-text">Seats</span></label>
                                <input type="text" {...register("seat", { required: 'seat is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.seat} />
                                {errors.seat && <p className='text-red-600'>{errors.seat?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Prize</span></label>
                                <input type="text" {...register("c_prize", { required: 'Car Prize is required', })
                                }
                                    className="input input-bordered w-full max-w-xs" defaultValue={data?.c_prize} />
                                {errors.c_prize && <p className='text-red-600'>{errors.c_prize?.message}</p>}
                            </div>
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

export default DriverProUpdate;