import { useQuery } from "@tanstack/react-query";
import Ratting from "../../../../Shared/Ratting/Ratting";
import { FaFacebookMessenger, FaBell, FaBluetooth, FaItunesNote, FaMagento, FaDungeon, FaSignal, FaSuitcaseRolling } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";


const LeftSide = ({ detail }) => {

    const { user, userName } = useContext(AuthContext);

    const { c_name, c_img, u_ratting, u_name, year, description, c_heading, description_2, model, fuel, km, reg_number, seat, insurance, abs, airbag, alarm, bluetooth, cruise, electric_door, remote, _id, c_prize, u_img, u_phone, } = detail;

    const { isLoading, refetch, data: comments = [] } = useQuery({
        queryKey: [`/comments/${c_name}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments/${c_name}`)
            const data = await res.json()
            return data
        }
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const imageBBHostKey = "14f1e107e329b44a04c4481b2e76451e";

    const handleComment = data => {
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
                    const image = imgData.data.url;
                    const name = data.name;
                    const ratting = data.ratting;
                    const comment = data.text;
                    const e_mail = data.email
                    const info = {
                        img: image,
                        name: name,
                        ratting: ratting,
                        e_mail: e_mail,
                        comment: comment,
                        type: c_name
                    }
                    fetch('http://localhost:5000/comments', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.status === "Successfully Added") {
                                reset()
                                toast.success(`Comment Added Successfully`)
                                refetch()
                            }
                        })
                }
                else {
                    toast.error('Please Add A Photo')
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "Successfully Delete") {
                    toast.success(`Comment Deleted Successfully`)
                    refetch()
                }
            })
    }

    const handleWishList = () => {
        const info = {
            c_img: c_img,
            c_name: c_name,
            o_img: u_img,
            o_name: u_name,
            u_email: user,
            u_name: userName,
            prize: c_prize,
            detail_id: _id,
            o_phone: u_phone
        }
        fetch('http://localhost:5000/wishList', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "Successfully Added") {
                    reset()
                    toast.success(`Wishlist Added Successfully`)
                    refetch()
                }else{
                    toast.error(`Wishlist Added Previously`)
                }
            })
    }

    return (
        <div>

            <div className="w-full px-5">
                <div className="">
                    <h2 className="text-3xl font-semibold">{c_name}</h2>
                    <div className="flex justify-start items-center mt-4 mb-4">
                        <div>
                            <Ratting rattings={u_ratting}></Ratting>
                        </div>
                        <div className="flex justify-start items-center ml-6">
                            <button className="btn btn-xs btn-primary" onClick={handleWishList}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                Save</button>
                            <button className="btn btn-xs btn-primary ml-4">
                                <FaFacebookMessenger></FaFacebookMessenger>
                                Share</button>
                        </div>
                    </div>
                    <p className="mb-5">Property of {u_name} from {year}</p>
                </div>
                <figure><img src={c_img} alt="Shoes" className="w-full" /></figure>
            </div>

            <div className="mt-12">
                <h1 className="text-2xl font-semibold">Description</h1>
                <h3 className="text-gray-400 mt-3">{c_heading}</h3>
                <p className="mt-5 text-gray-700">{description}</p>
                <p className="mt-5 text-gray-700 lg:contents hidden">{description_2}</p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">Characteristics:</h1>
                <div className="grid grid-cols-2 mt-4">
                    <p className="bg-sky-50 text-sm p-3">Model</p>
                    <p className="bg-sky-50 text-sm p-3">{model}</p>
                    <p className="bg-sky-100 text-sm p-3">Year</p>
                    <p className="bg-sky-100 text-sm p-3">{year}</p>
                    <p className="bg-sky-50 text-sm p-3">Fuel</p>
                    <p className="bg-sky-50 text-sm p-3">{fuel}</p>
                    <p className="bg-sky-100 text-sm p-3">KM</p>
                    <p className="bg-sky-100 text-sm p-3">{km} km</p>
                    <p className="bg-sky-50 text-sm p-3">Registration-Number</p>
                    <p className="bg-sky-50 text-sm p-3">{reg_number}</p>
                    <p className="bg-sky-100 text-sm p-3">Seats</p>
                    <p className="bg-sky-100 text-sm p-3">{seat}</p>
                    <p className="bg-sky-50 text-sm p-3">Insuarance</p>
                    <p className="bg-sky-50 text-sm p-3">{insurance}</p>
                </div>
            </div>

            <div className="mt-10">
                <h1 className="text-3xl font-semibold">Features:</h1>
                <div className="grid lg:grid-cols-3 grid-cols-2 mt-4 gap-4">
                    <p className="flex justify-start items-center  text-gray-400"><span className="mr-3"><FaMagento></FaMagento></span>{abs}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaBell></FaBell></span>{alarm}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaItunesNote></FaItunesNote></span>{remote}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaDungeon></FaDungeon></span>{electric_door}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaBluetooth></FaBluetooth></span>{bluetooth}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaSignal></FaSignal></span>{cruise}</p>
                    <p className="flex justify-start items-center text-gray-400"><span className="mr-3"><FaSuitcaseRolling></FaSuitcaseRolling></span>{airbag}</p>
                </div>
            </div>

            <div className="mt-12">
                <h1 className="text-3xl font-semibold">Reviews</h1>
                <div className='mt-12'>
                    {
                        comments?.data?.map(comment =>
                            <div key={comment._id} className='flex items-center mb-8'>
                                <div className="avatar mr-8">
                                    <div className="w-24 rounded-full">
                                        <img src={comment?.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h4>{comment?.name}</h4>
                                        <Ratting rattings={comment?.ratting}></Ratting>
                                    </div>
                                    <p>{comment?.comment}</p>
                                    {
                                        user === comment?.e_mail ?
                                            <button onClick={() => handleDelete(comment?._id)} className='btn btn-primary btn-sm mt-5'>Delete</button>
                                            :
                                            ''
                                    }
                                </div>
                            </div>)
                    }
                </div>
            </div>

            <div className='mt-12'>
                <div className='bg-white p-8'>
                    <h3 className='text-xl font-semibold'>Leave A Comment</h3>
                    <div className='divider'></div>

                    <div>

                        <form onSubmit={handleSubmit(handleComment)}>


                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text font-bold">E-mail</span>
                                </label>
                                <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered" value={user} readOnly />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>

                            <div className='flex items-center justify-between'>

                                <div className="form-control w-full max-w-xs mb-2">
                                    <label className="label"><span className="label-text font-bold">Your Name</span></label>
                                    <input type="text" {...register("name", { required: 'Name is required' })}
                                        className="input input-bordered w-full max-w-xs" value={userName} readOnly />
                                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-xs mb-2 ml-2">
                                    <label className="label"><span className="label-text font-bold">Please Ratting</span></label>
                                    <select {...register('ratting')} className="select input-bordered w-full max-w-xs">
                                        <option disabled selected>Please select a Option</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    {errors.ratting && <p className='text-red-600'>{errors.ratting?.message}</p>}
                                </div>

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input {...register("img", { required: 'Image is required' })} type="file" className="file-input file-input-bordered file-input-info  w-full max-w-xs" />
                                {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Your Comment</span>
                                </label>
                                <textarea type="text" {...register("text", { required: 'Comment is required' })} className="textarea textarea-bordered h-32" placeholder="Write Your Comment"></textarea>
                                {errors.text && <p className='text-red-600'>{errors.text?.message}</p>}
                            </div>

                            <input className='btn hover:bg-blue-500 mt-5 bg-teal-400 border-0' value='Submit Review' type="submit" />

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default LeftSide;