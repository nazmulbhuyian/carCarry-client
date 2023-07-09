import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


const UserProUpdate = ({ data, refetch }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const imageBBHostKey = '14f1e107e329b44a04c4481b2e76451e'
    const _id = data?._id;

    const handleSignIn = (data) => {

        if (data.img) {
            const image = data.img[0];
            const formData = new FormData();
            formData.append('image', image)
            const url = `https://api.imgbb.com/1/upload?key=${imageBBHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.status === 200) {
                        const userData = {
                            email: data.email,
                            name: data.name,
                            img: imgData.data.url,
                            _id
                        }
                        fetch(`http://localhost:5000/usersReg`, {
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
                    } else {
                        toast.error('Please Add A Photo')
                    }
                })
        } else {
            const userData = {
                email: data.email,
                name: data.name,
                _id
            }
            fetch(`http://localhost:5000/usersReg`, {
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
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>If you change E-mail You need to log-in again</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" defaultValue={data?.email} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: 'Name is required', })
                        }
                            className="input input-bordered w-full max-w-xs" defaultValue={data?.name} />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    {
                        data?.img ?
                            <div>
                                <h3 className="text-xl mt-2">Your Photo</h3>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ml-20 mt-2">
                                        <img src={data?.img} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input {...register("img", { required: 'Name is required' })} type="file" className="file-input file-input-bordered file-input-info  w-full max-w-xs" />
                            </div>
                    }

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

export default UserProUpdate;